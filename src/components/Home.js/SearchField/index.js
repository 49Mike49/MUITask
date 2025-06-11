import {
  Box,
  TextField,
  Button,
  InputAdornment,
  Divider
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CreateIcon from "@mui/icons-material/Create";
import { theme } from '../../../components/ThemeProvider'

export default function SearchField() {
  return (
    <Box 
    sx={{ 
        display: "flex", 
        flexDirection: "column"
        }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          margin: "10px 10px 0px 10px",
        }}
      >
        <Box sx={{ display: "flex", gap: "20px" }}>
          <TextField
            placeholder="Search"
            sx={{
                width:"500px",
                bgcolor:theme.palette.error.main,
            }}
            variant="outlined"
            size="small"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              },
            }}
          />

          <Button 
            variant="outlined"
            size="small" 
            sx={{ 
                minWidth: '40px', 
                padding: '4px',     
            }}
            >
                <AddIcon fontSize="small" />
          </Button>
        </Box>

        <Button 
            variant="outlined"
            size="small" 
            sx={{ 
                minWidth: '40px', 
                padding: '4px',   
                bgcolor: theme.palette.error.main
            }}
            >
                <NotificationsIcon fontSize="small" />
          </Button>

      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          margin: "10px 20px 10px 20px",
        }}
      >
        <Box 
        sx={{ 
            display: "flex", 
            alignItems: "center" 
            }}>
          <Button 
          variant="outlined" 
          endIcon={<ArrowForwardIosIcon sx={{color:theme.palette.info.main}} />} 
          sx={{
            bgcolor: theme.palette.success.light, 
            color: theme.palette.primary.main
            }}>
            Admin Settings
          </Button>

          <Button color="none">
            Data Field
          </Button>

        </Box>

        <Box>
          <Button variant="outlined" startIcon={<CreateIcon />}>
            Rename Modules
          </Button>
        </Box>
      </Box>
      <Divider/>
    </Box>
  );
}
