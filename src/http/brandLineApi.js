import { $host, $authHost } from '.';

export const createBrandLine = async (name) => {
  const { data } = await $authHost.post('api/brand-line', name);
  return data;
};
export const getBrandLIne = async () => {
  const { data } = await $host.get('api/brand-line');
  return data;
};
