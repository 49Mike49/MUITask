import {
  Box,
  Button,
  Stack,
  Typography,
  FormControlLabel,
  Checkbox,
  Paper,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { theme } from "../../ThemeProvider/index.js";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";

const ButtonValue = ["Name", "Organization", "Market", "Sales"];

const PersonDetails = [
  {label:"FirstName",title:"text"},
  {label:"LastName",title:"text"},
  {label:"Emails",title:"Emails"},
  {label:"Phones",title:"Phones"},
  {label:"Designation",title:"text"},
  {label:"Company",title:"Company"},
  {label:"Sales Owner",title:"Owner"},
  {label:"Lifecycle Stage",title:"Dropdown"},
  {label:"some1",title:"Dropdown"},
  {label:"some2",title:"text"},
  {label:"some3",title:"text"},
];


export default function PersonsData() {
  const [activeButton, setActiveButton] = useState(null);

  return (
    <Box>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          margin: "20px 10px 0 20px",
        }}
      >
        <Box
          sx={{
            bgcolor: theme.palette.primary.light,
            height: "40px",
            width: "350px",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            borderRadius: "5px",
          }}
        >
          {ButtonValue.map((value, index) => (
            <Button
              key={index}
              size="small"
              variant={activeButton === index ? "outlined" : "text"}
              sx={{
                bgcolor: activeButton === index ? "#139654" : "transparent",
              }}
              onClick={() => setActiveButton(index)}
            >
              {value}
            </Button>
          ))}
        </Box>

        <Button variant="outlined" size="small" startIcon={<AddIcon />}>
          System Fields
        </Button>

        <Button variant="outlined" size="small" startIcon={<AddIcon />}>
          custom Field
        </Button>
      </Stack>

      <Box
        sx={{
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {PersonDetails.map((value) => (
          <Paper>
            <DragIndicatorIcon />

            <Box
              sx={{
                width: "500px",
                display: "flex",
                gap: "10px",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h6"
                noWrap
                sx={{
                  fontFamily: "unset",
                }}
              >
                {value.label}
              </Typography>

              <Button variant="contained" size="small">
                {value.title}
              </Button>
            </Box>

            <FormControlLabel
              sx={{ width: "300px" }}
              control={<Checkbox defaultChecked />}
              label={
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontFamily: "unset",
                  }}
                >
                  Add View
                </Typography>
              }
            />

            <FormControlLabel
              sx={{ width: "300px" }}
              control={<Checkbox defaultChecked />}
              label={
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontFamily: "unset",
                  }}
                >
                  Required
                </Typography>
              }
            />
          </Paper>
        ))}
      </Box>
    </Box>
  );
}
