
import React from 'react';

import {Second} from './Second'
export default {
  title: 'Example/Third',
  component: Second,
  argTypes: {
  },
};
const Template = (args) => <Second {...args} />;
export const Primary = Template.bind({});
Primary.args = {
};
