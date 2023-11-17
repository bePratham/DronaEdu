import React from 'react'
import style from './style.module.css'
import ReactangleBox from './ReactangleBox'

const Page = () => {
  return (
    <div style={{marginTop:'5%'}}>
        <h1 >
        About Course
        </h1>
        <p className={style.text1}>
        Blockchain is a shared, immutable ledger that facilitates the process of recording 
        transactions and tracking assets in a business network. An asset can be tangible 
        (a house, car, cash, land) or intangible (intellectual property, patents, copyrights, branding).
         Virtually anything of value can be tracked and traded on a blockchain network, reducing risk and cutting costs for all involved.
        </p>
        <h1>
        Course Structure
        </h1>
        <div style={{display:'flex',flexDirection:'column', alignItems:'center'}}>
            <ReactangleBox/>
            <ReactangleBox/>
            <ReactangleBox/>
            <button  className={style.button}>
                View More
            </button>
        </div>
    </div>
  )
}

export default Page