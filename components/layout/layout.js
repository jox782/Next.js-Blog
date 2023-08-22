import { Fragment } from "react";
import MainNavigation from "./main-navigation";

const Layout = (props) => {
  return (
    <Fragment>
      <MainNavigation />
      {props.children}
    </Fragment>
  );
};

export default Layout;
