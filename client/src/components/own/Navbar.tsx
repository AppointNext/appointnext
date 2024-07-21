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
            className={`bg-white text-black hover:text-[#003CD8] rounded-2xl hover:border-[1px] hover:border-[#003CD8]`}
          >
            {button.name}
          </Button>
        ))}
      </div>
    </Box>
  );

  return (
    <motion.nav
      className={`fixed w-full flex flex-row items-center justify-between  px-4 transition-all duration-200  bg-white z-50 shadow-sm hover:shadow-md ${
        visible ? "top-0" : "-top-20"
      }`}
    >
      <div className="">
        <Link href="/">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <LogoText />
          </motion.div>
        </Link>
      </div>
      <div>
        <ul className="hidden sm:flex flex-row gap-4 mb-1">
          {options.map((option) => (
            <motion.li
              key={option.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.05 }}
              className="text-sm md:text-md xl:text-2xl 2xl:text-3xl relative transition-all duration-200 border-transparent p-1 hover:text-[#003CD8]  text-[#003CD8]"
            >
              <Link
                href={option.path}
                className=" text-sm lg:text-lg xl:text-lg 2xl:text-2xl relative hover:text-[${BASE_COLOR}] 
                hover:border-[#003CD8]
                hover:border-b-2 text-gray-500 hover:text-[#003CD8]"
              >
                {option.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
      <div>
        <div className="hidden md:flex flex-row gap-2 items-center mb-2">
          {authButtons.map((button, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                className={`bg-transparent text-black hover:text-[#003CD8] rounded-2xl hover:border-[1px] hover:border-[#003CD8] sm:text-sm md:text-md lg:text-xl 2xl:text-2xl w-20 lg:w-24 xl:w-28 2xl:w-32 hover:bg-white`}
              >
                {button.name}
              </Button>
            </motion.div>
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
