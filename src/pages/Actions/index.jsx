import React from "react";
import Layout from "components/Layout";
import RoomTitle from "components/RoomTitle";
import {Stack, Button} from "@mui/material";
import {styled} from "@mui/material/styles";
import {Divider, Paper, Box} from "@mui/material";
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import MuiGrid from '@mui/material/Grid';

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
  const numOfActions = 0
  const numOfDays = 0
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
            >  {numOfActions} Actions <AddCircleRoundedIcon color='primary.contrastText' alignItems='end'> </AddCircleRoundedIcon ></ActionItem>


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

          
          <GridActionItems date='DD / MM / YYYY' description= 'This is the description of the action.'></GridActionItems>
          <GridActionItems date='DD / MM / YYYY' description= 'This is the description of the action'></GridActionItems>
          <GridActionItems date='DD / MM / YYYY' description= 'This is the description of the action'></GridActionItems>
          <GridActionItems date='DD / MM / YYYY' description= 'This is the description of the action'></GridActionItems>


          
          <Button size= "large" sx={{ bgcolor: '#ED6C02', color: 'primary.contrastText', marginTop:'0.5em', marginBottom:'1 em'}}>Show More</Button>
        </Box>
      </Stack>

    </Layout>
  );
};

export default Actions;
