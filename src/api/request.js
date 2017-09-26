import fetch from 'isomorphic-fetch';


export default (url, options) => fetch(url, {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  ...options,
}).then(res => res.json());
