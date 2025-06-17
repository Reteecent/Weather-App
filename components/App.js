class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: 'London',
      currentWeather: null,
      forecast: null,
      loading: true,
      error: null,
      unit: 'metric'
    };
  }

  componentDidMount() {
    this.fetchWeatherData();
  }

  fetchWeatherData = () => {
    const { city, unit } = this.state;
    const API_KEY = '78d510768d288c3b6507a610146d510e'; // Replace with your OpenWeatherMap API key
    const currentUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${API_KEY}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${unit}&appid=${API_KEY}`;

    this.setState({ loading: true, error: null });

    // Fetch current weather
    fetch(currentUrl)
      .then(response => {
        if (!response.ok) throw new Error('City not found');
        return response.json();
      })
      .then(data => {
        this.setState({ currentWeather: data });
        // Fetch forecast after current weather
        return fetch(forecastUrl);
      })
      .then(response => {
        if (!response.ok) throw new Error('Forecast data unavailable');
        return response.json();
      })
      .then(data => {
        this.setState({ forecast: data, loading: false });
      })
      .catch(error => {
        this.setState({ 
          error: error.message || 'Failed to fetch weather data', 
          loading: false 
        });
      });
  };

  handleSearch = (city) => {
    this.setState({ city }, this.fetchWeatherData);
  };

  handleUnitChange = (unit) => {
    this.setState({ unit }, this.fetchWeatherData);
  };

  render() {
    const { currentWeather, forecast, loading, error, unit } = this.state;

    return React.createElement('div', { className: 'container' },
      React.createElement('div', { className: 'weather-app' },
        React.createElement(Header, null),
        
        React.createElement(SearchBar, { onSearch: this.handleSearch }),
        
        loading ? 
          React.createElement('div', { className: 'loading' },
            React.createElement('p', null, 'Loading weather data...')
          ) : 
          React.createElement(React.Fragment, null,
            error ? 
              React.createElement('div', { className: 'error' },
                React.createElement('p', null, error)
              ) : 
              React.createElement(React.Fragment, null,
                React.createElement(CurrentWeather, { 
                  data: currentWeather, 
                  unit: unit,
                  onUnitChange: this.handleUnitChange 
                }),
                
                React.createElement(Forecast, { data: forecast, unit: unit })
              )
          ),
        
        React.createElement(Footer, null)
      )
    );
  }
}