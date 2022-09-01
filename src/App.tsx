import React, { useState } from 'react';
import './App.css';
import ShareButton from './feature/shareButton';
import {
  selectedUserProps
} from "./feature/shareButton/utils/allInterfaces";
import {
  Icon
} from "@mui/material";
import SharedList from './feature/shareButton/components/sharedList';

function App() {
  const [selected, setSelected] = useState<selectedUserProps[]>([]);

  return (
    <div className="App">
      <h2>Ready to get started with our sharing experience?</h2>
      <h3>click on the button below</h3>
      <ShareButton
        selected={selected}
        setSelected={setSelected}
        onChange={(value: selectedUserProps[]) => {
          setSelected(value);
        }}
        people={[
          {
            "title": "Michael",
            "avatar": "https://reqres.in/img/faces/7-image.jpg"
          },
          {
            "title": "Lindsay",
            "avatar": "https://reqres.in/img/faces/8-image.jpg"
          },
          {
            "title": "Tobias",
            "avatar": "https://reqres.in/img/faces/9-image.jpg"
          },
          {
            "title": "Byron",
            "avatar": "https://reqres.in/img/faces/10-image.jpg"
          },
          {
            "title": "George",
            "avatar": "https://reqres.in/img/faces/11-image.jpg"
          },
          {
            "title": "Rachel",
            "avatar": "https://reqres.in/img/faces/12-image.jpg"
          }
        ]}
        groups={[
          { "title": "Engineering", "avatar": "" },
          { "title": "Product", "avatar": "" }
        ]}
        access={["Full access", "Can view", "Can edit", "No Access"]}
      >
        <Icon>delete</Icon>
      </ShareButton>

      <SharedList
        selected={selected}
        access={["Full access", "Can view", "Can edit", "No Access"]}
        setSelected={setSelected}
      />
    </div>
  );
}

export default App;
