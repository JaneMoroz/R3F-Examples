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
} from "./styles";

// Icons
import { BackIcon, DotsIcon, CircleIcon, SendIcon } from "../../assets/icons";

// Images
import accountImg from "../../assets/images/account.jpg";
import bouquet1 from "../../assets/images/bouquet1.jpg";
import bouquet2 from "../../assets/images/bouquet2.jpg";

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
            <Message left>Good morning! Happy anniversary to you both!</Message>
            <Message left>
              I have fresh cream roses, I’ll send you pics in a bit.
            </Message>
            <Message img>
              <img src={bouquet1} alt="" />
              <img src={bouquet2} alt="" />
            </Message>
            <Message right>
              Wow! The second bouquet is perfect. She’s gonna love it!
            </Message>
            <Message right>I need package too.</Message>
            <Message left>
              Great! You’ll see the prices options below. Your bouquet will be
              delivered in 20 minutes!
            </Message>
            <Message price>
              <CircleIcon />
              <span>12 roses + cube vase</span>
              <span>$129</span>
            </Message>
            <Message price>
              <CircleIcon />
              <span>25 roses + birthday package</span>
              <span>$249</span>
            </Message>
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
