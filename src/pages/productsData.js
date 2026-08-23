import AcUnitIcon from "@mui/icons-material/AcUnit";
import TvIcon from "@mui/icons-material/Tv";
import KitchenIcon from "@mui/icons-material/Kitchen";
import LocalLaundryServiceIcon from "@mui/icons-material/LocalLaundryService";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import MicrowaveIcon from "@mui/icons-material/Microwave";
import BlenderIcon from "@mui/icons-material/Blender";
import HomeIcon from "@mui/icons-material/Home";
import AppsIcon from "@mui/icons-material/Apps";

import Image1 from "./Products/Image1.jpg";

export const categories = [
  { name: "All", icon: AppsIcon },
  { name: "AC", icon: AcUnitIcon },
  { name: "Refrigerator", icon: KitchenIcon },
  { name: "Washing Machine", icon: LocalLaundryServiceIcon },
  { name: "Microwave", icon: MicrowaveIcon },
  { name: "Small Appliances", icon: BlenderIcon },
  { name: "Smart Home", icon: HomeIcon },
];

export const products = [
  {
    name: "1.5 Ton Inverter AC",
    category: "AC",
    price: "NPR 72,990",
    image: Image1,
  },
  {
    name: "2 Ton Inverter AC",
    category: "AC",
    price: "NPR 98,990",
    image: Image1,
  },
  {
    name: '43″ Smart LED TV',
    category: "TV",
    price: "NPR 39,990",
    image: Image1,
  },
  {
    name: '55″ 4K Smart TV',
    category: "TV",
    price: "NPR 69,990",
    image: Image1,
  },
  {
    name: "Built-in Electric Oven",
    category: "Oven",
    price: "NPR 54,990",
    image: Image1,
  },
  {
    name: "Convection Oven",
    category: "Oven",
    price: "NPR 29,990",
    image: Image1,
  },
  {
    name: "Double Door Refrigerator",
    category: "Refrigerator",
    price: "NPR 64,990",
    image: Image1,
  },
  {
    name: "Front Load Washing Machine",
    category: "Washing Machine",
    price: "NPR 58,990",
    image: Image1,
  },
  {
    name: "Bluetooth Soundbar",
    category: "Audio",
    price: "NPR 12,990",
    image: Image1,
  },
  {
    name: "Smart Home Speaker",
    category: "Smart Home",
    price: "NPR 8,990",
    image: Image1,
  },
  {
    name: "Digital Microwave Oven",
    category: "Microwave",
    price: "NPR 18,990",
    image: Image1,
  },
  {
    name: "Air Fryer",
    category: "Small Appliances",
    price: "NPR 11,990",
    image: Image1,
  },
];