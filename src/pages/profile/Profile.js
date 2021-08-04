import React, { useState } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import Widget from "../../components/Widget/Widget";
import { Grid, TextField, Button, Avatar } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import ChangePasswordForm from "../../components/Forms/ChangePasswordForm";

function Profile() {
  const [openPasswordForm, setOpenPasswordForm] = useState(false);
  return (
    <>
      <PageTitle title="Profile" />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Widget>
            {" "}
            <Grid container>
              <Grid item xs={12} sm={4} md={3} l={3} justify={"center"}>
                <Avatar
                  style={{
                    margin: "0px auto",
                    width: "60%",
                    height: "auto",
                  }}
                  src={"https://material-ui.com/static/images/avatar/1.jpg"}
                >
                  {" "}
                </Avatar>
              </Grid>
              <Grid item xs={12} sm={8} md={9} l={9}>
                <TextField
                  autoFocus
                  margin="dense"
                  label="Full Name"
                  type="text"
                  fullWidth
                />
                <TextField
                  margin="dense"
                  label="Email Address"
                  type="email"
                  fullWidth
                />
                <Button
                  style={{ margin: "20px 0px" }}
                  color="primary"
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenPasswordForm(true);
                  }}
                >
                  <EditIcon style={{ marginRight: "6px" }} fontSize="small" />
                  Change Password{" "}
                </Button>
              </Grid>
            </Grid>
          </Widget>
        </Grid>
        <ChangePasswordForm
          open={openPasswordForm}
          setOpen={setOpenPasswordForm}
        />
      </Grid>
    </>
  );
}

export default Profile;
