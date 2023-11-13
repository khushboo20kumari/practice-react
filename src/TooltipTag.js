import * as React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { Typography } from '@mui/material';

export default function NewThings() {
    return (
        <>
            <Tooltip title="Delete">
                <IconButton>
                    <DeleteIcon />
                </IconButton>
            </Tooltip>
            <Tooltip title="Name">
               <Typography>khushboo</Typography>
            </Tooltip>
        </>
    );
}

