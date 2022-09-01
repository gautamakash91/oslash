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
import React, { useState } from "react";
import {
  SharesListProps
} from "../utils/allInterfaces";
import { grey } from "@mui/material/colors";

export default function SharedList({ selected, access, setSelected }: SharesListProps) {
  const [workspaceAccess, setWorkspaceAccess] = useState("");
  
  const changeAccess = (index: number, value: string) => {
    var s = [...selected];
    s[index].role = value;
    setSelected(s);
  }
  return (
    <>
      <ListItem
        className='listItem'
        secondaryAction={
          <ShareOptions
            access={access}
            type="view"
            value={workspaceAccess}
            changeAccess={(value: string) => { setWorkspaceAccess(value) }}
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
      {selected.map((item, index) => (
        <ListItem
          secondaryAction={
            <ShareOptions
              access={access}
              value={item.role}
              type="view"
              changeAccess={(value: string) => { changeAccess(index, value) }}
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