import styled, { css } from "styled-components";

export const MobileOuter = styled.div`
  justify-self: center;
  align-self: center;
  height: 670px;
  width: 370px;
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
  margin: 1rem 0;
`;

export const MobileInner = styled.div`
  display: grid;
  grid-template-rows: 110px 1fr;
  height: 100%;
  width: 100%;
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
  padding: 1rem 1.5rem 0 1.5rem;

  &::before {
    content: "";
    display: inline-block;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 24px;
    width: 180px;
    border-radius: 0 0 45px 45px;
    background: rgba(256, 256, 256, 0.3);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
  }
`;

export const Account = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 1rem;

  img {
    height: 40px;
    width: 40px;
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
  font-size: 0.7rem;
  line-height: 0.9rem;
  padding: 0.5rem 1rem;

  img {
    height: 50px;
    width: 50px;
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
  height: 3rem;
  width: 100%;
  background: #ffffff;
  border-radius: 35px;
  color: #c5c9cc;
  font-size: 0.7rem;

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
