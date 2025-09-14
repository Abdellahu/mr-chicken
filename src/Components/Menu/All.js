import { useState } from 'react'
import {  ArrowLeft, ArrowRight } from 'react-bootstrap-icons'
import { Link } from 'react-router'
import Page1 from './Pages/Page1'
import Page2 from './Pages/Page2'
import Page3 from './Pages/Page3'


function All( props) { 
  const [page, setPage] = useState('page1')
   const [mainDishArray, fastingDishArray,mojitoDishArray, juiceDishArray, drinkDishArray, extraDishArray] = props.dish;
  
  const toPage1 = () => {
    setPage('page1')
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  const toPage2 = () => {
    setPage('page2')
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  const toPage3 = () => {
    setPage('page3')
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  const toLeft = () => {
    if(page==='page3'){
      setPage('page2')
      window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
    }
    if(page==='page2'){
      setPage('page1')
      window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
    }
  }
  const toRight = () => {
    if(page==='page1'){
      setPage('page2')
      window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
    }
    if(page==='page2'){
      setPage('page3')
      window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
    }
  }
  
  return (
    <div id='menu'>
     {page ==='page1'? <Page1 passer={mainDishArray} />: page==='page2'? <Page2 passer={[fastingDishArray, mojitoDishArray, juiceDishArray]} />: <Page3 passer={[juiceDishArray, drinkDishArray, extraDishArray]} />}
        <div className='pages'>
          <div className='pagesWraper'>
            <Link  onClick={toLeft }><ArrowLeft/></Link>
            <Link className={page==='page1'? 'best-one':''} onClick={toPage1}><p>1</p></Link>
            <Link className={page==='page2'? 'best-one':''} onClick={toPage2}><p>2</p></Link>
            <Link className={page==='page3'? 'best-one':''} onClick={toPage3}><p>3</p></Link>
            <Link onClick={toRight}><ArrowRight/></Link>
          </div>
        </div>
        </div>
  )
}

export default All