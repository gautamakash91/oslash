//THIS IS THE MAIN SELECTION LAYOUT
import { List, Typography } from "@mui/material";
import {
  useState
} from "react";
import "./utils/selectionLayout.css";
import React from "react";
import SearchComponent from "./components/searchComponent";
import RowItem from "./components/rowItem";
import LearnAboutSharing from "../shareButton/components/learnAboutSharing";
import {
  userProps,
  SelectionLayoutProps
} from "../shareButton/utils/allInterfaces";

export default function SelectionLayout({
  selected,
  setSelected,
  people,
  groups,
  access,
  setShowSelection
}: SelectionLayoutProps) {
  // cursor is used to highlight the user or group
  // keyword is the search keyword
  // selected is an array of all the users or groups that are already selected 
  const [cursor, setCursor] = useState<number>(-1);
  const [keyword, setkeyword] = useState<string>("");
  const [tempSelected, setTempSelected] = useState<userProps[]>([]);

  const handleKeyDown = (e: any) => {
    // TO MOVE THE SELECTION UP BY ONE 
    if (e.keyCode === 38 && cursor > 0) {
      setCursor(cursor - 1)
    }
    // TO MOVE THE SELECTION DOWN BY ONE 
    else if (e.keyCode === 40 && cursor < (people.length + groups.length) - 1) {
      setCursor(cursor + 1)
    }
    // IF THE USER PRESSES ENTER
    else if (e.keyCode === 13) {
      var s: userProps[] = [...tempSelected];

      // CHECK IF THE VALUE IS NOT ALREADY SELECTED IN PEOPLE
      // IF IT IS NOT PRESENT THEN ADD IT
      if (cursor < people.length) {
        if (s.indexOf(people.filter((item: userProps) => item.title.includes(keyword))[cursor]) < 0) {
          s.push(people.filter((item: userProps) => item.title.includes(keyword))[cursor]);
          setTempSelected(s);
          setCursor(-1);
          setkeyword("");
        }
      }

      // CHECK IF THE VALUE IS NOT SELECTED IN GROUPS 
      // IF IT IS NOT PRESENT THEN ADD IT
      if (cursor >= people.length && cursor < (people.length + groups.length)) {
        if (s.indexOf(groups.filter((item: userProps) => item.title.includes(keyword))[cursor - people.length]) < 0) {
          s.push(groups.filter((item: userProps) => item.title.includes(keyword))[cursor - people.length]);
          setTempSelected(s);
          setCursor(-1);
          setkeyword("");
        }
      }
    }
  }

  return (
    <div>
      {/* THE TOP SEARCH COMPONENT CONSISTING OF THE TEXTFIELD, ACCESS DROPDOWN AND INVITE BUTTON */}
      <SearchComponent
        handleKeyDown={handleKeyDown}
        keyword={keyword}
        setkeyword={setkeyword}
        selected={selected}
        access={access}
        tempSelected={tempSelected}
        setSelected={setSelected}
        setShowSelection={setShowSelection}
        setTempSelected={setTempSelected}
      />

      {/* LIST OF ALL USERS  */}
      {people.filter((item: userProps) => item.title.includes(keyword)).length > 0 &&
        <List
          subheader={<Typography variant="body1" className="subheading-text">Select a person</Typography>}
        >
          {people.filter((item: userProps) => item.title.includes(keyword)).map((item: userProps, index: number) => {
            return (
              <RowItem
                cursor={cursor}
                index={index}
                item={item}
                type={"person"}
                setTempSelected={setTempSelected}
                setCursor={setCursor}
                setkeyword={setkeyword}
                tempSelected={tempSelected}
              />
            )
          })}
        </List>
      }

      {/* LIST OF ALL GROUPS */}
      {groups.filter((item: userProps) => item.title.includes(keyword)).length > 0 &&
        <List
          subheader={<Typography variant="body1" className="subheading-text">Select a group</Typography>}
        >
          {groups.filter((item: userProps) => item.title.includes(keyword)).map((item: userProps, index: number) => {
            return (
              <RowItem
                cursor={cursor}
                index={index+people.length}
                item={item}
                type={"groups"}
                setTempSelected={setTempSelected}
                setCursor={setCursor}
                setkeyword={setkeyword}
                tempSelected={tempSelected}
              />
            )
          })}
        </List>
      }

      {/* BOTTOM INFORMATION SECTION */}
      <LearnAboutSharing 
        link=""
      />
    </div>
  )
}