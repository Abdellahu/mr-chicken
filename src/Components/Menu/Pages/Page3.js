import React, { useState, useContext } from 'react'
import {  HandThumbsUpFill, CaretLeft, CaretRight} from 'react-bootstrap-icons'
import { DishContext } from "./../Menu";
import {useMyContext} from'./../DishDataProvider'
import OneDish from '../OneDish';

function Page3(props) {
    let [juiceDishArray, drinkDishArray, extraDishArray] = props.passer

  // const { setIdCollection } = useMyContext()
  // const passerer = useContext(DishContext)
     const passer = []
  // const passer2 = passerer[0]
  // const passer3 = passerer[1]
  // const passer4 = passer[1] 
  // const indexes = [2, 3, 4, 5]
   juiceDishArray.map((juice)  => {
    if (juice[0] !== 23 && juice[0] !== 24) {
      passer.push(juice)
    }
  })
    drinkDishArray.map((drink)  => {
    passer.push(drink)
  })
   extraDishArray.map((extra)  => {
    passer.push(extra)
  })
  
  // const mappedValues = indexes.map(index => {
  //       const item = passer4[index]
  //       return item;
  //     }); 
  
  // const handelCollection = (userId) => {
  //    setIdCollection((prevOrder) => {
  //    return[...prevOrder, userId] 
  //    })
  //   }
  return (
    <OneDish passer={passer} />
  )
}

export default Page3