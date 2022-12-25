import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { SyntheticEvent, useState } from 'react';
import MultiProgress from 'react-multi-progress'
import { colors, progressColor } from 'value/colors/colors';
import VoteStatusGenerator from './vote-status-generator';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = useState<string | false>('panel1');

  const handleChange =
    (panel: string) => (event: SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div className='col-sm-8 offset-sm-2'>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange("panel1")}>
        <AccordionSummary id="panel1d-header" className='d-flex'>
          <Typography className='w-50'>Import References</Typography>
          <div className='flex-grow-1'>
            0 total duplicate remove
          </div>
          <div>
            import
          </div>

        </AccordionSummary>
        <AccordionDetails sx={{ padding: 1 }}>
          <div className='border-bottom mb-1'>
            import History
          </div>
          <div className='d-flex justify-content-between mb-1 border-bottom'>
            <div> date</div>
            <div>n studies added to title and abstract screening</div>
            <div>no duplicate found</div>
          </div>
          <div>view details</div>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary id="panel2d-header" className='d-flex'>
          <Typography className='w-50'>Title and Abstract Screning</Typography>

          <div className='flex-grow-1'>
            0 irrelevnt
          </div>
          <div>
            n studies to screen
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className='d-flex w-100'>
            <div className='w-50'>
              <div className='fs-6 mb-1'>TEAM PROGRESS</div>
              <div className='mb-2'>
                <MultiProgress backgroundColor={progressColor.noVote} height={15} elements={
                  [{
                    value: 25,
                    color: progressColor.oneVote
                  }]
                } />
              </div>
              <div className='container'>
                <div className='row'>
                  <div className='col-7'>
                    {VoteStatusGenerator("DONE", progressColor.done, 2)}
                  </div>
                  <div className='col-5'>
                    {VoteStatusGenerator("CONFLICT", progressColor.conflict, 0)}
                  </div>
                </div>

                <div className='row'>
                  <div className='col-7'>
                    <div>{VoteStatusGenerator("ONE VOTE", progressColor.oneVote, 2)}</div>
                  </div>
                  <div className='col-5'>
                    <div>{VoteStatusGenerator("NO VOTE", progressColor.noVote, 0)}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Collapsible Group Item #3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div >
  );
}
