"use client";

import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import LogoText from "./LogoText";
import { Button } from "../ui/button";
import { BASE_COLOR } from "@/utils/constants";
import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

const options = [
  { name: "About", path: "/about" },
  { name: "Features", path: "/features" },
  { name: "Benefits", path: "/benefits" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 220 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <nav className="fixed w-full flex flex-row items-center justify-between py-2 px-4">
      <div>
        <LogoText />
      </div>
      <div>
        <ul className="hidden sm:block flex flex-row gap-4">
          {options.map((option) => (
            <li key={option.name}>
              <a href={option.path}>{option.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div className="hidden md:block">
          <Button
            className={`bg-transparent text-black rounded-2xl border-[1px] hover:border-[${BASE_COLOR}]`}
          >
            Login
          </Button>
          <Button
            className={`
            bg-transparent text-black rounded-2xl border-[1px] hover:border-[${BASE_COLOR}]  `}
          >
            Sign Up
          </Button>
        </div>
        <div>
          <button onClick={toggleDrawer(true)}>
            <MenuSharpIcon />
          </button>
          <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
            {DrawerList}
          </Drawer>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
