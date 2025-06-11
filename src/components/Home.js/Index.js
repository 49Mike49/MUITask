import NavigationHeader from '../Home.js/NavigationHeader/index';
import PersonsData from '../Home.js/PersonsData/index';
import SearchField from '../Home.js/SearchField/index';
import { Stack, Box } from '@mui/material'

export default function HomePage(){
    return(
        <Stack sx={{display:"flex", flexDirection:"row"}}>
            <Box sx={{width:"5%", position:"fixed"}}>
                <NavigationHeader />
            </Box>
            <Box sx={{width:"95%", marginLeft:"5%"}}>
                <SearchField />
                <PersonsData />
            </Box>
        </Stack>
    );
}