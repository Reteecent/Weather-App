const Forecast = ({ data, unit }) => {
  if (!data || !data.list) return null;
  
  // Group forecast by day
  const dailyForecast = {};
  data.list.forEach(item => {
    const date = item.dt_txt.split(' ')[0];
    if (!dailyForecast[date]) {
      dailyForecast[date] = [];
    }
    dailyForecast[date].push(item);
  });
  
  // Get next 5 days
  const forecastDays = Object.keys(dailyForecast).slice(1, 6);
  
  // Get day's average data
  const getDayData = (day) => {
    const dayData = dailyForecast[day];
    const temps = dayData.map(item => item.main.temp);
    const feelsLike = dayData.map(item => item.main.feels_like);
    
    return {
      date: day,
      temp: temps.reduce((a, b) => a + b, 0) / temps.length,
      feelsLike: feelsLike.reduce((a, b) => a + b, 0) / feelsLike.length,
      icon: dayData[Math.floor(dayData.length / 2)].weather[0].icon,
      description: dayData[Math.floor(dayData.length / 2)].weather[0].description,
      humidity: dayData[Math.floor(dayData.length / 2)].main.humidity,
      wind: dayData[Math.floor(dayData.length / 2)].wind.speed
    };
  };
  
  const forecastItems = forecastDays.map(day => getDayData(day));
  
  // Format date to weekday
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { weekday: 'short' });
  };
  
  return React.createElement('div', {
    className: 'forecast',
    style: {
      padding: '20px',
      margin: '20px 0'
    }
  },
    React.createElement('h2', {
      style: {
        textAlign: 'center',
        color: 'white',
        marginBottom: '20px',
        fontSize: '1.8rem',
        textShadow: '0 1px 3px rgba(0,0,0,0.5)'
      }
    }, '5-Day Forecast'),
    
    React.createElement('div', {
      className: 'forecast-items',
      style: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '15px',
        maxWidth: '1000px',
        margin: '0 auto'
      }
    },
      forecastItems.map((item, index) => 
        React.createElement(WeatherCard, {
          key: index,
          title: formatDate(item.date),
          temp: item.temp,
          feelsLike: item.feelsLike,
          icon: item.icon,
          description: item.description,
          humidity: item.humidity,
          wind: item.wind,
          unit: unit
        })
      )
    )
  );
};