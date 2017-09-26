
import fetch from 'isomorphic-fetch';

export const getRequest = src => fetch(src);
export const postRequest = (src, body) => fetch(src, {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  method: 'POST',
  body,
});
export const putRequest = (src, body = null) => fetch(src, {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  method: 'PUT',
  body,
});
export const deleteRequest = src => fetch(src, {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  method: 'DELETE',
});
