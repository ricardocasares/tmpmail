import styled from "@emotion/styled";

export const Flex = styled.div`
  display: flex;
  align-items: ${({ align = "center" }) => align};
  flex-direction: ${({ direction = "column" }) => direction};
  justify-content: ${({ justify = "space-around" }) => justify};
`;

export default Flex;
