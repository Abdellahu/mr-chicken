import React, { useState, useContext } from "react";
import { HandThumbsUpFill, CaretLeft, CaretRight } from "react-bootstrap-icons";
import { DishContext } from "./Menu";
import {useMyContext} from'./DishDataProvider'
import OneDish from "./OneDish";

function Extra(props) {
  // const { setIdCollection } = useMyContext()
  // const passerer = useContext(DishContext)
  const passer = props.dish
 

  return (
    <OneDish passer={passer} />
  );
}

export default Extra;
