import { BiChevronRight } from "react-icons/bi";
import styled from "styled-components";

const ListItem = styled.li`
  display: flex;
  align-items: center;
  column-gap: 10px;
  padding: 5px 0;
`;

const Icon = styled(BiChevronRight)`
  color: ${({ theme }) => theme.color.secondary.dark};
`;

const Text = styled.span`
  font-size: ${({ theme }) => theme.font.size.xxxs};
`;

export default { ListItem, Text, Icon };