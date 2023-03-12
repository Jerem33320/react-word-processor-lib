import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import BtnGroup from '../BtnGroup';

//👇 Imports the Button stories
import * as ButtonStories from '../../1-atoms/Button/Button.stories';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: '2-molecules/BtnGroup',
  component: BtnGroup,
} as ComponentMeta<typeof BtnGroup>;

const Template: ComponentStory<typeof BtnGroup> = (args) => <BtnGroup {...args} />;

export const Default = Template.bind({});
Default.args = {
  buttons: [
    { ...ButtonStories.onBold.args },
    { ...ButtonStories.onItalic.args },
    { ...ButtonStories.onUnderline.args },
    { ...ButtonStories.onScratchedWord.args },
  ],
  orientation: 'horizontal',
};