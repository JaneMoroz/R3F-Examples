import styled, { css } from "styled-components";

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
    border-radius: 250px;
    background: rgba(190, 186, 191, 0.65);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
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

export const MobileOuter = styled.div`
  justify-self: center;
  align-self: center;
  height: 830px;
  width: 450px;
  /* background: rgba(190, 186, 191, 0.65); */
  background: rgb(227, 227, 227);
  background: linear-gradient(
    145deg,
    rgba(227, 227, 227, 0.5) 0%,
    rgba(221, 221, 221, 0.5) 100%
  );
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 61px;
  border: 1px solid rgba(256, 256, 256, 0.28);
  padding: 1rem;
`;

export const MobileInner = styled.div`
  display: grid;
  grid-template-rows: 110px 1fr;
  height: 100%;
  width: 100%;
  /* background: rgba(190, 186, 191, 0.65); */
  background: rgb(232, 232, 232);
  background: linear-gradient(
    145deg,
    rgba(232, 232, 232, 0.5) 0%,
    rgba(216, 216, 216, 0.5) 100%
  );
  border-radius: 45px;
  border: 1px solid rgba(256, 256, 256, 0.28);
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 1rem;
  position: relative;
  background: rgba(190, 186, 191, 0.65);
  border-radius: 45px 45px 0 0;
  border: 1px solid rgba(256, 256, 256, 0.28);
  padding: 2.5rem 2rem 1rem 2rem;

  &::before {
    content: "";
    display: inline-block;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 32px;
    width: 180px;
    border-radius: 0 0 45px 45px;
    background: rgba(256, 256, 256, 0.3);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    /* box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.125); */
  }
`;

export const Account = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 1rem;

  img {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    object-fit: cover;
  }

  div {
    display: flex;
    flex-direction: column;

    p {
      font-size: 0.8rem;
      font-weight: 500;
    }

    span {
      font-size: 0.6rem;
    }
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
`;

export const Messages = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  row-gap: 0.6rem;
`;

export const Message = styled.li`
  max-width: 70%;
  font-size: 0.75rem;
  line-height: 0.9rem;
  padding: 1rem;

  img {
    height: 65px;
    width: 65px;
    object-fit: cover;
    border-radius: 10px;
  }

  ${(props) =>
    props.left &&
    css`
      background: rgba(238, 229, 244, 0.7);
      color: #9d8189;
      border-radius: 10px 10px 10px 4px;
    `}
  ${(props) =>
    props.right &&
    css`
      align-self: flex-end;
      background: rgba(256, 256, 256, 1);
      color: #a5a5a5;
      border-radius: 10px 10px 4px 10px;
    `}
  ${(props) =>
    props.price &&
    css`
      display: grid;
      grid-template-columns: min-content 1fr min-content;
      column-gap: 1rem;
      align-items: center;
      background: rgba(190, 186, 191, 0.65);
      color: #ffffff;
      border-radius: 10px 10px 10px 4px;
    `}
  ${(props) =>
    props.img &&
    css`
      display: flex;
      column-gap: 0.5rem;
      padding: 0;
    `}
`;

export const NewMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.5rem;
  height: 3.75rem;
  width: 100%;
  background: #ffffff;
  border-radius: 35px;
  color: #c5c9cc;
  font-size: 0.75rem;

  span:nth-of-type(1) {
    padding-left: 1.5rem;
  }

  span:nth-of-type(2) {
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(190, 186, 191, 0.65);
    height: 45px;
    width: 45px;
    border-radius: 50%;
  }
`;
