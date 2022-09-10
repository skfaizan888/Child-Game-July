import { Card, CardContent, Grid,Button } from '@mui/material';
import React from 'react';
import { useState } from 'react';

const ArticalsGallery = () => {
    const [artical,setArtical]=useState("Chair")
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Card className='content-gallery-name'>
                        <CardContent>
                            <h2>
                                {artical}
                            </h2>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card>
                        <CardContent>
                            <img className='content-galery-img' src={`Artical/${artical}.jpg`} alt="" />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Button onClick={()=>setArtical("AC")} fullWidth color="warning" variant="contained">Ac</Button>
                </Grid>
                <Grid item xs={4}>
                    <Button onClick={()=>setArtical("Cooler")} fullWidth color="warning" variant="contained">Cooler</Button>
                </Grid>
              
                <Grid item xs={4}>
                    <Button onClick={()=>setArtical("Fan")} fullWidth color="warning" variant="contained">Fan</Button>
                </Grid>
                <Grid item xs={6}>
                    <Button onClick={()=>setArtical("Table")} fullWidth color="warning" variant="contained">Table</Button>
                </Grid>
                <Grid item xs={6}>
                    <Button onClick={()=>setArtical("Tv")} fullWidth color="warning" variant="contained">Tv</Button>
                </Grid>
            </Grid>
        </div>
    );
};

export default ArticalsGallery;