import OneDish from '../OneDish';

function Page2(props) {
  let [fastingDishArray, mojitoDishArray, juiceDishArray] = props.passer
  let passer = [];
  
   fastingDishArray.map((fast)  => {
    passer.push(fast)
  })
   mojitoDishArray.map((moji)  => {
    passer.push(moji)
  })
   juiceDishArray.map((juice)  => {
    if (juice[0] === 23 || juice[0] === 24) {
      passer.push(juice)
    }
  })
 
  return (
   <OneDish passer={passer} />
  )
}

export default Page2