import {
  $host,
  // $authHost
} from ".";

// export const createBrandLine = async (name) => {
//   const { data } = await $authHost.post("/model", name);
//   return data;
// };
export const getBrandLIne = async () => {
  const { data } = await $host.get("/model");
  return data;
};
export const getOneBrandLIne = async (name) => {
  const { data } = await $host.get(`/model/${name}`);
  return data;
};
