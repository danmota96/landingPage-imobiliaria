import React from "react";
import * as S from "./style";
import person from "../../assets/imgs/person.png";


const Copy = () => {
  return (
    <S.mainContainer>
      <S.Copy>
        <h1>Exclusividade em cada detalhe</h1>
        <p>
          Com uma equipe altamente treinada e experiente, a Imobiliária Luxo tem
          o conhecimento e as conexões para ajudá-lo a encontrar o imóvel
          perfeito. Oferecemos uma ampla variedade de opções de imóveis de luxo,
          incluindo casas, apartamentos, mansões e propriedades comerciais.
        </p>
      </S.Copy>
      <S.pImg src={person} alt="person image"/>
      
    </S.mainContainer>
  );
};

export default Copy;
