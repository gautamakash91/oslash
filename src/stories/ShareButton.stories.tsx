import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';
import ShareButton from "../feature/shareButton";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ShareButton',
  component: ShareButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {

  },
} as ComponentMeta<typeof ShareButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ShareButton> = (args) => <ShareButton {...args} />;
// const Template = (args: any) => <ShareButton {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
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