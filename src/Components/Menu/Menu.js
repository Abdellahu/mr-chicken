import  { useEffect, useRef, useState, createContext } from 'react'
import './Menu.css'
import {  MenuUp } from 'react-bootstrap-icons'
import { Link } from 'react-router'
import All from './All'
import MainDish from './MainDish'
import Fasting from './Fasting'
import Mojito from './Mojito'
import Juice from './Juice'
import Drink from './Drink'
import Extra from './Extra'
import { useTheme } from "./../Header/Brightness";
import Dri1 from './../Images/dri1.webp'
import Dri2 from './../Images/dri2.webp'
import Dri3 from './../Images/dri3.webp'
import Ext1 from './../Images/ext1.webp'
import Ext2 from './../Images/ext2.webp'
import Ext3 from './../Images/ext3.webp'
import Fas1 from './../Images/fas1.webp'
import Fas2 from './../Images/fas2.webp'
import Fas3 from './../Images/fas3.webp'
import Fas4 from './../Images/fas4.webp'
import Fas5 from './../Images/fas5.webp'
import Fas6 from './../Images/fas6.webp'
import Fas7 from './../Images/fas7.webp'
import Fas8 from './../Images/fas8.webp'
import Ju1 from './../Images/ju1.webp'
import Ju2 from './../Images/ju2.webp'
import Ju3 from './../Images/ju3.webp'
import Ju4 from './../Images/ju4.webp'
import Ju5 from './../Images/ju5.webp'
import Ju6 from './../Images/ju6.webp'
import Main1 from './../Images/main1.webp'
import Main2 from './../Images/main2.webp'
import Main3 from './../Images/main3.webp'
import Main4 from './../Images/main4.webp'
import Main5 from './../Images/main5.webp'
import Main6 from './../Images/main6.webp'
import Main7 from './../Images/main7.webp'
import Main8 from './../Images/main8.webp'
import Main9 from './../Images/main9.webp'
import Main10 from './../Images/main10.webp'
import Main11 from './../Images/main11.webp'
import Main12 from './../Images/main12.webp'
import Moj1 from './../Images/moj1.webp'
import Moj2 from './../Images/moj2.webp'

export let DishContext = createContext() 
 
