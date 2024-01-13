import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api',
  params: {
    key: '40796330-ab77dcaa57b018c8ff827eca1',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 12,
  },
});

export const getAllCards = () => {
  return instance.get('/');
};

export const getImage = (q, page = 1) => {
  return instance.get('/', {
    params: {
      q,
      page,
    },
  });
};
