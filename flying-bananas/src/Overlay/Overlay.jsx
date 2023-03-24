import { Container, Title, List, Hamburger } from "./styles";
import { VelvetBanana } from "./VelvetBanana";

export default function Overlay() {
  return (
    <Container>
      <Title>
        <h1>
          LANDING
          <br />
          PAGES —
        </h1>
        <p>In React & Threejs —</p>
      </Title>
      <List>
        Inspiration and ideas
        <br />
        Fundamentals
        <br />
        Finding models
        <br />
        Preparing them for the web
        <br />
        Displaying and changing models
        <br />
        Animation fundamentals
        <br />
        Effects and making things look good
        <br />
        Performance and time to load
        <br />
      </List>
      <Hamburger>
        <div />
        <div />
        <div />
      </Hamburger>
      <VelvetBanana />
    </Container>
  );
}
