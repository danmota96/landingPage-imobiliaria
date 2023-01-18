import styled, { css } from "styled-components";

export const Navbar = styled.div`
  ${({ theme }) => css`
    width: 100vw;
    height: 15vh;
    background-color: ${theme.colors.primaryColor};
    display: flex;
    justify-content: space-around;
    align-items: center;
  `}
`;

export const Buttons = styled.div`
  ${({ theme }) => css`
    font-weight: bold;
    display: flex;
    gap: 2rem;
    height: 2rem;
    button {
      background-color: ${theme.colors.primaryColor};
      color: ${theme.colors.baseBg1};
      font-size: 24px;
      border: none;
       font-family: ${theme.fonts.logoFontFamily};
    }
  `}
`;

export const LogoImg = styled.img`
  ${({ theme }) => css`
    width: 5rem;
    height: 5rem;
  `}
`;
