import React from "react";

import styled from "styled-components";
import { foods } from "../Data/FoodData";

import { FoodLabel } from "../Menu/FoodGrid";

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

const DialogContent = styled.div`
  overflow: auto;
  min-height: 200px;
`;
const DialogFooter = styled.div`
  box-shadow: 0px 2px 20px 0px grey;
  height: 60px;
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

export function FoodDialog({ openFood, setOpenFood, food }) {
  function close() {
    setOpenFood();

    //no argument, removing dialog
  }

  return openFood ? (
    <>
      <DialogShadow onClick={close} />
      <Dialog>
        <DialogBanner img={openFood.img}>
          <DialogBannerName>{openFood.name}</DialogBannerName>
        </DialogBanner>
        <DialogContent></DialogContent>
        <DialogFooter></DialogFooter>
      </Dialog>
    </>
  ) : null;
}
