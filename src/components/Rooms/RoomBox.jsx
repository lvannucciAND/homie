import React from "react";
import {
  Grid,
  Card,
  CardHeader,
  IconButton,
  CardContent,
  Typography,
} from "@mui/material";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const RoomBox = ({ title, boxCount, onOptionsClick, onRoomClick }) => {
  return (
    <Grid item xs={6} onClick={onRoomClick}>
      <Card sx={{bgcolor: "#7677E5", color: "#fff"}}>
        <CardHeader
          action={
            <IconButton onClick={onOptionsClick}>
              <MoreHorizIcon  sx={{color: "#fff"}}/>
            </IconButton>
          }
        />
        <CardContent>
          <Typography variant="button" align="left" sx={{display: "flex", justifyContent:"space-between"}}>
            {title} <ArrowForwardIcon fontSize="small" sx={{color: "#fff"}}/>
          </Typography>
          <br />
          {boxCount ? (<Typography variant="caption" align="left">
           {boxCount} boxes
          </Typography>) : null}
        </CardContent>
      </Card>
    </Grid>
  );
};

export default RoomBox;
