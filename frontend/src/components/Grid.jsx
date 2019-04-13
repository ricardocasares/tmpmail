import styled from "@emotion/styled";

export const Grid = styled.div`
  display: grid;
  grid-gap: ${({ gap = 0 }) => `${gap}px`};
  grid-template-rows: ${({ rows = "1fr" }) => rows};
  grid-template-columns: ${({ cols = "1fr" }) => cols};
`;

export default Grid;
