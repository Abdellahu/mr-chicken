import OneDish from '../OneDish';

function Page3(props) {
    let [juiceDishArray, drinkDishArray, extraDishArray] = props.passer
    const passer = []
  juiceDishArray.map((juice)  => {
    if (juice[0] !== 23 && juice[0] !== 24) {
      passer.push(juice)
    }
  })
    drinkDishArray.map((drink)  => {
    passer.push(drink)
  })
   extraDishArray.map((extra)  => {
    passer.push(extra)
  })
  
  return (
    <OneDish passer={passer} />
  )
}

export default Page3