import React from "react";

// Styled components
import {
  MobileOuter,
  MobileInner,
  Header,
  Account,
  Main,
  Messages,
  Message,
  NewMessage,
} from "../../styles/mobileStyles";

// Icons
import { BackIcon, DotsIcon, SendIcon } from "../../assets/icons";

// Images
import accountImg from "../../assets/images/account.jpg";

// Data
import messages from "../../assets/data/messages";

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
          <Messages>
            {messages.map((msg, index) => (
              <Message
                right={msg.side === "right"}
                left={msg.side === "left"}
                img={msg.side === "img"}
                price={msg.side === "price"}
              >
                {msg.message}
              </Message>
            ))}
          </Messages>
          <NewMessage>
            <span>Type a message...</span>
            <span>
              <SendIcon />
            </span>
          </NewMessage>
        </Main>
      </MobileInner>
    </MobileOuter>
  );
};

export default Mobile;
