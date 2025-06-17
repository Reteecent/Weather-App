const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = React.useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };
  
  return React.createElement('div', {
    className: 'search-container',
    style: {
      padding: '20px',
      textAlign: 'center',
      backgroundColor: 'rgba(44, 62, 80, 0.7)',
      borderBottom: '1px solid rgba(255,255,255,0.1)'
    }
  },
    React.createElement('form', {
      onSubmit: handleSubmit,
      style: {
        display: 'flex',
        maxWidth: '600px',
        margin: '0 auto'
      }
    },
      React.createElement('input', {
        type: 'text',
        value: query,
        onChange: (e) => setQuery(e.target.value),
        placeholder: 'Enter city name...',
        style: {
          flex: '1',
          padding: '15px',
          border: 'none',
          borderRadius: '30px 0 0 30px',
          fontSize: '1rem',
          outline: 'none',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }
      }),
      React.createElement('button', {
        type: 'submit',
        style: {
          background: 'var(--primary)',
          color: 'white',
          border: 'none',
          padding: '15px 25px',
          borderRadius: '0 30px 30px 0',
          cursor: 'pointer',
          fontSize: '1rem',
          fontWeight: '600',
          transition: 'var(--transition)',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        },
        onMouseOver: (e) => e.target.style.background = 'var(--secondary)',
        onMouseOut: (e) => e.target.style.background = 'var(--primary)'
      }, 'Search')
    )
  );
};