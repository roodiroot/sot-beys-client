import {
  $host,
  // $authHost
} from ".";

// export const createCategory = async (name) => {
//   const { data } = await $authHost.post("/category", name);
//   return data;
// };
export const getCategory = async () => {
  const { data } = await $host.get("/category");
  return data;
};
export const getOneCategory = async (name) => {
  const { data } = await $host.get(`/category/${name}`);
  // console.log(data);
  return data;
};
export const getOneCategoryId = async (id) => {
  const { data } = await $host.get(`/category/`, { params: { id } });
  return data;
};
