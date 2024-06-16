"use client";

import { APP_NAME } from "@/lib/constants";
import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { useState } from "react";

const nav_items = {
  Home: "/",
  About: "/about-us",
  Services: "/services",
  "Find a doctor": "/find-a-doctor",
};

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent justify="start">
        <NavbarMenuToggle
          className="sm:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />

        <NavbarBrand>
          <p className="font-bold text-blue-600">{APP_NAME}</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {Object.entries(nav_items).map(([key, value]) => (
          <NavbarItem key={key}>
            <Link color="foreground" href={value}>
              {key}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="/register" variant="shadow">
            Get Started
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {Object.entries(nav_items).map(([key, value]) => (
          <NavbarMenuItem key={key}>
            <Link color="foreground" href={value}>
              {key}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
