import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SharedList from '../feature/shareButton/components/sharedList';
import RowItem from '../feature/selectionLayout/components/rowItem';

export default {
  title: 'RowItem',
  component: RowItem,
} as ComponentMeta<typeof RowItem>;

const Template: ComponentStory<typeof RowItem> = (args) => <RowItem {...args} />;

export const FullButton = Template.bind({});
FullButton.args = {
  index: 0,
  cursor: 0,
  item: {
    title: "Akash",
    avatar: "https://reqres.in/img/faces/9-image.jpg"
  },
  type: "person",
  setTempSelected: () => { },
  setCursor: () => { },
  setkeyword: () => { },
  tempSelected: [{
    title: "",
    avatar: ""
  }],
};



