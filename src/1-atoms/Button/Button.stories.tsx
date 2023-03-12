import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: '1-atoms/Button',
  component: Button,
  argTypes: {
    textColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const onBold = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
onBold.args = {
  label: "B",
  handleClick: action('Bold')
};

export const onItalic = Template.bind({});
onItalic.args = {
  label: 'I',
  handleClick: action('Italic')
};

export const onUnderline = Template.bind({});
onUnderline.args = {
  label: 'U',
  handleClick: action('Underline')
};

export const onScratchedWord = Template.bind({});
onScratchedWord.args = {
  label: 'abc',
  handleClick: action('Underline'),
};