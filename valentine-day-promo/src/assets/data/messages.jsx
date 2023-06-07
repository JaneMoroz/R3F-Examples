// Images
import bouquet1 from "../images/bouquet1.jpg";
import bouquet2 from "../images/bouquet2.jpg";

// Icons
import { CircleIcon } from "../icons";

const messages = [
  { side: "left", message: "Good morning! Happy anniversary to you both!" },
  {
    side: "left",
    message: "I have fresh cream roses, I’ll send you pics in a bit.",
  },
  {
    side: "img",
    message: (
      <>
        <img src={bouquet1} alt="" />
        <img src={bouquet2} alt="" />
      </>
    ),
  },
  {
    side: "right",
    message: "Wow! The second bouquet is perfect. She’s gonna love it!",
  },
  {
    side: "right",
    message: "I need package too.",
  },
  {
    side: "left",
    message:
      "Great! You’ll see the prices options below. Your bouquet will be delivered in 20 minutes!",
  },
  // {
  //   side: "price",
  //   message: (
  //     <>
  //       <CircleIcon />
  //       <span>12 roses + cube vase</span>
  //       <span>$129</span>
  //     </>
  //   ),
  // },
  // {
  //   side: "price",
  //   message: (
  //     <>
  //       <CircleIcon />
  //       <span>25 roses + birthday package</span>
  //       <span>$249</span>
  //     </>
  //   ),
  // },
];

export default messages;
