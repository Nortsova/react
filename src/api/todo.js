
import request from './request';


export const getDataRequest = () => request('api/data');

export const addItemRequest = data => request('api/data', {
  method: 'POST',
  data,
});

export const editItemRequest = (id, data) => request(`api/data/${id}`, {
  method: 'PUT',
  data,
});

export const checkItemRequest = id => request(`api/data-checked/${id}`, {
  method: 'PUT',
});

export const deleteItemRequest = id => request(`api/data/${id}`, {
  method: 'DELETE',
});
