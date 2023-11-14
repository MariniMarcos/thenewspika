import React from "react";
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link,} from "@nextui-org/react";
import {SpikaLogo} from "./SpikaLogo.jsx";

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { label: "Inicio 📻", link: "/" },
    { label: "Radios Am 🎙️", link: "/lista-radios-am" },
    { label: "Radios Fm 🎶", link: "/lista-radios-fm" },
    { label: "Donaciones 🥰", link: "https://cafecito.app/marinimarcos"},
  ];

  const handleGoMain = () => {
    window.location.href = "/";
  }

  const handleMenuItemClick = (link) => {
    // Puedes realizar otras acciones antes de redirigir si es necesario
    window.location.href = link;
  }

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="navbarContent"
    >
      <NavbarContent className="sm:hidden" justify="start">
      <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="navbarContent sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <SpikaLogo/>
          <a onClick={handleGoMain} className="font-bold text-inherit tituloMovile">The New Spika</a>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 navbarMenu" justify="center">
        <NavbarBrand>
        <SpikaLogo/>
          <p className="font-bold text-inherit">The New Spika</p>
        </NavbarBrand>
        <NavbarItem>
          <Link color="foreground" href="#">
            Am
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link color="foreground" href="#" aria-current="page">
            Fm
          </Link>
        </NavbarItem>
        <NavbarItem>
        <a href='https://cafecito.app/marinimarcos' rel='noopener' target='_blank'><img srcset='https://cdn.cafecito.app/imgs/buttons/button_1.png 1x, https://cdn.cafecito.app/imgs/buttons/button_1_2x.png 2x, https://cdn.cafecito.app/imgs/buttons/button_1_3.75x.png 3.75x' src='https://cdn.cafecito.app/imgs/buttons/button_1.png' alt='Invitame un café en cafecito.app' /></a>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((menuItem, index) => (
          <NavbarMenuItem key={`${menuItem.label}-${index}`}>
            <Link
              className="w-full"
              style={{ color: 'black' }}
              onClick={() => handleMenuItemClick(menuItem.link)}
              size="lg"
            >
              {menuItem.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}