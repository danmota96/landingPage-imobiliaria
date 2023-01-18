import React from 'react'
import * as S from "./style";
import  logo from "../../assets/icons/logo.svg";

function Navbar() {
  return (
    <S.Navbar>
      <S.LogoImg src={logo} alt="logo" />
      <S.Buttons>
        <button>Sobre nós</button>
        <button>Imóveis</button>
        <button>Serviços</button>
        <button>Contato</button>
      </S.Buttons>
    </S.Navbar>
  );
}

export default Navbar;