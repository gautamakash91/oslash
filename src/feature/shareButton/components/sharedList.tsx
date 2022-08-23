import {
  ListItem,
  IconButton,
  Switch,
  Icon,
  Avatar,
  ListItemAvatar,
  ListItemText,
  Typography
} from "@mui/material";
import ShareOptions from "./subComponents/shareOptions";
import React from "react";
import {
  SharesListProps
} from "../utils/allInterfaces";
import { grey } from "@mui/material/colors";

export default function SharedList({ selected, access }: SharesListProps) {
  return (
    <>
      <ListItem
        className='listItem'
        secondaryAction={
          <ShareOptions
            access={access}
          />
        }
      >
        <ListItemAvatar>
          <Avatar src="https://media-exp1.licdn.com/dms/image/C560BAQHwQNebuDLaTw/company-logo_200_200/0/1627803867998?e=2147483647&v=beta&t=kX1BuOj4C5wCznhoFjd3tz2dpwwDOajT-jR8NImKVGA" />
        </ListItemAvatar>
        <ListItemText
          primary="Everyone at OSlash"
          secondary={'25 workspace members'}
        />
      </ListItem>
      {selected.map((item) => (
        <ListItem
          secondaryAction={
            <ShareOptions
              access={access}
              value={item.role}
            />
          }
        >
          <ListItemAvatar>
            {item.avatar !== "" ?
              <Avatar src={item.avatar} />
              :
              <Avatar sx={{ bgcolor: grey[700], height: 25, width: 25 }} variant="rounded">
                {item.title.substring(0, 1).toUpperCase()}
              </Avatar>
            }
          </ListItemAvatar>
          <ListItemText
            primary={item.title}
          />
        </ListItem>
      ))}
    </>
  )
}