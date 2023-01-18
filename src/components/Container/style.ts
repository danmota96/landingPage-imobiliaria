import styled, { css } from "styled-components";

export const mainContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    height: 85vh;
    width: 100vw;
    background: rgb(241, 241, 241);
    background: linear-gradient(
      90deg,
      rgba(241, 241, 241, 1) 0%,
      rgba(65, 65, 65, 1) 100%,
      rgba(0, 0, 0, 1) 100%
    );
    position: absolute;
  `}
`;

export const Copy = styled.div`
  ${({ theme }) => css`
    width: 40.2rem;
    height: 22.75rem;
    margin-left: 2rem;
    margin-top: 8rem;
    font-family: ${theme.fonts.logoFontFamily};
    h1 {
      font-weight: 600;
      font-size: 64px;
      line-height: 78px;
    }
    p {
      margin-top: 53px;
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 26px;
    }
  `}
`;

export const pImg = styled.img`
  ${({ theme }) => css`
    width: 50rem;
    height: 50rem;
    margin-top: 4.3rem;
  `}
`;
