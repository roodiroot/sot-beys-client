import { $host } from ".";

export const createOrder = async (data) => {
  const req = await $host.post("/order", data);
  return req;
};
