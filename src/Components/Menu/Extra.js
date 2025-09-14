import OneDish from "./OneDish";

function Extra(props) {
  const passer = props.dish
 

  return (
    <OneDish passer={passer} />
  );
}

export default Extra;
