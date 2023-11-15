import React from "react";
import { Navbar, NavbarContent, NavbarItem, navbar } from "@nextui-org/react";


export default function Footer() {

  return (
    <Navbar>
      <NavbarContent>
        <div className="footer">
          <NavbarItem >
            Powered by
          </NavbarItem>
          <NavbarItem >
            <a href="https://personal-portfolio-marinimarcos.vercel.app/">
              <strong className="copyright">Marini Marcos</strong>
            </a>
          </NavbarItem>
        </div>
      </NavbarContent>
    </Navbar>
  );
}
