"use client";

import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import ImportContactsTwoToneIcon from "@mui/icons-material/ImportContactsTwoTone";
import { BiCategoryAlt } from "react-icons/bi";
import { FaUserDoctor } from "react-icons/fa6";
import { BiMessageSquareMinus } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";
import LogoText from "../LogoText";
import { motion } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";

import HelpCard from "./HelpCard";

interface Option {
  name: string;
  path: string;
}

const drawerVariants = {
  hidden: { x: "-100%" },
  visible: { x: 0 },
};

const options: Option[] = [
  { name: "Overview", path: "/overview" },
  { name: "Appointments", path: "/appointments" },
  { name: "Doctors", path: "/doctors" },
  { name: "Messages", path: "/messages" },
  { name: "Settings", path: "/settings" },
];

const OptionsIcon = [
  <ImportContactsTwoToneIcon />,
  <BiCategoryAlt />,
  <FaUserDoctor />,
  <BiMessageSquareMinus />,
  <CiSettings />,
];

export default function Sidebar({ isIcon }: any) {
  const [open, setOpen] = useState(true);
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");
  const [isIconOnly, setIsIconOnly] = useState(isIcon);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{ width: 240 }}
      role="presentation"
      className="h-full flex flex-col  "
    >
      <LogoText />
      <div className="flex flex-col justify-between items-center h-full">
        <div className="px-4">
          <List>
            {options.map((option, index) => (
              <ListItem key={option.name} disablePadding>
                <ListItemButton className="rounded-xl">
                  <ListItemIcon>{OptionsIcon[index]}</ListItemIcon>
                  {!isIconOnly && <ListItemText primary={option.name} />}
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </div>
        <div className="p-2  h-full flex items-center justify-center w-full">
          <HelpCard />
        </div>
      </div>
    </Box>
  );

  return (
    <div className="flex">
      {!isLargeScreen && (
        <IconButton onClick={toggleDrawer(!open)}>
          <MenuIcon />
        </IconButton>
      )}
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
        variant={isLargeScreen ? "persistent" : "temporary"}
        sx={{
          width: isLargeScreen ? 240 : "auto",
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: 240,
            boxSizing: "border-box",
          },
        }}
      >
        <motion.div
          initial="hidden"
          animate={open ? "visible" : "hidden"}
          variants={drawerVariants}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          style={{ height: "100%", width: 240, overflow: "hidden" }}
        >
          {DrawerList}
        </motion.div>
      </Drawer>
    </div>
  );
}
