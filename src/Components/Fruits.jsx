import {Button, Card, CardContent, Grid } from '@mui/material';

import React from 'react';
import { useState } from 'react';

const Fruits = () => {
    const [fruit,setFruit]=useState("Mango")
    return (
        <div>
            <h3>Fruits</h3>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <h2 >{fruit}</h2>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Button onClick={()=>setFruit("WaterMeloon")} fullWidth color="error" variant="contained">WaterMelon</Button>
                </Grid>
                <Grid item xs={4}>
                    <Button onClick={()=>setFruit("Banana")} fullWidth color="error" variant="contained">Banana</Button>
                </Grid>
                <Grid item xs={4}>
                    <Button onClick={()=>setFruit("Chiku")} fullWidth color="error" variant="contained">Chiku</Button>
                </Grid>
            </Grid>
        </div>
    );
};

export default Fruits;