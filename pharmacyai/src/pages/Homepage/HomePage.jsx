import React from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct'

import { WrapperButtonMore, WrapperProduct, WrapperTypeProduct } from './style'
import SliderComponents from '../../components/SliderComponents/SliderComponents'
import slide1  from '../../assets/img/slide1.png'
import slide2  from '../../assets/img/slide2.png'
import slide3  from '../../assets/img/slide3.png'
import slide4  from '../../assets/img/slide4.png'
import slide5 from '../../assets/img/slide5.png'
import slide6  from '../../assets/img/slide6.png'
import slide7 from '../../assets/img/slide7.png'
import CardComponent from '../../components/CardComponents/CardComponent'
import NavBarComponent from '../../components/NavBarComponents/NavBarComponent'
import ButtonComponent from '../../components/ButtonComponents/ButtonComponent'
import thuochome from '../../assets/img/thuocjpg.jpg'


const HomePage = () => {
  const arr = ['TPCN', 'TBYT', 'DMP', 'CSCN']
  return (
    <>
       <div style={{ width:'1270px', margin:'0 auto' }}>
      <WrapperTypeProduct>
       {arr.map((item) => {
         return (
           <TypeProduct name={item} key={item} />
         )
       }
          )}
        
        </WrapperTypeProduct>
        </div>
      <div className='body' style={{width: '100%', background:'#efefef'}}>
        <div className="container" style={{height:'1000px', width: '1270px', margin:'0 auto'}}>
          <SliderComponents arrImages={[slide1, slide2, slide3, slide4, slide5, slide6, slide7]} />
          <WrapperProduct>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent/>
          </WrapperProduct>
          <div style={{width: '100%', display:'flex', justifyContent:'center', marginTop:'10px',}}>
            <WrapperButtonMore textButton="Xem Thêm" type="outline" styleButton={{
              border: '1px solid #4cb551',
              color: '#4cb551 ',
              width: '240px', height: '38px', borderRadius: '4px'

            }}
              styleTextButton={{ fontWeight: 500 }} />
          </div>
        </div>
      </div>
    
    </>
  )
}

export default HomePage