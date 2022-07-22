import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Login from '../components/Login';



export default {
    title: 'Components/Login',
    component: Login,
    argTypes: {
        backgroundColor: { control: 'color' },
    },

} as ComponentMeta<typeof Login>;

const Template: ComponentStory<typeof Login> = (args: any) => (<Login {...args}/>);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Login',
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Login',
};