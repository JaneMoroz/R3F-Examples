import styled from "styled-components";

export const Container = styled.div`
  font-family: "Rubik", sans-serif;
  color: #ffffff;
  & h1 {
    font-size: 96px;
    font-weight: 600;
  }
`;

export const Title = styled.div`
  position: absolute;
  top: 5vw;
  left: 5vw;
`;

export const List = styled.ul`
  position: absolute;
  bottom: 5vw;
  right: 5vw;
  width: 35ch;
  max-width: 40%;
  line-height: 1em;
  letter-spacing: -0.01em;
  text-align: right;
`;
