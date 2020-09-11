import React from 'react'
import {
  Box,
  FormGroup,
  Label,
  InputGroup,
  Button,
  Icon,
  Input,
  FormMessage,
  DropDown,
  DropDownItem,
  DropDownMenu,
  DropDownTrigger,
} from '../..'
import StoryWrapper from '../../utils/story-wrapper'

export default { title: 'DesignSystem/Molecules/FormGroup' }

export const FullFeaturedFormGroup: React.FC = () => (
  <FormGroup>
    <Label required>Name</Label>
    <InputGroup>
      <DropDown>
        <DropDownTrigger>
          <Button variant="primary" size="icon">
            ==
          </Button>
        </DropDownTrigger>
        <DropDownMenu top="xxl">
          <Button variant="primary" size="icon">
            {'>='}
          </Button>
          <Button variant="primary" size="icon">
            {'<='}
          </Button>
          <Button variant="primary" size="icon">
            {'><'}
          </Button>
        </DropDownMenu>
      </DropDown>
      <Input />
      <Label>100 KM</Label>
    </InputGroup>
    <FormMessage>
      With an message below
    </FormMessage>
  </FormGroup>
)

export const Full: React.FC = () => (
  <Box width={1}>
    <StoryWrapper label="Full featured FormGroup" />
    <FullFeaturedFormGroup />
  </Box>
)
