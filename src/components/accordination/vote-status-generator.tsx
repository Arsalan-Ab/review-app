import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';
import { Icon, IconButton } from '@mui/material';

function VoteStatusGenerator(title: string, color: string, count: number,) {

    return (
        <>
            <div className='d-flex align-items-center'>
                <div className='me-1'>{count}</div>
                <FiberManualRecordOutlinedIcon sx={{ color: color }} className='me-1' fontSize='small' />
                <div>{title}</div>

            </div>
        </>
    );
}

export default VoteStatusGenerator;