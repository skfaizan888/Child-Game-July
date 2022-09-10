import React from 'react';
import {useMediaQuery} from '@mui/material';

const Respon = () => {
    const matches = useMediaQuery('(min-width:420px)');             
    return (
        
            <span>{`(min-width:600px) matches: ${matches}`}</span>
       
    );
};

export default Respon;