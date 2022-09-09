import { Container } from "../../ui/components/container/Container.component";
import { Header } from "../../ui/components/header/Header.component";
import S from './Statistic.styles';
import { statistics } from "./Statistic.utils";

export const Statistic = () => (
  <S.Wrapper>
    <Container>
      <S.Statistic>
        {statistics.map(statistic => (
         <div key={statistic.number}>
           <Header captionId={statistic.number} align="center" color="light" size="large"/>
           <Header captionId={statistic.title} align="center" color="light" size="small"/>
         </div>
        ))}
      </S.Statistic>
    </Container>
  </S.Wrapper>
)
