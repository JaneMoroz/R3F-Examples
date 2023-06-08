import React from "react";

// Components
import Mobile from "./Mobile";

// Styled Components
import { Container, Title, List, Text } from "../../styles/globalStyles";

// Animation
const textVariant = {
  hidden: {
    x: -48,
    opacity: 0,
  },
  show: { x: 0, opacity: 1, transition: { duration: 1 } },
};

const titleVariant = {
  hidden: {
    x: -48,
    opacity: 0,
  },
  show: { x: 0, opacity: 1, transition: { duration: 1, delay: 1 } },
};

const listVariant = {
  hidden: {
    x: 48,
    opacity: 0,
  },
  show: { x: 0, opacity: 1, transition: { duration: 1, delay: 1 } },
};

const Overlay = () => {
  return (
    <Container>
      <Text variants={textVariant} initial="hidden" animate="show">
        <Title variants={titleVariant} initial="hidden" animate="show">
          <h1>
            Ordering
            <br />
            flowers
            <br />
            is easy
          </h1>
        </Title>
        <List variants={listVariant} initial="hidden" animate="show">
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
