import React from 'react'
import {
  Button,
  Menu,
  OutlinedInput,
  InputAdornment,
  List,
  Divider
} from "@mui/material";
import { useState } from "react";
import ShareToWeb from './components/shareToWeb';
import SharedList from './components/sharedList';
import LearnAboutSharing from './components/learnAboutSharing';
import SelectionLayout from '../selectionLayout';
import "./utils/share.css";
import {
  ShareProps,
  selectedUserProps
} from "./utils/allInterfaces";

//STARTING POINT OF THE SHARE BUTTON
const ShareButton = ({ people, groups, access }: ShareProps) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [showSelection, setShowSelection] = useState(true);
  const open = Boolean(anchorEl);
  const [selected, setSelected] = useState<selectedUserProps[]>([]);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleSelectLayout = () => {
    setShowSelection(!showSelection);
  }

  return (
    <>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        share
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button"
        }}
        sx={{
          height: 1500
        }}
        PaperProps={{
          style: {
            width: 450,
            padding: 0
          }
        }}
      >
        {showSelection ?
          <List
            style={{
              padding: 0
            }}
          >
            {/* SHARE TO WEB */}
            <ShareToWeb />
            <Divider />
            {/* SEARCH USERS */}
            <OutlinedInput
              placeholder='People, emails and groups'
              sx={{
                p: 0,
                width: "90%",
                marginLeft: "5%"
              }}
              margin="none"
              onClick={toggleSelectLayout}
              endAdornment={
                <InputAdornment position="end">
                  <Button size="small">invite</Button>
                </InputAdornment>
              }
            />

            {/* SHARED LIST */}
            <SharedList 
              selected={selected}
              access={access}
            />

            {/* LEARN ABOUT SHARING */}
            <LearnAboutSharing />
          </List>
          :
          // THE SCREEN WHICH IS SHOWN WHEN THE USER CLICKS ON THE TEXTFIELD 
          <SelectionLayout
            selected={selected}
            people={people}
            groups={groups}
            setSelected={setSelected}
            access={access}
            setShowSelection={setShowSelection}
          />
        }
      </Menu>
    </>
  )
}
export default ShareButton