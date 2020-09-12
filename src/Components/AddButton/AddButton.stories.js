import React from 'react';
import {Button} from './Button';
import { ContextDecorator } from './ContextDecorator';
export default {
  title: 'Example/AddButton',
  component: Button,
  decorators:[(Story) => {
      return <ContextDecorator><Story /></ContextDecorator>
  }],
  argTypes: {
      onClick: {
          action:'clicked'
      },
    backgroundColor: { control: 'color' },
    
  },
//   parameters: {
//     actions: {
//       handles: ['mouseover', 'click']
//     }
//   }
};

// const Template = (args) => <Button  {...args} />;
// export const SampleAddButton = Template.bind({});
// SampleAddButton.args={
// }
export const SampleAddButton = (args) => <Button {...args} />
export const Dummy = (args) => <div {...args}>Hello</div>