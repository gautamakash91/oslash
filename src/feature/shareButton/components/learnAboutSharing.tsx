import {
  ListItem,
  ListItemText,
  Typography
} from "@mui/material";
import React from "react";
import "../utils/share.css";
import learnIcon from "../assets/learn.svg";
import attachIcon from "../assets/attach.svg";
import {
  LearnAboutProps
} from "../utils/allInterfaces";

export default function LearnAboutSharing({ link }: LearnAboutProps) {
  return (
    <ListItem
      className='listItem-bottom'
      secondaryAction={
        link !== "" &&
        <Typography 
          variant="body2" 
          onClick={() => {navigator.clipboard.writeText(link)}}
        >
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