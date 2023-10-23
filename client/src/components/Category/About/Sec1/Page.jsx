import React from 'react'
import style from './style.module.css'
import left from '../../../../assets/images/AboutUS/1.png'
import right from '../../../../assets/images/AboutUS/2.png'
import left2 from '../../../../assets/images/AboutUS/4.png'
import pic1 from '../../../../assets/images/AboutUS/pic1.jpeg'
import pic2 from '../../../../assets/images/AboutUS/pic2.jpeg'
import pic3 from '../../../../assets/images/AboutUS/pic3.jpeg'
import pic4 from '../../../../assets/images/AboutUS/pic4.jpeg'
const Page = () => {
  return (
    <div className={style.Box}>
            <div className={style.side}>
                <img style={{marginTop:'-5%'}} height={'50%'} src={left2} alt="" />
                <img style={{marginTop:'55%'}} src={left} alt="" />
            </div>
            <div className={style.mid}>
                <div className={style.mid1}>
                    <img style={{borderRadius:'20px'}} width={'247px'} height={'239px'} src={pic1} alt="" />
                    <img style={{marginTop:'-8.5%',borderRadius:'20px'}} width={'278px'} 
                    height={'326px'} src={pic2} alt="" />
                      <div>
                      <p style={{color:'#1090CB',fontSize:'26px' }} >About us</p>
                        <h1>
                        Pioneering Progress with Drona.edu: One Click at a Time.
                        </h1>
                      </div>
                </div>
                <div className={style.mid1}>
                    <img style={{borderRadius:'20px'}} width={'500px'} height={'330px'} src={pic3} alt="" />
                    <img style={ {borderRadius:'20px'}} width={'518px'} height={'330px'} src={pic4} alt="" /> 
                </div>
            </div>
                <img src={right} alt="" />
    </div>
           
  )
}

export default Page