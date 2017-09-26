import fetch from 'isomorphic-fetch';


export default (url, method, body = null) => fetch(url, {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  method,
  body,
}).then(res => res.json());
