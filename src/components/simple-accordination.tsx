import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface AccordionProps {
    accordinationSummary: string,
    accordinationDetails: React.ReactNode
}

export default function SimpleAccordion({ accordinationSummary, accordinationDetails }: AccordionProps) {
    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography fontSize={18}>{accordinationSummary}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {accordinationDetails}
                </AccordionDetails>
            </Accordion>
        </div>
    );
}