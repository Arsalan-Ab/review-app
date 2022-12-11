import { Box } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import NotificationsIcon from '@mui/icons-material/Notifications';

function PrimaryNavigation() {


    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <div>logo</div>
                    <IconButton>
                         <NotificationsIcon></NotificationsIcon>   
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default PrimaryNavigation;