import {
  ListItem,
  IconButton,
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

  useEffect(()=>{
    if(share!== undefined){
      setChecked(share);
    }
  },[share])

  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="delete">
          <Switch 
            disabled={disabled}
            checked={checked}
          />
        </IconButton>
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