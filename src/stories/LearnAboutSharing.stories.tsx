import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import LearnAboutSharing from '../feature/shareButton/components/learnAboutSharing';

export default {
  title: 'LearnAboutSharing',
  component: LearnAboutSharing,
} as ComponentMeta<typeof LearnAboutSharing>;

const Template: ComponentStory<typeof LearnAboutSharing> = (args) => <LearnAboutSharing {...args} />;

export const WithLink = Template.bind({});
WithLink.args = {
  link: "https://www.google.com"
}

export const WithoutLink = Template.bind({});
WithoutLink.args = {
  link: ""
}



