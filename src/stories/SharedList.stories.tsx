import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SharedList from '../feature/shareButton/components/sharedList';

export default {
  title: 'SharedList',
  component: SharedList,
} as ComponentMeta<typeof SharedList>;

const Template: ComponentStory<typeof SharedList> = (args) => <SharedList {...args} />;

export const FullButton = Template.bind({});
FullButton.args = {
  access: ["Full access", "Can view", "Can edit", "No Access"],
  selected: [
    {
      "title": "Michael",
      "avatar": "https://reqres.in/img/faces/7-image.jpg",
      "role": "can view"
    },
    {
      "title": "Lindsay",
      "avatar": "https://reqres.in/img/faces/8-image.jpg",
      "role": "full access"
    }
  ],
  setSelected: () => { }
};



