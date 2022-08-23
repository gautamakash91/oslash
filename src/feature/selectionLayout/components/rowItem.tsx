//THIS COMPONENT IS A ROW ITEM TO SHOW USERS OR GROUPS
import React from "react";
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText
} from "@mui/material";
import { grey } from "@mui/material/colors";
import {
  userProps,
  RowItemProps
} from "../../shareButton/utils/allInterfaces";

export default function RowItem({
  index,
  cursor,
  item,
  type,
  setTempSelected,
  setCursor,
  setkeyword,
  tempSelected
}: RowItemProps) {

  //HANDLE THE SELECT OPERATION
  const handleSelect = (item: userProps) => {
    var s: userProps[] = [...tempSelected];
    if (s.indexOf(item) < 0) {
      s.push(item);
      setTempSelected(s);
      setCursor(-1);
      setkeyword("");
    }
  }

  return (
    <ListItem
      key={index}
      className={cursor === index ? "active" : "inactive"}
      onClick={() => { handleSelect(item) }}
    >
      {type === "person" &&
        <ListItemAvatar>
          <Avatar sx={{ height: 25, width: 25 }} src={item.avatar} />
        </ListItemAvatar>
      }

      {type === "groups" &&
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: grey[700], height: 25, width: 25 }} variant="rounded">
            {item.title.substring(0, 1).toUpperCase()}
          </Avatar>
        </ListItemAvatar>
      }

      <ListItemText
        primary={item.title}
      />
    </ListItem>
  )
}