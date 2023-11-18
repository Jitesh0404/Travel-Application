import { RiHome4Fill } from "react-icons/ri";
import { HiInformationCircle } from "react-icons/hi";
import { MdMedicalServices } from "react-icons/md";
import { BiSolidContact } from "react-icons/bi";
const MenuItems = [
  {
    title: "Home",
    url: "/",
    cName: "nav-links",
    icon: <RiHome4Fill />,
  },
  {
    title: "About",
    url: "/about",
    cName: "nav-links",
    icon: <HiInformationCircle />,
  },
  {
    title: "Service",
    url: "/service",
    cName: "nav-links",
    icon: <MdMedicalServices />,
  },
  {
    title: "Contact",
    url: "/contact",
    cName: "nav-links",
    icon: <BiSolidContact />,
  },
  {
    title: "Sign up",
    url: "/sign_up",
    cName: "nav-links-mobile",
  },
];
export default MenuItems;
