import React from "react";
import Link from "./Link";

const Header = () => {
  return (
    <div className="ui secondary poiting menu">
      <Link className="item" href="/">
        Accordion
      </Link>
      <Link className="item" href="/list">
        Wikipedia
      </Link>
      <Link className="item" href="/translate">
        Google Translate
      </Link>
      <Link className="item" href="/dropdown">
        Dropdown
      </Link>
    </div>
  );
};

export default Header;
