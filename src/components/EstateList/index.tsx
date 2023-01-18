import React from "react";
import * as S from "./style";

const EstateList = () => {
  return (
    <S.estateContainer>
      <div>
        <h1>Imóveis em destaque</h1>
        <p>Veja nossos melhores imóveis</p>
      </div>
      <div>
        <div>Card 1</div>
        <div>Card 2</div>
        <div>Card 3</div>
      </div>
    </S.estateContainer>
  );
};

export default EstateList;
