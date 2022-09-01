import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ShareButton from "../feature/shareButton";

export default {
  title: 'ShareButton',
  component: ShareButton,
} as ComponentMeta<typeof ShareButton>;

const Template: ComponentStory<typeof ShareButton> = (args) => <ShareButton {...args} />;

export const FullButton = Template.bind({});
FullButton.args = {
  people: [
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
  ],
  groups: [
    { "title": "Engineering", "avatar": "" },
    { "title": "Product", "avatar": "" }
  ],
  access: ["Full access", "Can view", "Can edit", "No Access"]
};



