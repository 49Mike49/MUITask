import { Button, Box } from "@mui/material";
import { useState } from "react";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import GroupIcon from "@mui/icons-material/Group";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import InboxIcon from "@mui/icons-material/Inbox";
import SettingsIcon from "@mui/icons-material/Settings";
import MessageIcon from "@mui/icons-material/Message";
import BarChartIcon from "@mui/icons-material/BarChart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import InstagramIcon from '@mui/icons-material/Instagram';

export default function NavigationHeader() {
  const [activeButton, setActiveButton] = useState(null);

  const icons = [
    { Icon: InstagramIcon },
    { Icon: CurrencyExchangeIcon },
    { Icon: GroupIcon },
    { Icon: CorporateFareIcon },
    { Icon: CalendarMonthIcon },
    { Icon: InboxIcon },
    { Icon: SettingsIcon },
    { Icon: MessageIcon },
    { Icon: BarChartIcon },
    { Icon: MessageIcon },
    { Icon: AccountCircleIcon },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        height: "100vh",
        bgcolor: "#1c2841",
      }}
    >
      {icons.map(({ Icon }, index) => (
        <Button
          variant={activeButton === index ? "contained" : "text"}
          sx={{
            color: "#00FF00",
            bgcolor: activeButton === index ? "#139654" : "transparent",
          }}
          onClick={() => setActiveButton(index)}
        >
          <Icon sx={{ color: activeButton === index ? "white" : "white" }} />
        </Button>
      ))}
    </Box>
  );
}
