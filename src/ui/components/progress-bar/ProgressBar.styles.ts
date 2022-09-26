import styled, { css } from "styled-components";
import { ProgressBarTypes } from "./ProgressBar.types";

const Wrapper = styled.div`
  padding: 10px 0;
`;

const Label = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 5px;
`;

const ProgressWrapper = styled.div`
  width: 100%;
  height: 15px;
  background-color: ${({ theme }) => theme.color.secondary.light};
`;

const Progress = styled.div<Partial<ProgressBarTypes>>`
  ${({ progress }) => progress && css`width: ${ progress }%`};
  height: 100%;
  background-color: ${({ theme }) => theme.color.secondary.dark};
`;

export default { Wrapper, Label, ProgressWrapper, Progress };