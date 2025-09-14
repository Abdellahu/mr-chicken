import OneDish from './OneDish';

function MainDish(props) {
  const passer = props.dish;
 
  return (
    <OneDish passer={passer} />
  )
}

export default MainDish