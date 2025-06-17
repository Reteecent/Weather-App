const WeatherCard = ({ title, temp, feelsLike, icon, description, humidity, wind, unit, isCurrent }) => {
  const getTempSymbol = () => unit === 'metric' ? '°C' : '°F';
  
  return React.createElement('div', {
    className: `weather-card ${isCurrent ? 'current' : ''}`,
    style: {
      background: 'var(--card-bg)',
      borderRadius: '15px',
      padding: '20px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
      transition: 'var(--transition)',
      margin: isCurrent ? '0' : '10px',
      width: isCurrent ? '100%' : '180px',
      textAlign: 'center',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.2)'
    }
  },
    React.createElement('h3', {
      style: {
        fontSize: isCurrent ? '1.8rem' : '1.2rem',
        marginBottom: '15px',
        color: 'var(--dark)',
        fontWeight: '600'
      }
    }, title),
    
    React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: isCurrent ? 'row' : 'column',
        gap: '15px'
      }
    },
      React.createElement('div', null,
        React.createElement('img', {
          src: `https://openweathermap.org/img/wn/${icon}@2x.png`,
          alt: description,
          style: {
            width: isCurrent ? '100px' : '70px',
            height: 'auto'
          }
        })
      ),
      
      React.createElement('div', {
        style: {
          fontSize: isCurrent ? '3.5rem' : '1.8rem',
          fontWeight: '700',
          color: 'var(--dark)'
        }
      }, `${Math.round(temp)}${getTempSymbol()}`)
    ),
    
    React.createElement('p', {
      style: {
        fontStyle: 'italic',
        margin: '10px 0',
        color: 'var(--dark)'
      }
    }, description),
    
    React.createElement('div', {
      style: {
        marginTop: '15px',
        display: 'grid',
        gridTemplateColumns: isCurrent ? '1fr 1fr' : '1fr',
        gap: '10px',
        textAlign: 'left'
      }
    },
      React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: '5px' } },
        React.createElement('span', { style: { fontWeight: '600', color: 'var(--dark)' } }, 'Feels like:'),
        `${Math.round(feelsLike)}${getTempSymbol()}`
      ),
      
      React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: '5px' } },
        React.createElement('span', { style: { fontWeight: '600', color: 'var(--dark)' } }, 'Humidity:'),
        `${humidity}%`
      ),
      
      React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: '5px' } },
        React.createElement('span', { style: { fontWeight: '600', color: 'var(--dark)' } }, 'Wind:'),
        `${wind} ${unit === 'metric' ? 'm/s' : 'mph'}`
      )
    )
  );
};