const Header = () => {
  return React.createElement('header', { 
    className: 'app-header',
    style: {
      backgroundColor: 'rgba(26, 42, 108, 0.9)',
      padding: '20px',
      textAlign: 'center',
      borderBottom: '2px solid rgba(255, 255, 255, 0.1)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, 
    React.createElement('div', { 
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'url("https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_1280.jpg") center/cover',
        opacity: '0.2',
        zIndex: '0'
      }
    }),
    React.createElement('h1', {
      style: {
        color: 'white',
        fontSize: '2.5rem',
        marginBottom: '10px',
        position: 'relative',
        zIndex: '1',
        textShadow: '0 2px 4px rgba(0,0,0,0.5)'
      }
    }, 'Weather Forecast'),
    React.createElement('p', {
      style: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: '1.1rem',
        position: 'relative',
        zIndex: '1'
      }
    }, 'Real-time weather data for any location')
  );
};