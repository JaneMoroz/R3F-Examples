import React from "react";

// Styled components
import {
  MobileOuter,
  MobileInner,
  Header,
  Main,
  Messages,
  NewMessage,
} from "./styles";

const Mobile = () => {
  return (
    <MobileOuter>
      <MobileInner>
        <Header>Header</Header>
        <Main>
          <Messages>Messages</Messages>
          <NewMessage>Type a message...</NewMessage>
        </Main>
      </MobileInner>
    </MobileOuter>
  );
};

export default Mobile;
