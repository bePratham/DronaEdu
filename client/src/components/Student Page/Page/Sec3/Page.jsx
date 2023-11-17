import React from 'react'
import style from './style.module.css'
import shapes from '../../../../assets/images/shapes.png'
import leanmore from '../../../../assets/images/Learn More.png'
import SmallBox from './SmallBox'
import { Link } from 'react-router-dom'
import live from '../../../../assets/icons/Live.png'
import access from '../../../../assets/icons/1.png'
import well from '../../../../assets/icons/2.png'
import certificate from '../../../../assets/icons/3.png'
const Page = () => {
  return (
    <div className={style.Container}>
  <div className={style.InsideContainerFirst}>
    <div className={style.program}>
      <p className={style.text1}>
        Why You Choose Our Program
      </p>
      <div className={style.contentContainer}>
        <img
          style={{
            width: '219px',
            height: '251.154px',
          }}
          src={shapes}
          alt=""
        />
        <Link to="/about" className={style.learnMoreLink}>
          <img src={leanmore} alt="" />
        </Link>
      </div>
    </div>
    <SmallBox pic={live} Text={"Live Classes"}/>
  </div>
          <div className={style.SecondContainer}>
            <SmallBox pic={access} Text={"Access Anywhere"}/>
            <SmallBox pic={well} Text={"Well Organized"}/>
            <SmallBox pic={certificate} Text={"Certification"}/>
          </div>
</div>

  )
}

export default Page