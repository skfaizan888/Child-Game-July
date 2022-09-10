import React from 'react';
import { Tab ,Tabs} from '@mui/material';
import { useState } from 'react';
import Animals from './Animals';
import Fruits from './Fruits';
import AnimalGallery from './AnimalGallery';
import ArticalsGallery from './ArticalsGallery';
import FruitsGallery from './FruitsGallery';
import { Calculator } from './Calculator';
import CalculareApple from './CalculareApple';
const Home = () => {
    const[val,setVal]=useState("animal")
    return (
        <div className='sub'>
            <h1>Home</h1>
            <Tabs value={val} onChange={(e,value)=>setVal(value)} >
                <Tab label="Animal" value="animal" />
                <Tab label="Fruits" value="fruit" />
                <Tab label="Animal Gallery" value="animalgallery" />
                <Tab label="Artical Gallery" value="articalgallery" />
                <Tab label="Fruites Gallery" value="fruitgallery" />
                <Tab label="Calculator" value="Calsi" />
            </Tabs>
            {val==="animal"&&  <Animals/> }
            {val==="fruit"&&  <Fruits/> }
            {val==="animalgallery"&&  <AnimalGallery/> }
            {val==="articalgallery"&&  <ArticalsGallery/> }
            {val==="fruitgallery"&&  <FruitsGallery/> }
            {val==="Calsi"&&  <CalculareApple/> }
        </div>
    );
};

export default Home;