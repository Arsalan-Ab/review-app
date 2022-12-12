import { ReactNode } from "react";
import { Box } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import NotificationsNoneSharpIcon from '@mui/icons-material/NotificationsNoneSharp';
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { colors } from "../../value/colors/colors";


function PrimaryNavigation() {


    return (
            <Box sx={{ flexGrow: 1 }}>
                <AppBar sx={{ bgcolor: colors.primary }} position="static">
                    <Toolbar>
                        <Typography sx={{ flexGrow: 1 }}>logo</Typography>
                        <IconButton>
                            <NotificationsNoneSharpIcon sx={{ color: "white" }} />
                        </IconButton>
                        <IconButton>
                            <Avatar sx={{ bgcolor: colors.secondry, justifyContent: "center", alignItems: "center", height: 30, width: 30 }}>n</Avatar>
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </Box>
    );
}

export default PrimaryNavigation;