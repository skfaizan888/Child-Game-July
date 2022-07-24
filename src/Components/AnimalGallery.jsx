import { Card, CardContent, Grid,Button } from '@mui/material';
import React from 'react';
import { useState } from 'react';

const AnimalGallery = () => {
    const [animalgallery,setAnimalgallery]=useState("Elephant")
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Card className='content-gallery-name'>
                        <CardContent>
                            <h2>
                                {animalgallery}
                            </h2>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card>
                        <CardContent>
                            <img className='content-galery-img' src={`Images/${animalgallery}.jpg`} alt="" />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Button onClick={()=>setAnimalgallery("Tiger")} fullWidth color="warning" variant="contained">Tiger</Button>
                </Grid>
                <Grid item xs={4}>
                    <Button onClick={()=>setAnimalgallery("Zebra")} fullWidth color="warning" variant="contained">Zebra</Button>
                </Grid>
              
                <Grid item xs={4}>
                    <Button onClick={()=>setAnimalgallery("Cat")} fullWidth color="warning" variant="contained">Cat</Button>
                </Grid>
                <Grid item xs={6}>
                    <Button onClick={()=>setAnimalgallery("Cheetah")} fullWidth color="warning" variant="contained">Cheetah</Button>
                </Grid>
                <Grid item xs={6}>
                    <Button onClick={()=>setAnimalgallery("Cub")} fullWidth color="warning" variant="contained">Cub</Button>
                </Grid>
            </Grid>
        </div>
    );
};

export default AnimalGallery;