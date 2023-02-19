import AdminPanelPage from '../pages/AdminPanelPage';
import AuthPage from '../pages/AuthPage';
import BrandLine from '../pages/BrandLine';
import CartPage from '../pages/CartPage';
import CatalogPage from '../pages/CatalogPage';
import GideSizePage from '../pages/GideSizePage';
import Main from '../pages/Main';
import PersonalAreaPage from '../pages/PersonalAreaPage';
import ShopPage from '../pages/ShopPage';

export const allPublicPathes = [
  {
    path: '/',
    component: <Main />,
  },
  {
    path: '/shop',
    component: <ShopPage />,
  },
  {
    path: '/registration',
    component: <AuthPage />,
  },
  {
    path: '/login',
    component: <AuthPage />,
  },
  {
    path: '/catalog-category',
    component: <CatalogPage />,
  },
  {
    path: '/gaid-size',
    component: <GideSizePage />,
  },
  {
    path: '/brand-line',
    component: <BrandLine />,
  },
  {
    path: '/cart',
    component: <CartPage />,
  },
];
export const authPathes = [
  {
    path: '/admin',
    component: <AdminPanelPage />,
  },
  {
    path: '/personal-area',
    component: <PersonalAreaPage />,
  },
];

export const menuHeaderPathes = [
  {
    path: '/',
    component: <Main />,
    name: 'Главная',
  },
  // {
  //   path: '/shop',
  //   component: <ShopPage />,
  //   name: 'Магазин',
  // },
  {
    path: '/catalog-category',
    component: <CatalogPage />,
    name: 'Каталог',
  },
  {
    path: '/gaid-size',
    component: <GideSizePage />,
    name: 'Гид по размерам',
  },
  {
    path: '/brand-line',
    component: <BrandLine />,
    name: 'Брендовая линейка',
  },
  // {
  //   path: '/card-item',
  //   component: <CardItemPage />,
  //   name: 'Карта товара',
  // },
];
