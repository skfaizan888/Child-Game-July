import {Button, Card, CardContent, Grid } from '@mui/material';

import React from 'react';
import { useState } from 'react';

const Animals = () => {
    const [animal,setAnimal]=useState("Tiger")
    return (
        <div>
            <h3>Animals</h3>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <h2 >{animal}</h2>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Button onClick={()=>setAnimal("Tiger")} fullWidth color="error" variant="contained">Tiger</Button>
                </Grid>
                <Grid item xs={4}>
                    <Button onClick={()=>setAnimal("Cat")} fullWidth color="error" variant="contained">Cat</Button>
                </Grid>
                <Grid item xs={4}>
                    <Button onClick={()=>setAnimal("Zebra")} fullWidth color="error" variant="contained">Zabra</Button>
                </Grid>
               
            </Grid>
        </div>
    );
};

export default Animals;