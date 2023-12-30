import AdminPanelPage from "../pages/AdminPanelPage";
import AuthPage from "../pages/AuthPage";
import BrandLine from "../pages/BrandLine";
import CartPage from "../pages/CartPage";
import CatalogPage from "../pages/CatalogPage";
import GideSizePage from "../pages/GideSizePage";
import Main from "../pages/Main";
import PersonalAreaPage from "../pages/PersonalAreaPage";
import ShopPage from "../pages/ShopPage";
import AboutPage from "../pages/about-page";
import ContactsPage from "../pages/contacts-page";
import PersonalPolicy from "../pages/personal-policy";

export const allPublicPathes = [
  {
    path: "/",
    component: <Main />,
  },
  {
    path: "/about",
    component: <AboutPage />,
  },
  {
    path: "/contacts",
    component: <ContactsPage />,
  },
  {
    path: "/registration",
    component: <AuthPage />,
  },
  {
    path: "/login",
    component: <AuthPage />,
  },
  {
    path: "/catalog-category",
    component: <CatalogPage />,
  },
  {
    path: "/gaid-size",
    component: <GideSizePage />,
  },
  {
    path: "/brand-line",
    component: <BrandLine />,
  },
  {
    path: "/cart",
    component: <CartPage />,
  },
  {
    path: "/personal-policy",
    component: <PersonalPolicy />,
  },
];
export const authPathes = [
  {
    path: "/admin",
    component: <AdminPanelPage />,
  },
  {
    path: "/personal-area",
    component: <PersonalAreaPage />,
  },
];

export const menuHeaderPathes = [
  {
    path: "/",
    component: <Main />,
    name: "Главная",
  },
  // {
  //   path: '/shop',
  //   component: <ShopPage />,
  //   name: 'Магазин',
  // },
  {
    path: "/catalog-category",
    component: <CatalogPage />,
    name: "Каталог",
  },
  {
    path: "/brand-line",
    component: <BrandLine />,
    name: "Модели",
  },
  // {
  //   path: "/gaid-size",
  //   component: <GideSizePage />,
  //   name: "Гид по размерам",
  // },
  {
    path: "/about",
    component: <AboutPage />,
    name: "О нас",
  },
  {
    path: "/contacts",
    component: <ContactsPage />,
    name: "Контакты",
  },
  // {
  //   path: '/card-item',
  //   component: <CardItemPage />,
  //   name: 'Карта товара',
  // },
];
