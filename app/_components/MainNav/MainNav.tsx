'use client'

import React from "react";
import {Wrapper, LogoContainer, LinksList, LinkLi, MobileText, Text} from "./MainNav.styled";
import Button from "../../_styled/Button.styled";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {TbPokeball} from "react-icons/tb";

const MainNav: React.FC = () => {
  const path = usePathname();
  const links = [
    {href: "/pokemon-list", text: "Pokemon List", mobileText: "Pokemons"},
    {href: "/berries", text: "Berries"},
    {href: "/moves", text: "Moves"},
  ]

  return <Wrapper>
    <LogoContainer>
      <TbPokeball/>
    </LogoContainer>
    <LinksList>
      {links.map(({href, text, mobileText}) => (
        <LinkLi key={href}>
          <Button as={Link}
                  href={href}
                  $active={path === href}>
            {mobileText && <MobileText>{mobileText}</MobileText>}
            <Text>{text}</Text>
          </Button>
        </LinkLi>
      ))}
    </LinksList>
  </Wrapper>;
}

export default MainNav;

