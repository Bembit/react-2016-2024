// removed url
const API = '';

export const getAll = () =>
  fetch(API)
    .then(res => res.json())
    .then(data => data)