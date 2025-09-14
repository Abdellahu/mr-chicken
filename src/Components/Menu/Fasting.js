import  { useContext } from "react";
import { DishContext } from "./Menu";
import OneDish from "./OneDish";

function Fasting(props) {
  // const passerer = useContext(DishContext)
  const passer = props.dish;
   
  return (
    <OneDish passer={passer} />
  )
}

export default Fasting