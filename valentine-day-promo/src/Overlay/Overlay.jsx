import React from "react";

// Components
import Mobile from "./Mobile";

// Styled Components
import { Container, Title, List, Text } from "./styles";

const Overlay = () => {
  return (
    <Container>
      <Text>
        <Title>
          <h1>
            Ordering
            <br />
            flowers
            <br />
            is easy
          </h1>
        </Title>
        <List>
          <li>Roses</li>
          <li>Lilies</li>
          <li>Tulips</li>
          <li>Orchids</li>
          <li>Sunflowers</li>
          <li>Peonies</li>
          <li>Irises</li>
          <li>Others</li>
        </List>
      </Text>
      <Mobile />
    </Container>
  );
};

export default Overlay;
