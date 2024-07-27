"use client";
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MenuItem, Menu, Button } from "@mui/material";

export default function DashNav() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [username] = useState("Latish Adwani");
  const [newMessage] = useState(true);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="flex flex-row justify-between p-2 w-full">
      <div className="flex flex-col">
        <h1 className="text-lg font-bold">Hi, {username}</h1>
        <p className="text-xs">Let's see your appointments</p>
      </div>
      <div className="flex flex-row items-center justify-center gap-2">
        <Button className="p-0 m-0" sx={{ padding: 0, minWidth: 0 }}>
          <div className="relative w-6 h-6">
            {newMessage && (
              <div className="absolute w-[6px] h-[6px] rounded-full bg-red-600 right-0 top-0"></div>
            )}
            <IoIosNotificationsOutline size={24} />
          </div>
        </Button>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          sx={{ borderRadius: 50 }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </div>
    </div>
  );
}
