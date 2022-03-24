import { Link } from "react-router-dom";

import PersonIcon from "@mui/icons-material/Person";
import CalculateIcon from "@mui/icons-material/Calculate";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

const MobileNav = () => {
  return (
    <>
    <BottomNavigation
      sx={{
        bgcolor: "#3c3486",
        position: "fixed",
        bottom: 0,
        width: 1.0,
      }}
      showLabels
      // value={value}
      // onChange={(event, newValue) => {
      //     setValue(newValue);
      // }}
    >

        <BottomNavigationAction
          label="Profile"
          to="/profile"
          component={Link}
          sx={style}
          icon={<PersonIcon sx={style} />}
        />
        <BottomNavigationAction
          label="Rooms"
          to="/rooms"
          component={Link}
          sx={style}
          icon={<MeetingRoomIcon sx={style} />}
        />
        <BottomNavigationAction
          label="Expenses"
          to="/expenses"
          component={Link}
          sx={style}
          icon={<CalculateIcon sx={style} />}
        />
        <BottomNavigationAction
          label="Actions"
          to="/actions"
          component={Link}
          sx={style}
          icon={<NotificationsActiveIcon sx={style} />}
        />
      </BottomNavigation>
      </>
    
  );
};

const style = {
  color: "secondary.contrastText",
};

export default MobileNav;
