import React from 'react'
import style from './style.module.css'
import SearchBar from '../SEARCH LOGIC/SearchBar'
import help from './help.png'
const Help = () => {
  return (
    <div className={style.BOX}>
        <div className={style.FBox}>
            <div style={{marginTop:'6%'}}>
            <h1 style={{fontFamily:'Sanchez'}}>
            How can we help?
            </h1>
                <SearchBar text={" 🔍 search the knowledge base..."}/>
                <p className={style.text}>
                Popular help topics: web , android , ml
                </p>
            </div>
                    <img height={'480px'} src={help} alt="" />
        </div>
        <div>

        </div>
    </div>
  )
}

export default Help