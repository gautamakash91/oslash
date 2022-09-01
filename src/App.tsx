import React from 'react';
import './App.css';
import ShareButton from './feature/shareButton';

function App() {
  return (
    <div className="App">
      <h2>Ready to get started with our sharing experience?</h2>
      <h3>click on the button below</h3>
      <ShareButton
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
      />
    </div>
  );
}

export default App;
