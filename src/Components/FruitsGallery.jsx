import { Card, CardContent, Grid,Button } from '@mui/material';
import React from 'react';
import { useState } from 'react';

const FruitsGallery = () => {
    const [fruitsglry,setFruitsglry]=useState("Apple")
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Card className='content-gallery-name'>
                        <CardContent>
                            <h2>
                                {fruitsglry}
                            </h2>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card>
                        <CardContent>
                            <img className='content-galery-img' src={`Fruite/${fruitsglry}.jpg`} alt="" />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Button onClick={()=>setFruitsglry("Banana")} fullWidth color="warning" variant="contained">Banana</Button>
                </Grid>
                <Grid item xs={4}>
                    <Button onClick={()=>setFruitsglry("Kivi")} fullWidth color="warning" variant="contained">Kivi</Button>
                </Grid>
              
                <Grid item xs={4}>
                    <Button onClick={()=>setFruitsglry("Mango")} fullWidth color="warning" variant="contained">Mango</Button>
                </Grid>
                <Grid item xs={6}>
                    <Button onClick={()=>setFruitsglry("Apple")} fullWidth color="warning" variant="contained">Apple</Button>
                </Grid>
                <Grid item xs={6}>
                    <Button onClick={()=>setFruitsglry("Orange")} fullWidth color="warning" variant="contained">Orange</Button>
                </Grid>
            </Grid>
        </div>
    );
};

export default FruitsGallery;