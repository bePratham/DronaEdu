import React from 'react'
import style from './style.module.css'
import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';
import group from './group.svg'
import one from './one.svg'
const BuyOrWatch = () => {
  return (
    <Popup trigger={<button className={style.button}> Buy Course</button>} modal nested>
    <div className={style.Box}>
            <div className={style.card}>
                    <img width={'125px'}src={group} alt="" />
                    <h2>
                        Group
                    </h2>
                    <p>
                        100rs/hr
                    </p>
            </div>
            <div className={style.card}>
                <img  width={'125px'} src={one} alt="" />
                <h2>
                    1 on 1
                </h2>
                <p>
                    200rs/hr
                </p>
            </div>
        </div>
      </Popup>
  )
}

export default BuyOrWatch