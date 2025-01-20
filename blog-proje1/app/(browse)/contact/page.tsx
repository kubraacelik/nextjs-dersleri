import React from 'react'
import { Button, ButtonGroup } from "@heroui/button";
import { Checkbox } from '@heroui/checkbox';

const ContactPage = () => {
  return (
    <>
      <div className="flex flex-wrap gap-4 items-center m-10">
        <Button color="default">Default</Button>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="success">Success</Button>
        <Button color="warning">Warning</Button>
        <Button color="danger">Danger</Button>
      </div>

      <div className="flex gap-4">
        <Checkbox defaultSelected color="default">
          Default
        </Checkbox>
        <Checkbox defaultSelected color="primary">
          Primary
        </Checkbox>
        <Checkbox defaultSelected color="secondary">
          Secondary
        </Checkbox>
        <Checkbox defaultSelected color="success">
          Success
        </Checkbox>
        <Checkbox defaultSelected color="warning">
          Warning
        </Checkbox>
        <Checkbox defaultSelected color="danger">
          Danger
        </Checkbox>
      </div>
    </>
  )
}

export default ContactPage