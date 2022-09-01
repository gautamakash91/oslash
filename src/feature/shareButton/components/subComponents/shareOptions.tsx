import {
  Menu,
  MenuItem,
  Typography
} from "@mui/material";
import React, { useEffect, useState } from "react";
import DownArrow from "../../assets/downarrow.svg";
import "../../utils/share.css";
import {
  SharesOptionsProps
} from "../../utils/allInterfaces";

export default function ShareOptions({ access, value, setAccessType, type, changeAccess }: SharesOptionsProps) {
  const [shareOption, setShareOption] = useState<string>("No access");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelection = (value: string) => {
    if (type === "add") {
      setShareOption(value);
      setAccessType(value);
      setAnchorEl(null);
    } else if (type === "view") {
      changeAccess(value);
      setAnchorEl(null);
    }

  };

  useEffect(() => {
    if (value) {
      setShareOption(value);
    }
  }, [value])

  return (
    <>
      <Typography
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        variant="caption"
        className="share-text"
      >
        {shareOption}
        <img
          src={DownArrow}
          className="share-down-arrow"
        />
      </Typography>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {access.map((option: string) => (
          <MenuItem onClick={() => { handleSelection(option) }}>{option}</MenuItem>
        ))}
      </Menu>
    </>
  )
}