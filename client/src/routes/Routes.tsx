import { ReactElement } from "react";
import { Route, Routes as Switch } from "react-router-dom";
import { HomePage, LoginPage } from "../pages";
import { pathes } from "./pathes";

export const Routes = (): ReactElement => {
  return (
    <Switch>
      <Route
        path={pathes.HOME}
        element={
          <HomePage/>
        }
      />
      <Route
        path={pathes.LOGIN}
        element={
          <LoginPage type="sign-in" />
        }
      />
      <Route
        path={pathes.REGISTRATION}
        element={
          <LoginPage type="sign-up" />
        }
      />
      <Route
        path={pathes.DEFAULT}
        element={
          <HomePage />
        }
      />
    </Switch>
  );
};