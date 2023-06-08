// Images
import bouquet1 from "../images/bouquet1.jpg";
import bouquet2 from "../images/bouquet2.jpg";

// Icons
import { CircleIcon } from "../icons";

const messages = [
  {
    side: "left",
    message: "Good morning! Happy anniversary to you both!",
    delay: 2.5,
  },
  {
    side: "left",
    message: "I have fresh cream roses, I’ll send you pics in a bit.",
    delay: 3,
  },
  {
    side: "img",
    message: (
      <>
        <img src={bouquet1} alt="" />
        <img src={bouquet2} alt="" />
      </>
    ),
    delay: 4,
  },
  {
    side: "right",
    message: "Wow! The second bouquet is perfect. She’s gonna love it!",
    delay: 5,
  },
  {
    side: "right",
    message: "I need package too.",
    delay: 5.5,
  },
  {
    side: "left",
    message:
      "Great! You’ll see the prices options below. Your bouquet will be delivered in 20 minutes!",
    delay: 6.5,
  },
  {
    side: "price",
    message: (
      <>
        <CircleIcon />
        <span>12 roses + cube vase</span>
        <span>$129</span>
      </>
    ),
    delay: 7,
  },
  {
    side: "price",
    message: (
      <>
        <CircleIcon />
        <span>25 roses + birthday package</span>
        <span>$249</span>
      </>
    ),
    delay: 7.5,
  },
];

export default messages;
