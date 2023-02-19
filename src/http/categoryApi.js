import { $host, $authHost } from '.';

export const createCategory = async (name) => {
  const { data } = await $authHost.post('api/category', name);
  return data;
};
export const getCategory = async () => {
  const { data } = await $host.get('api/category');
  return data;
};
export const getOneCategory = async (name) => {
  const { data } = await $host.get(`api/category/${name}`);
  return data;
};
export const getOneCategoryId = async (id) => {
  const { data } = await $host.get(`api/category/`, { params: { id } });
  return data;
};
