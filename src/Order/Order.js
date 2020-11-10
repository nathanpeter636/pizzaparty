import React from "react";

import styled from "styled-components";

import { Title } from "../Styles/title";

import { formatPrice } from "../Data/FoodData";

import { getPrice } from "../FoodDialog/FoodDialog";

import {
  DialogContent,
  DialogFooter,
  ConfirmButton,
} from "../FoodDialog/FoodDialog";

const OrderStyled = styled.div`
  position: fixed;
  right: 0px;
  top: 49px;
  width: 340px;
  background-color: white;
  height: calc(100% - 48px);
  box-shadow: 0px 12px 28px 2px grey;

  display: flex;
  flex-direction: column;
`;

const OrderContent = styled(DialogContent)`
  padding: 40px 20px 20px;
  height: 100%;
`;

const OrderMessage = styled.div`
  padding: 40px 20px 20px;
  text-align: center;
`;

const OrderContainer = styled.div`
  padding: 10px 0px;
  border-bottom: 1px solid #f2f2f2;
`;

const OrderTitle = styled(Title)`
  font-size: 2em;
`;

const OrderItem = styled.div`
  padding: 10px 0;
  display: grid;
  grid-template-columns: 20px 150px 20px 60px;
  justify-content: space-between;
`;

const DetailItem = styled.div`

color: gray;
font-size: 13px;


`

export function Order({ orders }) {
  const subtotal = orders.reduce((total, order) => {
    return total + getPrice(order);
  }, 0);

  const tax = subtotal * 0.15;

  const total = subtotal + tax;

  return (
    <OrderStyled>
      {orders.length === 0 ? (
        <OrderContent>
          <OrderMessage> Your orders looking empty bra </OrderMessage>
        </OrderContent>
      ) : (
        <OrderContent>
          <OrderContainer>
            {" "}
            <OrderTitle>Your Order </OrderTitle>
          </OrderContainer>
          {orders.map((order) => (
            <OrderContainer>
              <OrderItem>
                <div>{order.quantity}</div> <div>{order.name}</div>
                <div>{formatPrice(getPrice(order))}</div>
              </OrderItem>
              <DetailItem>
                {order.toppings.filter(t => t.checked).map(topping => topping.name).join(", ")}
              </DetailItem>
            </OrderContainer>
          ))}

          <OrderContainer>
            <OrderItem>
              <div />
              <div>Sub-Total</div>
              <div>{formatPrice(subtotal)}</div>
            </OrderItem>
            <OrderItem>
              <div />
              <div>GST</div>
              <div>{formatPrice(tax)}</div>
            </OrderItem>
            <OrderItem>
              <div />
              <div>Total</div>
              <div>{formatPrice(total)}</div>
            </OrderItem>
          </OrderContainer>
        </OrderContent>
      )}

      <DialogFooter>
        <ConfirmButton>Checkout</ConfirmButton>
      </DialogFooter>
    </OrderStyled>
  );
}
