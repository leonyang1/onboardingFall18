import styled from "styled-components";
import { Flex } from "grid-styled";


export const Bar = styled.input`
  /* Adapt the colors based on primary prop */
  padding: 0.5em;
  margin: 0.5em;
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

export const No = styled(Flex)`
  color: palevioletred;
  font-size: 2em;
  margin: 1em;
  padding: 1 em 1em;
  justify-content: center;
  background: papayawhip
`