'use client'

import React from "react";
import * as S from "./MainNav.styled";
import * as SB from "../Button/Button.styled";
import Link from "next/link";

const MainNav: React.FC = () => {
  return <S.Wrapper>
    <S.LogoContainer>Logo</S.LogoContainer>
    <S.LinksList>
      <S.LinkLi>
        <SB.Button as={Link} href="/pokemon-list" $size="small" $variant="default">Pokemon List</SB.Button>
      </S.LinkLi>
      <S.LinkLi>
        <SB.Button as={Link} href="/berries" $variant="outline">Berries</SB.Button>
      </S.LinkLi>
      <S.LinkLi>
        <SB.Button as={Link} href="/moves" $size="large" $variant="soft">Moves</SB.Button>
      </S.LinkLi>
    </S.LinksList>
  </S.Wrapper>;
}

export default MainNav;

