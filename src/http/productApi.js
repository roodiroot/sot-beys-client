import { $host, $authHost } from '.';

export const createProductItem = async (name) => {
  const { data } = await $authHost.post('api/product', name);
  return data;
};
export const getProductItems = async (categoryId, brandLineId) => {
  const { data } = await $host.get('api/product', { params: { categoryId, brandLineId } });
  return data;
};
export const getOneProductItems = async (path) => {
  const { data } = await $host.get(`api/product/${path}`);
  return data;
};
