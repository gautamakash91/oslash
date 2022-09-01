import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ShareToWeb from '../feature/shareButton/components/shareToWeb';

export default {
  title: 'ShareToWeb',
  component: ShareToWeb,
} as ComponentMeta<typeof ShareToWeb>;

const Template: ComponentStory<typeof ShareToWeb> = (args) => <ShareToWeb {...args} />;

export const ToggleShare = Template.bind({});
ToggleShare.args = {
  share: true,
  disabled: false
}




