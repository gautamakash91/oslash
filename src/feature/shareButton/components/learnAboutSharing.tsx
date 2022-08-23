import {
  ListItem,
  IconButton,
  Icon,
  ListItemAvatar,
  ListItemText,
  Typography
} from "@mui/material";
import React from "react";
import "../utils/share.css";
import learnIcon from "../assets/learn.svg";
import attachIcon from "../assets/attach.svg";

export default function LearnAboutSharing() {
  return (
    <ListItem
      className='listItem-bottom'
      secondaryAction={
        <Typography variant="body2">
          <img src={attachIcon} className="bottom-icons" />
          copy link
        </Typography>
      }
    >
      <ListItemText
        primary={<Typography className="bottom-left" variant="body2"><img src={learnIcon} className="bottom-icons" />Learn about sharing</Typography>}
      />
    </ListItem>
  )
}