import { $host, $authHost } from '.';
import jwt_decode from 'jwt-decode';

export const registration = async (email, password) => {
  const { data } = await $host.post('api/user/registration', {
    email,
    password,
    role: 'ADMIN',
  });
  localStorage.setItem('token', data);
  return jwt_decode(data);
};
export const login = async (email, password) => {
  const { data } = await $host.post('api/user/login', { email, password });
  localStorage.setItem('token', data);
  return jwt_decode(data);
};
export const check = async () => {
  if (localStorage.length === 1) {
    const { data } = await $authHost.get('api/user/auth');
    localStorage.setItem('token', data.webToken);
    return jwt_decode(data.webToken);
  }
};
