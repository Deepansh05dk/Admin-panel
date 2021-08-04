import React, { useState } from "react";
import { Grid, Button } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
// import { makeStyles } from "@material-ui/styles";
import MUIDataTable from "mui-datatables";

// components
import PageTitle from "../../components/PageTitle";
import RepresentativeForm from "../../components/Forms/RepresentativeForm";
import ExhibitorForm from "../../components/Forms/ExhibitorForm";
import VisitorForm from "../../components/Forms/VisitorForm";
import { MenuItem, Menu } from "@material-ui/core";

// data
const columns = [
  {
    name: "name",
    label: "Name",
    options: {
      filter: false,
      sort: true,
    },
  },
  {
    name: "userType",
    label: "User Type",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "emailId",
    label: "Email Id",
    options: {
      filter: false,
      sort: false,
    },
  },
  {
    name: "phone",
    label: "Phone",
    options: {
      filter: false,
      sort: false,
    },
  },
  {
    name: "brand",
    label: "Brand",
    options: {
      filter: false,
      sort: false,
    },
  },
  {
    name: "Edit",
    options: {
      filter: true,
      sort: false,
      empty: true,
      customBodyRender: (value, tableMeta, updateValue) => {
        return (
          <Button
            variant="contained"
            color="primary"
            onClick={() =>
              window.alert(`Clicked "Edit" for row ${tableMeta.rowIndex}`)
            }
          >
            Edit
          </Button>
        );
      },
    },
  },
];

const datatableData = [
  ["Joe James", "Visitor", "test123@gmail.com", "Yonkers", "NY"],
  ["John Walsh", "Visitor", "test123@gmail.com", "Hartford", "CT"],
  ["Bob Herm", "Exhibitor", "test123@gmail.com", "Tampa", "FL"],
  ["James Houston", "Representative", "test123@gmail.com", "Dallas", "TX"],
  ["Prabhakar Linwood", "Visitor", "test123@gmail.com", "Hartford", "CT"],
  ["Kaui Ignace", "Visitor", "test123@gmail.com", "Yonkers", "NY"],
  ["Esperanza Susanne", "Exhibitor", "test123@gmail.com", "Hartford", "CT"],
  ["Christian Birgitte", "Visitor", "test123@gmail.com", "Tampa", "FL"],
  ["Meral Elias", "Exhibitor", "test123@gmail.com", "Hartford", "CT"],
  ["Deep Pau", "Representative", "test123@gmail.com", "Yonkers", "NY"],
  ["Sebastiana Hani", "Visitor", "test123@gmail.com", "Dallas", "TX"],
  ["Marciano Oihana", "Exhibitor", "test123@gmail.com", "Yonkers", "NY"],
  ["Brigid Ankur", "Visitor", "test123@gmail.com", "Dallas", "TX"],
  ["Anna Siranush", "Exhibitor", "test123@gmail.com", "Yonkers", "NY"],
  ["Avram Sylva", "Representative", "test123@gmail.com", "Hartford", "CT"],
  ["Serafima Babatunde", "Visitor", "test123@gmail.com", "Tampa", "FL"],
  ["Gaston Festus", "Representative", "test123@gmail.com", "Tampa", "FL"],
];

export default function Tables() {
  var [adduserMenu, setAdduserMenu] = useState(null);
  const [openRepresentative, setOpenRepresentative] = useState(false);
  const [openVisitor, setOpenVisitor] = useState(false);
  const [openExhibitor, setOpenExhibitor] = useState(false);
  return (
    <>
      <PageTitle
        title="Users"
        button={
          <Button
            aria-controls="adduser-menu"
            onClick={(e) => setAdduserMenu(e.currentTarget)}
            variant="contained"
            size="medium"
            color="primary"
          >
            ADD USER <ArrowDropDownIcon />
          </Button>
        }
      />
      <Menu
        id="profile-menu"
        open={Boolean(adduserMenu)}
        anchorEl={adduserMenu}
        onClose={() => setAdduserMenu(null)}
        disableAutoFocusItem
      >
        {" "}
        <MenuItem
          onClick={(e) => {
            e.preventDefault();
            setOpenExhibitor(true);
          }}
        >
          Add Exhibitor
        </MenuItem>
        <MenuItem
          onClick={(e) => {
            e.preventDefault();
            setOpenRepresentative(true);
          }}
        >
          Add Representative
        </MenuItem>
        <MenuItem
          onClick={(e) => {
            e.preventDefault();
            setOpenVisitor(true);
          }}
        >
          Add Visitor
        </MenuItem>
      </Menu>
      <RepresentativeForm
        open={openRepresentative}
        setOpen={setOpenRepresentative}
      />
      <ExhibitorForm open={openExhibitor} setOpen={setOpenExhibitor} />
      <VisitorForm open={openVisitor} setOpen={setOpenVisitor} />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <MUIDataTable
            title="Employee List"
            data={datatableData}
            columns={columns}
            options={{
              filterType: "checkbox",
            }}
          />
        </Grid>
      </Grid>
    </>
  );
}
