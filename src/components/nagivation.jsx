import Link from "next/link";  //Para navegar dentro de la app
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  /* Link, */
  Button,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarMenuItem,Image
} from "@nextui-org/react";
import React from "react";
function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "about",
    "users",
    "services",
  ];
  return (
    <Navbar className="" onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
         <Image height={25} width={35} src={'https://raw.githubusercontent.com/LucianoVelasquez/nestjs-scrud/6127c54ef97649e2f091362c323ae1d866240820/males.png'} alt="logo"></Image>
          <p className="ml-3 font-bold text-inherit">PEOPLE</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" className="hover:text-slate-500 hover:delay-100" href="/about">
            About
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link className='text-blue-500 hover:text-blue-400 hover:delay-100' href="/users" aria-current="page">
            Users
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" className="hover:text-slate-500 hover:delay-100" href="/services">
            Services
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              href={`/${item}`}
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default Navigation;
