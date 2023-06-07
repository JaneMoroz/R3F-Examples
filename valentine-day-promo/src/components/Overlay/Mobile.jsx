import React from "react";

// Styled components
import {
  MobileOuter,
  MobileInner,
  Header,
  Account,
  Main,
  Messages,
  NewMessage,
} from "./styles";

// Icons
import { BackIcon, DotsIcon } from "../../assets/icons";

// Images
import accountImg from "../../assets/images/account.jpg";

const Mobile = () => {
  return (
    <MobileOuter>
      <MobileInner>
        <Header>
          <BackIcon />
          <Account>
            <img src={accountImg} alt="" />
            <div>
              <p>Astrid Green</p>
              <span>Florist</span>
            </div>
          </Account>
          <DotsIcon />
        </Header>
        <Main>
          <Messages>Messages</Messages>
          <NewMessage>Type a message...</NewMessage>
        </Main>
      </MobileInner>
    </MobileOuter>
  );
};

export default Mobile;
