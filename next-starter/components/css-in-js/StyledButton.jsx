import styled, { css } from "styled-components";

// Dies ist bereits eine Valide React Komponente
export const StyledButton = styled.button`
  border-radius: 4px;

  background-color: rgb(99, 102, 241);
  font-weight: 600;
  color: white;

  &:hover {
    background-color: rgb(129, 140, 248);
  }

  // Über die props hat man zugriff auf alle Werte die der Komponente übergeben werden
  ${(props) => {
    switch (props.size) {
      case "small":
        return css`
          padding: 4px 8px;
          font-size: 12px;
          line-height: 16px;
        `;
      case "large":
        return css`
          padding: 10px 14px;
          font-size: 16px;
          line-height: 24px;
        `;
      default:
        return css`
          padding: 6px 10px;
          font-size: 14px;
          line-height: 20px;
        `;
    }
  }}
`;
