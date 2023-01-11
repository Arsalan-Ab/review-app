import { Button } from "@mui/material";
import { colors } from "constants/colors";

interface VoteProps {
    voteOption: string[]
}

function Vote({ voteOption }: VoteProps) {

    return (
        <div className="d-flex flex-column justify-content-between">
            {
                voteOption.map((option: string) => (
                    <Button variant="contained" sx={{
                        backgroundColor: colors.primary, fontSize: 13, ":hover": {
                            bgcolor: colors.secondry
                        }, marginBottom: 2
                    }}>{option}</Button>
                ))
            }
        </div >
    );
}

export default Vote;