function Menu() {
  const { theme } = useTheme()
  const menuRef = useRef(null)
  const [type, setType] = useState("all")
  const [groupedDishes, setDroupedDishes] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const toAll = () =>{
    setType('all')
  }
  const toMain = () =>{
    setType('main')
  }
  const toFasting = () =>{
    setType('fasting')
  }
  const toMojito = () =>{
    setType('mojito')
  }
  const toJuice = () =>{
    setType('juice')
  }
  const toDrink = () =>{
    setType('drink')
  }
  const toExtra = () =>{
    setType('extra')
  }


 
  
  useEffect(() => {
   if(menuRef.current) {
     menuRef.current.scrollIntoView({
       behavior: 'smooth', 
       block: 'start'
     })
   }
  }, [])
   
     const mainDishArray =  [
                     [1, "Main Dish", "Mr. Chicken Special", "A hearty, flavor-packed feast that lives up to its name! Juicy, golden-fried chicken seasoned to perfection.", "1,990", Main1, "p1" ], 
                     [2, "Main Dish", "Special Shawarma", "A bold twist on a classic favorite! Tender, marinated meat—grilled to juicy perfection—wrapped in warm.", "630", Main2, "p1" ], 
                     [3, "Main Dish", "Half Grill", "Perfectly grilled half chicken, marinated in a blend of bold spices and slow-cooked to lock in flavor and tenderness. ", "1,250", Main3, "p1" ], 
                     [4, "Main Dish", "Full Wing", "A full serving of crispy, golden-brown chicken wings—marinated in our signature spices and fried or grilled to perfection. ", "1,020", Main4, "p1" ], 
                     [5, "Main Dish", "Half Roasted", "Succulent half chicken, slow-roasted to perfection with a rich blend of herbs and spices. ", "1,420", Main5, "p1" ], 
                     [6, "Main Dish", "Crispy Fried Chicken Full", "A whole roasted chicken masterpiece—marinated in our signature blend of spices and slow-roasted until golden.", "2,120", Main6, "p1" ], 
                     [7, "Main Dish", "Mr chicken full Roast", "Perfectly seasoned, golden-fried, and irresistibly crunchy. Juicy on the inside.", "1,300", Main7, "p1" ], 
                     [8, "Main Dish", "Crispy Fried Chicken Half", "Crispy Fried Chicken Halfightly battered, perfectly seasoned, and fried to golden perfection.", "900", Main8, "p1" ], 
                     [9, "Main Dish", "Full Grill", "Expertly marinated chicken, flame-grilled to perfection with a smoky, charred finish and bursting with bold.", "1,750", Main9, "p1" ], 
                     [10, "Main Dish", "Half Wing", "Half Wing", "750", Main10, "p1" ], 
                     [11, "Main Dish", "Normal Shawarma", "Normal Shawarma", "520", Main11, "p1" ], 
                     [12, "Main Dish", "Chicken Biryani", "Fragrant rice loaded with spiced chicken.", "1,090", Main12, "p1" ]
                    ]   
     const fastingDishArray =  [
                     [13, "Fasting", "Vegetable wrap", "A wholesome wrap stuffed with fresh vegetables and tangy sauces, ideal for a light and nutritious option.", "410", Fas1, "p2" ], 
                     [14, "Fasting", "Mixed Salad", "A vibrant combination of fresh vegetables, lightly dressed for a healthy side or main.", "400", Fas2, "p2" ], 
                     [15, "Fasting", "Fasting Burger", "A burger crafted with fasting-friendly ingredients like veggie or fish patty, perfect during fasting seasons.", "365", Fas3, "p2" ], 
                     [16, "Fasting", "Burrito", "A savory wrap with rice, veggies, and fasting-friendly protein—hearty and flavorful.", "820", Fas4, "p2" ], 
                     [17, "Fasting", "Felafel wrap", "Crunchy falafel balls with fresh french fries, rolled in soft flatbread.", "390", Fas5, "p2" ], 
                     [18, "Fasting", "Tuna rice", "Steamed rice served with seasoned tuna—filling, tasty, and fasting-friendly.", "590", Fas6, "p2" ], 
                     [19, "Fasting", "Tuna salad", "A refreshing mix of tuna, crisp greens, and dressing—a light yet protein-packed dish", "590", Fas7, "p2" ], 
                     [20, "Fasting", "Felafel Plate", "Hearty falafel served with fresh sides.", "390", Fas8, "p2" ] 
                    ]   
     const mojitoDishArray =  [
                     [21, "Mojito", "Lemon Mint Mojito", "Bright and super refreshing.", "220", Moj1, "p2" ], 
                     [22, "Mojito", "Strawberry Mojito", "Sweet, fruity, and fresh.", "250", Moj2, "p2" ], 
                    ]   
     const juiceDishArray =  [
                     [23, "Juice", "Mr. Chicken Special Juice", "A refreshing, fruity explosion.", "415", Ju1, "p2" ], 
                     [24, "Juice", "Mango Juice", "Sweet, tropical mango magic.", "380", Ju2, "p2" ], 
                     [25, "Juice", "Watermelon Juice", "Crisp, juicy, and thirst-quenching.", "240", Ju3, "p3" ], 
                     [26, "Juice", "Honey Carrot & Ginger Juice", "Sweet with a spicy kick.", "330", Ju4, "p3" ], 
                     [27, "Juice", "Strawberry Smoothie", "Creamy, dreamy strawberry bliss.", "380", Ju5, "p3" ], 
                     [28, "Juice", "Cucumber Juice", "Cool, clean, and ultra-refreshing.", "220", Ju6, "p3" ], 
                    ] 
     const drinkDishArray =  [
                     [29, "Drink", "Ambo Water", "Sparkling mineral water from Ethiopia—crisp and revitalizing.", "50", Dri1, "p3" ], 
                     [30, "Drink", "Soft Drink Bottle", "Bottled soft drinks for bigger servings and on-the-go enjoyment.", "70", Dri2, "p3" ], 
                     [31, "Drink", "Soft Drink", "Your choice of classic fizzy beverages—great with any meal.", "50", Dri3, "p3" ], 
                    ] 
     const extraDishArray =  [
                     [32, "Extra", "Extra Rices", "A larger helping of seasoned rice—perfect if you're extra hungry.", "250", Ext1, "p3" ], 
                     [33, "Extra", "Extra Pita", "Additional pita bread to scoop, wrap, or enjoy with dips.", "40", Ext2, "p3" ], 
                     [34, "Extra", "Extra Spice", "Add an extra portion of spice to your dish.", "75", Ext3, "p3" ], 
                    ] 
  
  return (
    // <DishContext.Provider value={dishArray}>
      <div ref={menuRef} className={theme==='dark'? 'menuCom toDim': 'menuCom'} >
        <div className='container'>
  
          <div className='discover'>
            <div className='our-manu'>
              <div className='our-logo'>
              <MenuUp />
              </div>
              <p className='our-text'>Our Menu</p>
            </div>
            <div >
              <p className='bold-discover'>Discover Our Selection</p>
            </div>
            <div>
              <p  className='simple-text'>Exquisite dishes designed to elevate your dining experiance.</p>
            </div>
          </div>

          <div className='searchMenu'>
            <div className='searchMenuWraper row'>
              <div className='searchPart col-md-6 col-xl-4'>
                <input type='search' className='searchBar' placeholder='Search dishes...'/>
              </div>
              <div className='dishesWraper col-md-6 col-xl-7'>
                <Link className={type==='all'? 'best-one': ''}   onClick={toAll} >All</Link>
                <Link className={type==='main'? 'best-one':''}   onClick={toMain} >Main Dish</Link>
                <Link className={type==='fasting'? 'best-one': ''}  onClick={toFasting} >Fasting</Link>
                <Link className={type==='mojito'? 'best-one': ''}   onClick={toMojito} >Mojito</Link>
                <Link className={type==='juice'? 'best-one':''}  onClick={toJuice} >Juice</Link>
                <Link className={type==='drink'? 'best-one':''}   onClick={toDrink} >Drink</Link>
                <Link className={type==='extra'? 'best-one':''}   onClick={toExtra} >Extra</Link>
              </div>
            </div>
          </div>
        <div>
          
            <div>
                {type==='all'?<All dish={[mainDishArray, fastingDishArray,mojitoDishArray, juiceDishArray, drinkDishArray, extraDishArray] }/>: type==='main'? <MainDish dish={mainDishArray} />:type==='fasting'? <Fasting dish={fastingDishArray} />: type==='mojito'? <Mojito dish={mojitoDishArray}/>: type==='juice'?<Juice dish={juiceDishArray} />: type==='drink'?<Drink dish={drinkDishArray} />: <Extra dish={extraDishArray} />}
            {/* <MainDish dish={mainDishArray} /> */}
            {/* type==='all'?<All />:  type==='drink'? : <Extra /> */}
            </div>
            
        </div> 
        </div> 
      </div>
    // </DishContext.Provider>
  )
}

export default Menu