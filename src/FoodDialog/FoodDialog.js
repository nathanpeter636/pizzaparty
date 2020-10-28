import React from "react";

import styled from "styled-components";
import { foods } from "../Data/FoodData";

import { pizzaRed } from "../Styles/colors";
import { Title } from "../Styles/title";
import { FoodLabel } from "../Menu/FoodGrid";
import { formatPrice } from "../Data/FoodData";
import { QuantityInput } from "../FoodDialog/QuantityInput";
import {useQuantity} from "../Hooks/useQuantity";

const Dialog = styled.div`
  width: 500px;

  background-color: white;
  position: fixed;
  top: 105px;
  z-index: 5;

  max-height: calc(100% - 150px);
  left: calc(50% - 250px);

  display: flex;
  flex-direction: column;
`;

export const DialogContent = styled.div`
  overflow: auto;
  min-height: 200px;
  padding: 0px 40px;
`;
export const DialogFooter = styled.div`
  box-shadow: 0px -2px 10px 0px grey;
  height: 60px;
  display: flex;
  justify-content: center;
`;

export const ConfirmButton = styled.div`
  margin: 10px;
  color: white;
  height: 20px;
  padding: 10px;
  text-align: center;
  letter-spacing: 0.5px;
  width: 200px;
  cursor: pointer;
  background-color: ${pizzaRed};
`;

const DialogShadow = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0px;
  background-color: black;
  opacity: 0.7;
  z-index: 4;
`;

const DialogBanner = styled.div`
  min-height: 200px;
  margin-bottom: 20px;

  ${({ img }) => `background-image: url(${img})`};

  background-position: center;
  background-size: cover;
`;

const DialogBannerName = styled(FoodLabel)`
  top: 150px;
  font-size: 30px;
  padding-left: 20px;
`;

export function getPrice(order) {
  return order.quantity * order.price;
}

function FoodDialogContainer({ openFood, setOpenFood, setOrders, orders }) {
  
  const quantity = useQuantity(openFood && openFood.quantity);
  
  function close() {
    setOpenFood();

    //no argument, removing dialog
  }

  const order = {
    ...openFood, 
    quantity: quantity.value
  };



  function addToOrder() {
    setOrders([...orders, order]);
    close();
  }

  return openFood ? (
    <>
      <DialogShadow onClick={close} />
      <Dialog>
        <DialogBanner img={openFood.img}>
          <DialogBannerName>{openFood.name}</DialogBannerName>
        </DialogBanner>
        <DialogContent>
          <QuantityInput quantity={quantity}/>
        </DialogContent>
        <DialogFooter>
          <ConfirmButton onClick={addToOrder}>
            Add to Order: {formatPrice(getPrice(order))}
          </ConfirmButton>
        </DialogFooter>
      </Dialog>
    </>
  ) : null;
}

export function FoodDialog(props) {
  if (!props.openFood) return null;

  return <FoodDialogContainer {...props} />;
}
