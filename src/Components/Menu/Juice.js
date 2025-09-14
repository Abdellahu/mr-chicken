import  { useContext } from "react";
import { DishContext } from "./Menu";
import OneDish from "./OneDish";

function Juice(props) {
  // const passerer = useContext(DishContext)
  const passer = props.dish;
   
  return (
    <OneDish passer={passer} />
  )
}

export default Juice