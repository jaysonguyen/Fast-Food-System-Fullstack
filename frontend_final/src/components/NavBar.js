import React from "react";

import { CasherHeader, AuthHeader, DefaultHeader } from "./Layout/Header";

export const NavBar = () => {
  let user = "casher";
  switch (user) {
    case "casher":
      return <CasherHeader />;
    case "admin":
      return <AuthHeader />;
    default:
      return <DefaultHeader />;
  }
};
