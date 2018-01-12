import axios from 'axios';

export default (url, options) => axios({
  method: 'GET',
  url,
  ...options,
})
  .then(res => res.data);
