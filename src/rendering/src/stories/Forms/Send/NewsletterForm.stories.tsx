import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Default as SendNewsletterForm } from '../../../components/Forms/Send/SendNewsletterForm';

export default {
  title: 'Components/Forms/Send/NewsletterForm',
  component: SendNewsletterForm,
} as ComponentMeta<typeof SendNewsletterForm>;

const Template: ComponentStory<typeof SendNewsletterForm> = (args) => <SendNewsletterForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  params: {
    name: 'SendNewsletterForm',
  },
  rendering: {
    componentName: 'SendNewsletterForm',
    dataSource: '/sitecore',
  },
};
