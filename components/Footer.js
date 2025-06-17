const Footer = () => {
  return React.createElement('footer', {
    style: {
      backgroundColor: 'rgba(26, 42, 108, 0.9)',
      padding: '20px',
      textAlign: 'center',
      color: 'rgba(255, 255, 255, 0.7)',
      fontSize: '0.9rem',
      borderTop: '1px solid rgba(255,255,255,0.1)'
    }
  },
    React.createElement('p', null, 'Weather App © ', new Date().getFullYear()),
    React.createElement('p', { style: { marginTop: '10px' } }, 'Data provided by OpenWeatherMap')
  );
};