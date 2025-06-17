const CurrentWeather = ({ data, unit, onUnitChange }) => {
  if (!data) return null;
  
  const { name, sys, main, weather, wind } = data;
  
  return React.createElement('div', {
    className: 'current-weather',
    style: {
      padding: '30px',
      margin: '20px auto',
      maxWidth: '800px'
    }
  },
    React.createElement('div', {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px'
      }
    },
      React.createElement('h2', {
        style: {
          fontSize: '2rem',
          color: 'white',
          textShadow: '0 1px 3px rgba(0,0,0,0.5)'
        }
      }, `${name}, ${sys.country}`),
      
      React.createElement('div', {
        className: 'unit-toggle',
        style: {
          display: 'flex',
          gap: '10px'
        }
      },
        React.createElement('button', {
          onClick: () => onUnitChange('metric'),
          style: {
            background: unit === 'metric' ? 'var(--primary)' : 'rgba(255,255,255,0.2)',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '20px',
            cursor: 'pointer',
            color: unit === 'metric' ? 'white' : 'rgba(255,255,255,0.8)',
            fontWeight: '600',
            transition: 'var(--transition)'
          }
        }, '°C'),
        
        React.createElement('button', {
          onClick: () => onUnitChange('imperial'),
          style: {
            background: unit === 'imperial' ? 'var(--primary)' : 'rgba(255,255,255,0.2)',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '20px',
            cursor: 'pointer',
            color: unit === 'imperial' ? 'white' : 'rgba(255,255,255,0.8)',
            fontWeight: '600',
            transition: 'var(--transition)'
          }
        }, '°F')
      )
    ),
    
    React.createElement(WeatherCard, {
      isCurrent: true,
      title: 'Current Weather',
      temp: main.temp,
      feelsLike: main.feels_like,
      icon: weather[0].icon,
      description: weather[0].description,
      humidity: main.humidity,
      wind: wind.speed,
      unit: unit
    })
  );
};