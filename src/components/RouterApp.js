import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import CardItemPage from "../pages/CardItemPage";
import CatalogItems from "../pages/CatalogItems";
import Main from "../pages/Main";
import { allPublicPathes, authPathes } from "../utils/path";
import ModelItems from "../pages/ModelItems";

function RouterApp() {
  let isAuth = useSelector(({ user }) => user.isAuth);

  return (
    <Routes>
      {isAuth &&
        authPathes.map((c) => (
          <Route
            key={`${c.name}__${c.path}`}
            path={c.path}
            element={c.component}
            exact
          />
        ))}
      {allPublicPathes.map((c) => (
        <Route
          key={`${c.name}__${c.path}`}
          path={c.path}
          element={c.component}
          exact
        />
      ))}
      <Route path='brand-line'>
        <Route path=':model' element={<ModelItems />} exact />
      </Route>
      <Route path='brand-line'>
        <Route path=':model'>
          <Route path=':itemName' element={<CardItemPage />} />
        </Route>
      </Route>
      <Route path='catalog-category'>
        <Route path=':type' element={<CatalogItems />} exact />
      </Route>
      <Route path='catalog-category'>
        <Route path=':type'>
          <Route path=':itemName' element={<CardItemPage />} />
        </Route>
      </Route>
      <Route path='*' element={<Main />} />
    </Routes>
  );
}

export default RouterApp;
