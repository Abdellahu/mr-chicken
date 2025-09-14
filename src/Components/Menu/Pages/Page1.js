import { useContext } from 'react'
import { DishContext } from "./../Menu";
import OneDish from '../OneDish';

function Page1(props) {
  // const passerer = useContext(DishContext)
  const passer = props.passer;
 
  return (
    <OneDish passer={passer} />
  )
}

export default Page1