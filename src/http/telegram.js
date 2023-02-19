import { $host } from '.';

export const sendMessage = async (name) => {
  const path = 'api/telegram/send';
  const response = $host.post(path, name);
  return response;
};
export const newSubscrible = async () => {
  const path = '/api/message/subscrible';
  const response = $host.post(path);
  return response;
};
