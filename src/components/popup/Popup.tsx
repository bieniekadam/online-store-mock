import React from "react";
import { Button, Modal } from "semantic-ui-react";
import "./popup.css";

function Popup() {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      dimmer="blurring"
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Add to Cart</Button>}
      animated="fade"
    >
      <Modal.Content image>
        <Modal.Description>
          <p>Do you want to add this item to the Cart?</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="red" onClick={() => setOpen(false)}>
          No
        </Button>
        <Button
          content="Yes"
          labelPosition="right"
          icon="checkmark"
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
}

export default Popup;
