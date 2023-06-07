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

  &::before {
    content: "";
    display: inline-block;
    position: absolute;
    top: 0;
    left: -50%;
    transform: translateX(50%);
    height: 100%;
    width: 50%;
    border-radius: 30%;
    background: rgba(190, 186, 191, 0.65);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(8px);
    /* box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.125); */
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 4rem;
  z-index: 2;
`;

export const Title = styled.div`
  font-family: "Raleway", sans-serif;
  & h1 {
    font-size: 6rem;
    font-weight: 800;
  }
`;

export const List = styled.ul`
  font-family: "Raleway", sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  list-style: none;

  & li {
    padding: 2px;
  }
`;

export const MobileOuter = styled.div``;

export const MobileInner = styled.div``;

export const Header = styled.div``;

export const Main = styled.div``;

export const Messages = styled.div``;

export const NewMessage = styled.div``;
