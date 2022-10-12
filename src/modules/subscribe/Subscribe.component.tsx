import { Parallax } from "../../ui/components/parallax/Parallax.component";
import image from "./img/gallery.jpg";
import { Header } from "../../ui/components/header/Header.component";
import { Button } from "../../ui/components/button/Button.component";
import { Container } from "../../ui/components/container/Container.component";
import S from "./Subscribe.styles";
import { Input } from "../../ui/components/input/Input.component";

export const Subscribe = () => (
  <Parallax image={image}>
    <Container>
      <S.Wrapper>
        <Header captionId="Subscribe to our newsletter" size="small" color="light" align="center" />
        <Input type="email" placeholder="Enter Your Email *" />
        <Button captionId="Subscribe" align="center" />
      </S.Wrapper>
    </Container>
  </Parallax>
);
