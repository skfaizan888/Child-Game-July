import React from 'react';
import { Tab ,Tabs} from '@mui/material';
import { useState } from 'react';
import Animals from './Animals';
import Fruits from './Fruits';
import AnimalGallery from './AnimalGallery';
const Home = () => {
    const[val,setVal]=useState("animal")
    return (
        <div className='sub'>
            <h1>Home</h1>
            <Tabs value={val} onChange={(e,value)=>setVal(value)} >
                <Tab label="Animal" value="animal" />
                <Tab label="Fruits" value="fruit" />
                <Tab label="Animal Gallery" value="animalgallery" />
            </Tabs>
            {val==="animal"&&  <Animals/> }
            {val==="fruit"&&  <Fruits/> }
            {val==="animalgallery"&&  <AnimalGallery/> }
        </div>
    );
};

export default Home;