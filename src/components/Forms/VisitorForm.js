import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

function VisitorForm({ open, setOpen }) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      fullWidth
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Visitor Details</DialogTitle>
      <DialogContent>
        {/* <DialogContentText>
              To subscribe to this website, please enter your email address here. We
              will send updates occasionally.
            </DialogContentText> */}
        <TextField
          autoFocus
          margin="dense"
          label="Salutation"
          type="text"
          fullWidth
        />
        <TextField margin="dense" label="Full Name" type="text" fullWidth />
        <TextField
          margin="dense"
          label="Email Address"
          type="email"
          fullWidth
        />
        <TextField margin="dense" label="Phone No." type="tel" fullWidth />
        <TextField margin="dense" label="Organization" type="text" fullWidth />
        <TextField margin="dense" label="Website URL" type="url" fullWidth />
        <TextField margin="dense" label="Designation" type="text" fullWidth />
        <TextField margin="dense" label="City" type="text" fullWidth />
        <TextField margin="dense" label="State" type="text" fullWidth />
        <TextField margin="dense" label="Country" type="text" fullWidth />
        <TextField margin="dense" label="Business Type" type="text" fullWidth />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleClose} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default VisitorForm;
