import React, { useEffect, useState } from 'react';
import Layout from "components/Layout";
import RoomTitle from "components/RoomTitle";
import {Stack, Button} from "@mui/material";
import {styled} from "@mui/material/styles";
import {Divider, Paper, Box} from "@mui/material";
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import MuiGrid from '@mui/material/Grid';
import { getAllNotifications, getProfile } from 'utilities/axios';
import { FormControlUnstyledContext } from '@mui/base';
import { ConstructionOutlined } from '@mui/icons-material';
const DaysItem = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  fontSize: 30,
  color: theme.palette.primary.contrastText
}));
const ActionItem = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  fontSize: 20,
  color: theme.palette.primary.contrastText
}
));
{/*const ActionBox = ({date, Description}) => {
      return (
        <Box
          sx={{
            backgroundColor: 'primary.contrastText',
            borderRadius: '10px'
            }} > 
          <Stack  direction="row" spacing={3} alignItems='center'
              justifyContent="left" divider={<Divider orientation='vertical' flexItem /> }>
              <div style={{ fontWeight: "bold", fontSize: '12px', width: '41px', color: '#3D3486' }}> {date} </div>
              <div style={{ fontSize: '12px', width: '100px', color: '#3D3486', textAlign: 'left'}}>  {Description} </div>
          </Stack>
        </Box>
      )
}
*/}
const Grid = styled(MuiGrid)(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& [role="separator"]': {
    margin: theme.spacing(0, 2),
  },
}));
const GridActionItems = ({date, description}) => {
  return (
    <Grid  container sx={{
      backgroundColor: 'primary.contrastText',
      borderRadius: '10px',
      marginBottom: '0.5em',
      p:1,
      }} >  
        <Grid item xs={2.5} alignItems='left' textAlign= 'center' vertAlign='center' sx={{
          padding: '2px 5px 2px',
          fontSize: '12px',
        }} >
          {date}
        </Grid>
        <Divider 
          orientation="vertical" flexItem >
        </Divider>
        <Grid item xs alignItems='center' textAlign='left' sx={{
          padding: '2px 5px 2px'
        }}>
          &nbsp; {description}
        </Grid>
      </Grid>
  )
};
const Actions = () => {
  const [moveInDate, setMoveInDate] = useState("");
  const [numActions, setNumActions] = useState("");
  const [daysLeft, setDaysLeft] = useState("");
  const [actionsList, setActionsList] = useState("");
  useEffect( () => {
    
    getAllNotificationsAxios();
    getUserMoveInAxios();
  });
  const getAllNotificationsAxios = async (e)=>{
    //e.preventDefault();
    const actions = await getAllNotifications(1);
    
    
    if (actions.length > 0){
        setNumActions(actions.length);
        
        //setActionsList(actions);
    } else {
        console.log("actions not found")
    }
    //console.log(actions);
  }
  const getUserMoveInAxios = async (e) => {
    //e.preventDefault();
    const user = await getProfile(1);
    if (user.length > 0){
      setMoveInDate(user[0].move_date);
    } else {
      console.log("user not found")
    }
    // removes time from iso move in date
    var moveDateShort = moveInDate.substring(0, 10);
    // gets current date
    var date = new Date();
    date = date.toISOString().split('T')[0]; 
    
    let diff =  Math.floor((Date.parse(moveDateShort.replace(/-/g,'\/')) - Date.parse(date.replace(/-/g,'\/'))) / 86400000);
    setDaysLeft(diff);
  }
  // create functions to calc difference in days between NOW and move in date (may need to change formatting of move in date)
  const numOfDays = daysLeft
  return (
    <Layout>
      <RoomTitle text='Actions' />
      <Stack 
        justifyContent='center'
        alignItems='center'
        spacing={2}
      >
        <DaysItem sx={{
          width: 300,
          borderRadius: '20px',
          backgroundColor: '#7677E5'
        }}
        > 
          {numOfDays} Days Left </DaysItem>
        <Box
            sx={{
                // width: 300,
                backgroundColor: '#7677E5',
                borderRadius: '20px',
                padding: '40px 25px',
            }}
        >
          <ActionItem
            sx={{backgroundColor: '#ED6C02', marginBottom: '0.5em'}}
            >  {numActions} Actions <AddCircleRoundedIcon color='primary.contrastText' alignItems='end'> </AddCircleRoundedIcon ></ActionItem>
          {/*<Stack spacing={2}>
            <ActionItem
            sx={{backgroundColor: '#ED6C02'}}
            >  {numOfActions} Actions <AddCircleRoundedIcon color='primary.contrastText' alignItems='end'> </AddCircleRoundedIcon ></ActionItem>
            <ActionBox date='MM/DD/YY' Description='This is the description'> </ActionBox>
            <ActionBox date='MM/DD/YY' Description='This is the description'> </ActionBox>
            <ActionBox date='MM/DD/YY' Description='This is the description'> </ActionBox>
          <ActionBox date='MM/DD/YY' Description='This is the description'> </ActionBox> 
             
            <Button size= "large" sx={{ bgcolor: '#ED6C02', color: 'primary.contrastText', marginTop:'4em', marginBottom:'2em'}}>Show More</Button>
          </Stack> */}
          
          <GridActionItems date="12-04-2022" description= "Declutter current home"></GridActionItems>
          <GridActionItems date="17-04-2022" description= "Book time off work"></GridActionItems>
          <GridActionItems date="18-04-2022" description= "Book removal company"></GridActionItems>
          <GridActionItems date="19-04-2022" description= "Call electricity provider"></GridActionItems>
          
          <Button size= "large" sx={{ bgcolor: '#ED6C02', color: 'primary.contrastText', marginTop:'0.5em', marginBottom:'1 em'}}>Show More</Button>
        </Box>
      </Stack>
    </Layout>
  );
};
export default Actions;