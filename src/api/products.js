import axios from 'axios';

//  URL API
const BASE_URL = 'https://dummyjson.com';

// Функция получения товаров. 
export const fetchProducts = async ({ queryKey }) => {
  const [_key, { limit, skip }] = queryKey; 
  
  const { data } = await axios.get(`${BASE_URL}/products`, {
    params: {
      limit: limit || 10, 
      skip: skip || 0,
    },
  });
  
  return data.products;
};