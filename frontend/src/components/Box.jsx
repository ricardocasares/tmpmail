import styled from "@emotion/styled";

const prop = p => props => `${props[p] ? `${props[p]}px` : ""}`;

export default styled.div`
  margin: ${prop("m")};
  margin-top: ${prop("mt")};
  margin-left: ${prop("ml")};
  margin-right: ${prop("mr")};
  margin-bottom: ${prop("mb")};
  padding: ${prop("p")};
  padding-top: ${prop("pt")};
  padding-left: ${prop("pl")};
  padding-right: ${prop("pr")};
  padding-bottom: ${prop("pb")};
`;
