import React from 'react'
import { Button } from './button';
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Outlined = Template.bind({})
Outlined.args = {
  label: 'にょきにょき',
  outlined: true
}

export const Normal = Template.bind({})
Normal.args = {
  label: 'にょっきにょき',
  outlined: false
}
