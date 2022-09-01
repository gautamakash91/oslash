import {
  ListItem,
  Switch,
  Avatar,
  ListItemAvatar,
  ListItemText
} from "@mui/material";
import React, { useEffect, useState } from "react";
import GlobeIcon from "../assets/globe.webp";
import {
  ShareToWebProps
} from "../utils/allInterfaces";

export default function ShareToWeb({ share, disabled }: ShareToWebProps) {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (share !== undefined) {
      setChecked(share);
    }
  }, [share])

  const handleShareToWeb = () => {
    setChecked(!checked);
  }

  return (
    <ListItem
      secondaryAction={
        <Switch
          disabled={disabled}
          checked={checked}
          onClick={handleShareToWeb}
        />
      }
    >
      <ListItemAvatar>
        <Avatar src={GlobeIcon} />
      </ListItemAvatar>
      <ListItemText
        primary="Share to web"
        secondary={'Publish and share link with anyone'}
      />
    </ListItem>
  )
}