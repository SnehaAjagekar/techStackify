const conf = {
  API_URL : import.meta.env.VITE_REACT_APP_API_URL || 'https://dev-api.collectorcrypt.com/',
  ENVIRONMENT : import.meta.env.VITE_REACT_APP_ENV || 'local',
};

export default conf;
  