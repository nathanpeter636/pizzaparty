import {useEffect} from 'react';



// documentation https://dev.to/rbreahna/dynamic-page-title-with-react-hooks-47l3


export function useTitle({openFood, orders}){


    useEffect(() => {


        if(openFood) {
            document.title = openFood.name;
        } 

        else {
            document.title = orders.length === 0 ? `What's for dinner?` : `[${orders.length}] items in your order! `;
        }

    })



};