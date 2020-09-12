import React from 'react';

import {Second} from '../Components/AddButton/Second'
export default {
  title: 'Example/Second',
  component: Second,
  argTypes: {
  },
};
const Template = (args) => <Second {...args} />;
export const Primary = Template.bind({});
Primary.args = {
    name: 'Deepak'
};
