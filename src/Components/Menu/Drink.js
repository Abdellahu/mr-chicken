import OneDish from './OneDish';

function Drink(props) {
  const passer = props.dish;
 
  return (
    <OneDish passer={passer} />
  )
}

export default Drink