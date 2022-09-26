import React from "react";
import { ProgressBarTypes } from "./ProgressBar.types";
import { Paragraph } from "../paragraph/Paragraph.component";
import S from "./ProgressBar.styles";

export const ProgressBar: React.FC<ProgressBarTypes> = ({ title, progress }) => (
  <S.Wrapper>
    <S.Label>
      <Paragraph captionId={title} color="default" />
      <Paragraph captionId={`${progress}%`} color="default" />
    </S.Label>
    <S.ProgressWrapper>
      <S.Progress progress={progress} />
    </S.ProgressWrapper>
  </S.Wrapper>
);
