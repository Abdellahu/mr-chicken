import OneDish from "./OneDish";

function Juice(props) {
  const passer = props.dish;
   
  return (
    <OneDish passer={passer} />
  )
}

export default Juice