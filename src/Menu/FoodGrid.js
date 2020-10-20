
import styled from "styled-components"

import {Title} from "../Styles/title"


export const FoodGrid = styled.div`

display: grid;
grid-template-columns: 1fr 1fr;
gap: 20px;
padding-bottom: 40px;

`

export const FoodLabel = styled(Title)`

position: absolute;
background-color: rgb(255 255 255 / 0.7);
padding: 5px;


`

export const Food = styled.div`

height: 100px;

font-size: 20px;
background-image: ${({img}) => `url(${img});` };
background-position: center;
background-size: cover;
padding: 10px;

opacity: 0.8;

margin-top: 5px;

transition-property: box-shadow margin-top;
transition-duration: 0.2s;
box-shadow: 0px 0px 2px 0px grey;

&:hover {


    cursor: pointer;
    box-shadow: 0px 10px 20px 0px grey;
    opacity: 1;
    margin-top: 0px;
    margin-bottom: 5px;
    
    
}

`
