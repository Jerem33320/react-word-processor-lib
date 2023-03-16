import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ColorPalette from './ColorPalette';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: '1-atoms/ColorPalette',
  component: ColorPalette,
} as ComponentMeta<typeof ColorPalette>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ColorPalette> = (args) => <ColorPalette />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  handleChange: action('ChangeColor')
};
