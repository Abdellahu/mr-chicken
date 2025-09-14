import  { useContext } from 'react'
import {  HandThumbsUpFill } from 'react-bootstrap-icons'
import { DishContext } from "./../Menu";
import {useMyContext} from'./../DishDataProvider'
import OneDish from '../OneDish';

function Page2(props) {
  let [fastingDishArray, mojitoDishArray, juiceDishArray] = props.passer
  // const { setIdCollection } = useMyContext()
  // const passerer = useContext(DishContext)
  let passer = [];
  // const passer2 = passerer[5]
  // const passer3 = passerer[3]
  // const passer4 = passer3[1] 
  // const indexes = [1, 2]
  
   fastingDishArray.map((fast)  => {
    passer.push(fast)
  })
   mojitoDishArray.map((moji)  => {
    passer.push(moji)
  })
   juiceDishArray.map((juice)  => {
    if (juice[0] === 23 || juice[0] === 24) {
      passer.push(juice)
    }
  })
 
  return (
   <OneDish passer={passer} />
  )
}

export default Page2