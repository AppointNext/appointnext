"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import LogoText from "./LogoText";
import { Button } from "../ui/button";
import { BASE_COLOR } from "@/utils/constants";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {
  RiContactsLine,
  RiStarLine,
  RiGiftLine,
  RiHeartLine,
  RiMailLine,
} from "react-icons/ri";
import Link from "next/link";

const options = [
  { name: "About", path: "/about" },
  { name: "Features", path: "/features" },
  { name: "Benefits", path: "/benefits" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Contact", path: "/contact" },
];

const icons = [
  <RiContactsLine />,
  <RiStarLine />,
  <RiGiftLine />,
  <RiHeartLine />,
  <RiMailLine />,
];

const drawerVariants = {
  hidden: { x: "100%" },
  visible: { x: 0 },
};

const authButtons = [
  { name: "Login", path: "/login" },
  { name: "Sign Up", path: "/signup" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const DrawerList = (
    <Box sx={{ width: 220 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {options.map((option, index) => (
          <ListItem key={option.name} disablePadding>
            <ListItemButton>
              <ListItemIcon>{icons[index]}</ListItemIcon>
              <ListItemText primary={option.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <div className="flex flex-col justify-between px-2 gap-2 mt-2">
        {authButtons.map((button, index) => (
          <Button
            key={index}
            className={`bg-transparent text-black hover:text-[${BASE_COLOR}] rounded-2xl border-[1px] border-[${BASE_COLOR}]`}
          >
            {button.name}
          </Button>
        ))}
      </div>
    </Box>
  );

  return (
    <motion.nav
      className={`fixed w-full flex flex-row items-center justify-between py-2 px-4 transition-all duration-200 ${
        visible ? "top-0" : "-top-16"
      }`}
    >
      <div className="mb-2">
        <Link href="/">
          <LogoText />
        </Link>
      </div>
      <div>
        <ul className="hidden sm:flex flex-row gap-4 mb-4">
          {options.map((option) => (
            <li
              key={option.name}
              className="text-sm md:text-md xl:text-2xl 2xl:text-3xl relative transition-all duration-200"
            >
              <Link
                href={option.path}
                className=" hover:underline text-sm lg:text-lg xl:text-lg 2xl:text-2xl relative hover:text-[${BASE_COLOR}]"
              >
                {option.name}
              </Link>
              {/* Tailwind CSS for hover underline effect */}
              <style jsx>{`
                a:hover {
                  @apply border-b-2 border-[${BASE_COLOR}] p-2;
                }
              `}</style>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div className="hidden md:flex flex-row gap-2 items-center mb-2">
          {authButtons.map((button, index) => (
            <Button
              key={index}
              className={`bg-transparent text-black hover:text-[#003CD8] rounded-2xl hover:border-[1px] hover:border-[${BASE_COLOR}]
                sm:text-sm md:text-md lg:text-xl 2xl:text-2xl w-20 lg:w-24 hover:shadow-md  transition-all duration-200 hvoer:shadow-[${BASE_COLOR}] hover:shadow-[#003CD8] xl:w-28 2xl:w-32
              `}
            >
              {button.name}
            </Button>
          ))}
        </div>
        <div>
          <button onClick={toggleDrawer(true)} className="md:hidden">
            <MenuSharpIcon />
          </button>
          <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
            <motion.div
              initial="hidden"
              animate={open ? "visible" : "hidden"}
              variants={drawerVariants}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{ height: "100%", width: 220, overflow: "hidden" }}
            >
              {DrawerList}
            </motion.div>
          </Drawer>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
