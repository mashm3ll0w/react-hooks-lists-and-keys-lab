import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const renderLinks = links.map((link, index) => <a key={index} href={"#"+link}>{link}</a>)

  return <nav>{renderLinks}</nav>;
}

export default NavBar;
