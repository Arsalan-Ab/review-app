import { Button, Paper, TextField } from "@mui/material";
import { colors } from "constants/colors";

function SignForm() {


    let signUp = true
    return (
        <Paper className="mt-5 position-relative" elevation={3}>
            <form className=" mb-5 px-5 py-3" style={{ width: 400 }}>
                <div className="text-center mb-5">
                    {
                        <h2>{signUp ? "SignUp" : "Login"}</h2>
                    }
                </div>

                <div className="mb-5">
                    <label className="mb-1"><small>Username</small></label>
                    <TextField className="mb-2" size="small" id="outlined-basic" variant="outlined" fullWidth />
                    <label className="mb-1"><small>Password</small></label>
                    <TextField size="small" id="outlined-basic" variant="outlined" type={"password"} fullWidth />
                </div>
                <div>
                    <Button type="submit" variant="contained" size="small" fullWidth sx={{
                        backgroundColor: colors.primary, fontSize: 12, ":hover": {
                            bgcolor: colors.secondry
                        }
                    }}>register </Button>
                </div>

            </form>

        </Paper>
    );
}

export default SignForm;