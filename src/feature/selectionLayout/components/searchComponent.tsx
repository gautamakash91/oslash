//SEARCH COMPONENT WHICH CONSISTS OF THE TEXTFIELD FOR FILTERING USERS AND GROUPS
//DROPDOWN IS FOR ACCESS CONTROL
//APPLY BUTTON ADDS THE USERS TO THE MAIN LIST
import React, { useState } from "react";
import {
  InputBase,
  Button,
  Chip
} from "@mui/material";
import ShareOptions from "../../shareButton/components/subComponents/shareOptions";
import "../utils/selectionLayout.css";
import {
  userProps,
  selectedUserProps,
  SearchComponentProps
} from "../../shareButton/utils/allInterfaces";


export default function SearchComponent({
  handleKeyDown,
  keyword,
  setkeyword,
  selected,
  access,
  tempSelected,
  setSelected,
  setShowSelection,
  setTempSelected
}: SearchComponentProps) {

  const [accessType, setAccessType] = useState("");
  const handleDelete = (index: number) => {
    var s: userProps[] = [...tempSelected];
    s.splice(index, 1);
    setTempSelected(s);
  }
  return (
    <div className="search-container">
      <InputBase
        autoFocus={true}
        onKeyDown={handleKeyDown}
        onChange={(e: any) => { setkeyword(e.target.value) }}
        value={keyword}
        placeholder="Search emails, names or groups"
        sx={{
          width: "60%"
        }}
        startAdornment={
          tempSelected.map((item: userProps, index: number) => (
            <Chip
              label={item.title}
              onDelete={() => { handleDelete(index) }}
            />
          ))
        }
      />
      <ShareOptions
        access={access}
        setAccessType={setAccessType}
        type="add"
      />
      <Button
        variant="outlined"
        size="small"
        onClick={() => {
          var s: selectedUserProps[] = [...selected];
          tempSelected.map((item: userProps) => {
            var add = true;
            s.map((item2) => {
              if (item.title === item2.title) {
                add = false;
              }
            });
            if (add) {
              s.push({ ...item, role: accessType });
            }
          })
          setTempSelected([]);
          setSelected(s);
          setShowSelection(true);

        }}
      >Invite</Button>
    </div>
  )
}