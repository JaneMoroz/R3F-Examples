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

// Animation
const mobileOuterVariant = {
  hidden: {
    x: 48,
    opacity: 0,
  },
  show: { x: 0, opacity: 1, transition: { duration: 1, delay: 1 } },
};

const Mobile = () => {
  return (
    <MobileOuter variants={mobileOuterVariant} initial="hidden" animate="show">
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
                key={index}
                right={msg.side === "right"}
                left={msg.side === "left"}
                img={msg.side === "img"}
                price={msg.side === "price"}
                initial={{
                  y: 10,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.5, delay: msg.delay },
                }}
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
