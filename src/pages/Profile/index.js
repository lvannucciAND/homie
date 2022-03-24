import React from "react";
import RoomTitle from "components/RoomTitle";
import Layout from "components/Layout";
import {Box, Divider, Button, Stack} from '@mui/material'
import MuiGrid from '@mui/material/Grid';
import {styled} from "@mui/material/styles";
import EditIcon from '@mui/icons-material/Edit';


const Grid = styled(MuiGrid)(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& [role="separator"]': {
    margin: theme.spacing(0, 2),
  },
}));

const GridProfileItems = ({itemType, item}) => {
  return (
    <Grid  container sx={{
      backgroundColor: 'primary.contrastText',
      borderRadius: '10px',
      marginBottom: '0.5em',
      p:1,
      }} >  
        <Grid item xs={2.5} alignItems='left' textAlign= 'center' vertAlign='center' sx={{
          padding: '2px 5px 2px',
          fontSize: '16px',
          fontWeight:'bold'
        }}
         >
          {itemType}
        </Grid>
        <Divider 
          orientation="vertical" flexItem >
        </Divider>
        <Grid item xs alignItems='center' textAlign='left' sx={{fontSize:'16px',
          padding: '2px 5px 2px'
        }}>
          &nbsp; {item}
          <EditIcon alignItems='left' textAlign= 'center' vertAlign='center'> </EditIcon>
        </Grid>
      </Grid>
  )
};

const Profile = () => {
  return (
    <Layout>
      <RoomTitle text="Profile" />
      <Box

            sx={{
                // width: 300,
                backgroundColor: '#7677E5',
                borderRadius: '20px',
                padding: '40px 25px',
            }} >
          <GridProfileItems itemType="Email" item=""></GridProfileItems>
          <GridProfileItems itemType="Password" item=""></GridProfileItems>
          <GridProfileItems itemType="Address" item=""></GridProfileItems>
          <GridProfileItems itemType="Move-Date" item=""></GridProfileItems>
        <Stack>
          <Button
                style={{paddingLeft: "59px", paddingRight: "59px"}}
                    variant="outlined"
                    sx={{ color: 'warning.main', fontWeight: 'bold', bgcolor: 'white', marginTop:'2em', marginBottom:'2em' }}
                    
                    size="large"
                    >
                      Logout
         </Button>

         <Button
                style={{paddingLeft: "59px", paddingRight: "59px"}}
                    variant="outlined"
                    sx={{ color: 'warning.main', fontWeight: 'bold', bgcolor: 'white', marginBottom:'2em' }}
                    
                    size="large"
                    >
                      Delete Account
         </Button>
         <div> <center>Terms and Conditions</center></div>
         </Stack>
        </Box>

    </Layout>
  );
};

export default Profile;
