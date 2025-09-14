import OneDish from './OneDish';

function Mojito(props) {
  const passer = props.dish;
 
  return (
    <OneDish passer={passer} />
  )
}

export default Mojito