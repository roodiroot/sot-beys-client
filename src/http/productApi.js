import { $host } from ".";

export const getProductItems = async ({
  categoryId,
  modelId,
  typeId,
  pagination,
  sort,
}) => {
  const { page, perPage } = pagination;
  const { field, order } = sort;
  const params = {
    params: {
      filter: JSON.stringify({
        categoryId: categoryId,
        modelId: modelId,
        typeId: typeId,
      }),
      range: JSON.stringify([perPage, (page - 1) * perPage]),
      sort: JSON.stringify([field, order]),
    },
  };
  const { data } = await $host.get("/product", params);
  return data;
};

export const getOneProductItems = async (path) => {
  const { data } = await $host.get(`/product/${path}`);
  return data;
};
