import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  padding: 20px;
  font-size: ${({ theme }) => theme.font.size.xs};
  border: none;
  border-radius: 4px;

  &::placeholder {
    color: ${({ theme }) => theme.color.gray};
  }
`;

export default { Input };
