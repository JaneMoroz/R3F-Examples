import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  font-family: "Rubik", sans-serif;
  color: #ffffff;

  @media only screen and (max-width: 1000px) {
    grid-template-columns: min-content 1fr;
  }

  @media only screen and (max-width: 760px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr min-content;
  }
`;

export const Text = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 4rem;
  overflow: hidden;

  @media only screen and (max-width: 1000px) {
    padding: 2rem;
  }

  @media only screen and (max-width: 760px) {
    order: 2;
    padding: 1rem 2rem;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(-50%);
    height: 100%;
    width: 100%;
    border-radius: 250px;
    background: rgba(190, 186, 191, 0.65);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);

    @media only screen and (max-width: 760px) {
      border-radius: 100px 100px 0 0;
      transform: translateY(20%);
    }
  }
`;

export const Title = styled.div`
  font-family: "Raleway", sans-serif;
  z-index: 2;
  & h1 {
    font-size: 6rem;
    font-weight: 800;

    @media only screen and (max-width: 1000px) {
      font-size: 5rem;
    }

    @media only screen and (max-width: 830px) {
      font-size: 4rem;
    }

    @media only screen and (max-width: 760px) {
      font-size: 3em;
      text-align: center;
      margin-bottom: 1rem;
    }
  }
`;

export const List = styled.ul`
  font-family: "Raleway", sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  list-style: none;
  z-index: 2;
  & li {
    padding: 2px;
  }

  @media only screen and (max-width: 760px) {
    font-size: 1rem;
    font-weight: 500;
    display: flex;
    column-gap: 5px;
  }
`;
