import styled from "@emotion/styled";

export const Message = styled.div`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  word-break: break-all;

  pre {
    overflow-x: auto;
    white-space: pre-wrap;
    word-wrap: break-word;
  }
`;

export default Message;
