import OneDish from "./OneDish";

function Fasting(props) {
  const passer = props.dish;
   
  return (
    <OneDish passer={passer} />
  )
}

export default Fasting