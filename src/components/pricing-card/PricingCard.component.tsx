import React from "react";
import { Paragraph } from "../../ui/components/paragraph/Paragraph.component";
import { Button } from "../../ui/components/button/Button.component";
import { PricingCardTypes } from "./PricingCard.types";
import S from "./PricingCard.styles";

export const PricingCard: React.FC<PricingCardTypes> = ({ price, title, text }) => (
  <S.Wrapper>
    <S.Content>
      <S.Price>
        <Paragraph captionId={`$${price}`} color="extra-light" align="center" />
        <Paragraph captionId="per table" color="extra-light" align="center" />
      </S.Price>
      <S.Description>
        <S.Title>
          <Paragraph captionId={title} color="default" align="center" size="medium" textTransform />
        </S.Title>
        <S.Text>
          <ul>
            {text.split(',').map(el => <li>{el}</li>)}
          </ul>
        </S.Text>
        <Button captionId="Buy Now" align="center" />
      </S.Description>
    </S.Content>
  </S.Wrapper>
);