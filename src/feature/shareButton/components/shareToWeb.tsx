import {
  ListItem,
  IconButton,
  Switch,
  Icon,
  Avatar,
  ListItemAvatar,
  ListItemText
} from "@mui/material";
import React from "react";
import GlobeIcon from "../assets/globe.webp";

export default function ShareToWeb() {
  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="delete">
          <Switch />
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