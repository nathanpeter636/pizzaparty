import React from 'react';

import styled from "styled-components"

import { foods } from "../Data/FoodData"

import {Food, FoodGrid, FoodLabel} from "./FoodGrid"

const MenuStyled = styled.div`


height: 1000px;
margin: 0px 400px 50px 20px;
padding-bottom: 50px;


`

export function Menu({setOpenFood}) {


    return (
        <MenuStyled>

<h1> Take your pick </h1>

        {Object.entries(foods).map(([sectionName, foods]) => (
        
        
        <>
        <h1>{sectionName}</h1>
        <FoodGrid>

        {foods.map(food => (
            <Food img={food.img} onClick={() => {
                setOpenFood(food)
                // console.log("clicked")
            }}>
                
                <FoodLabel>
                {food.name}
                </FoodLabel>
                
                </Food>
        ) )}
    
    
    </FoodGrid>
        
        </>
        
        
         ) )}



    </MenuStyled>
    )
}