import {
  EmojiHappyIcon,
  ChartSquareBarIcon,
  CursorClickIcon,
  DeviceMobileIcon,
  AdjustmentsIcon,
  SunIcon,
} from "@heroicons/react/outline";
import { FaPoundSign, FaClipboardCheck, FaUndo, FaShieldAlt, FaMapMarkerAlt, FaHandsHelping } from 'react-icons/fa'

import benefitOneImg from "../public/img/header-bg.png";
import benefitTwoImg from "../public/img/header-bg.png";

const benefitOne = {
  title: "Highlight your benefits",
  desc: "You can use this space to highlight your first benefit or a feature of your product. It can also contain an image or Illustration like in the example along with some bullet points.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Understand your customers",
      desc: "Then explain the first point breifly in one or two lines.",
      icon: <EmojiHappyIcon />,
    },
    {
      title: "Improve acquisition",
      desc: "Here you can add the next benefit point.",
      icon: <ChartSquareBarIcon />,
    },
    {
      title: "Drive customer retention",
      desc: "This will be your last bullet point in this section.",
      icon: <CursorClickIcon />,
    },
  ],
};

const benefitTwo = {
  title: "More Reasons to Choose TyneMove",
  desc: "We don’t just move your belongings — we make the whole process easier. Here are some of the benefits our customers enjoy:",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Affordable & Transparent Pricing",
      desc: "Clear quotes with no hidden costs, so you know exactly what you’re paying for.",
      icon: <FaPoundSign />,
    },
    {
      title: "Low Deposit Booking",
      desc: "Secure your moving date with a small upfront payment — flexible and fair.",
      icon: <FaClipboardCheck />,
    },
    {
      title: "Flexible Cancellation",
      desc: "Change of plans? Cancel up to 72 hours before and get a full refund. ",
      icon: <FaUndo />,
    },
    {
      title: "Fully Insured Service",
      desc: "Your belongings are protected every step of the way.",
      icon: <FaShieldAlt />,
    },
    {
      title: "Local Experts",
      desc: "Based in the North East, we know Newcastle, Sunderland, Durham and nearby towns inside out. ",
      icon: <FaMapMarkerAlt />,
    },
  ],
};

export { benefitOne, benefitTwo };
