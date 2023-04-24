import React from "react";

import { CasherHeader, AuthHeader, DefaultHeader } from "./Layout/Header";

export const NavBar = () => {
  const pathname = window.location.pathname;
  if (pathname.includes("/admin")) {
    return <AuthHeader />;
  } else if (pathname.includes("/casher")) {
    return <CasherHeader />;
  } else {
    return <DefaultHeader />;
  }
};
