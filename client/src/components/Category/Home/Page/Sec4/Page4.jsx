import React from 'react'
import style from './style.module.css';
import circle from '../../../../../assets/images/purplecircle.svg';
import but1 from '../../../../../assets/icons/but1.svg'
import but2 from '../../../../../assets/icons/but2.svg'
import but3 from '../../../../../assets/icons/but3.svg'
import person1 from '../../../../../assets/images/InsideBox/girl1black.png'
import person2 from '../../../../../assets/images/InsideBox/hr.jpeg'
import person3 from '../../../../../assets/images/InsideBox/person1ble.png'
import person4 from '../../../../../assets/images/InsideBox/person2red.png'
import person5 from '../../../../../assets/images/InsideBox/girl1whie.png'
const Page4 = () => {
  return (
    <div >
      <div className={style.container}>
            <div className={style.feature}>
        Our &nbsp; <p style={{  color: '#7290FA' }}>Features</p>
            </div>
        </div>
        <div className={style.container}>
        <p className={style.text1}>
        This very extraordinary feature, can make learning activities more efficient
        </p>
        </div> 
        <div className={style.WholeContainer}>  
              <div className={style.circleContainer}>
            <div className={style.Circle}>
            <img src={circle} alt="" />
            </div>
            <div className={style.overlayContent}>
              <div className={style.tabBar}>
                <img className={style.icons} src={but1} alt="" />
                <img className={style.icons} src={but2} alt="" />
                <img className={style.icons} src={but3} alt="" />
              </div>
              </div>
            <div className={style.BOX}>
              <div className={style.imageContainer}> 
                <img  src={person2} alt="" />
                <img   src={person1} alt="" />
                <img  src={person3} alt="" />
                <br />
                <img   src={person4} alt="" />
                <img   src={person5} alt="" />
              </div>    
                <button className={style.button1}>
                  Feedback
                </button>
            </div>
            <div className={style.eclipse}>
            <svg xmlns="http://www.w3.org/2000/svg" width="127" height="158" viewBox="0 0 127 158" fill="none">
              <ellipse cx="63.1772" cy="78.9649" rx="63.1772" ry="78.9649" fill="#33EFA0"/>
                          </svg>
              </div>        
      </div>

        <div className={style.leftSide}>
          <div className={style.text2}>
            A <p style={{
            color: '#7290FA',
            fontFamily: 'Poppins',
            fontSize: '40px',
            fontStyle: 'normal',
            fontWeight: '600',
            lineHeight: '160%',
          }}>user interface
            </p> designed for the classroom
          </div>
          <div className={style.list}>
            <div>
            <span className={style.customIcon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="30" viewBox="0 0 25 30" fill="none">
                      <rect x="0.0239258" y="0.366211" width="10.6663" height="13.3317" rx="2" fill="#2F327D"/>
                      <rect x="0.0239258" y="16.3645" width="10.6663" height="13.3317" rx="2" fill="#2F327D"/>
                      <rect x="13.3564" y="0.366455" width="10.6663" height="13.3317" rx="2" fill="#2F327D"/>
                      <rect x="13.3564" y="16.3645" width="10.6663" height="13.3317" rx="2" fill="#F48C06"/>
              </svg>
              <span className={style.text3}> &nbsp;&nbsp;&nbsp;&nbsp;
              Teachers don’t get lost in the grid view and have a dedicated Podium space.
              </span>
            </span>
            </div>
            <div>
            <span className={style.customIcon}>
             <svg xmlns="http://www.w3.org/2000/svg" width="26" height="30" viewBox="0 0 26 30" fill="none">
               <rect x="7.34082" y="7.01562" width="18.0506" height="22.5614" rx="2" fill="#2F327D"/>
             <rect x="0.120605" y="0.24707" width="19.1558" height="23.9427" rx="2" fill="#F48C06"/>
              </svg>
              <span className={style.text3}> &nbsp;&nbsp;&nbsp;&nbsp;
              And presenters can be moved to the front of the class.
              </span>
            </span>
            </div>
            <div>
            <span className={style.customIcon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="31" viewBox="0 0 28 31" fill="none">
  <g clipPath="url(#clip0_133_110)">
    <path d="M4.27916 13.6791C5.77257 13.6791 6.98676 12.035 6.98676 10.0129C6.98676 7.99072 5.77257 6.34665 4.27916 6.34665C2.78576 6.34665 1.57157 7.99072 1.57157 10.0129C1.57157 12.035 2.78576 13.6791 4.27916 13.6791ZM23.2323 13.6791C24.7257 13.6791 25.9399 12.035 25.9399 10.0129C25.9399 7.99072 24.7257 6.34665 23.2323 6.34665C21.7389 6.34665 20.5247 7.99072 20.5247 10.0129C20.5247 12.035 21.7389 13.6791 23.2323 13.6791ZM24.5861 15.5122H21.8785C21.1339 15.5122 20.4613 15.9189 19.9705 16.5777C21.6755 17.8437 22.8854 20.1294 23.1477 22.8447H25.9399C26.6887 22.8447 27.2937 22.0255 27.2937 21.0116V19.1784C27.2937 17.1563 26.0795 15.5122 24.5861 15.5122ZM13.7557 15.5122C16.3745 15.5122 18.494 12.6422 18.494 9.09632C18.494 5.55039 16.3745 2.68042 13.7557 2.68042C11.137 2.68042 9.01746 5.55039 9.01746 9.09632C9.01746 12.6422 11.137 15.5122 13.7557 15.5122ZM17.0049 17.3453H16.6537C15.7737 17.9182 14.7965 18.2619 13.7557 18.2619C12.715 18.2619 11.742 17.9182 10.8578 17.3453H10.5066C7.81596 17.3453 5.63296 20.3012 5.63296 23.9445V25.5943C5.63296 27.1124 6.54254 28.344 7.66366 28.344H19.8478C20.9689 28.344 21.8785 27.1124 21.8785 25.5943V23.9445C21.8785 20.3012 19.6955 17.3453 17.0049 17.3453ZM7.54097 16.5777C7.05022 15.9189 6.37755 15.5122 5.63296 15.5122H2.92537C1.43196 15.5122 0.217773 17.1563 0.217773 19.1784V21.0116C0.217773 22.0255 0.822752 22.8447 1.57157 22.8447H4.35955C4.62608 20.1294 5.83603 17.8437 7.54097 16.5777Z" fill="#2F327D"/>
  </g>
  <defs>
    <clipPath id="clip0_133_110">
      <rect width="27.0759" height="29.3298" fill="white" transform="translate(0.217773 0.847412)"/>
    </clipPath>
  </defs>
</svg>
              <span className={style.text3}> &nbsp;&nbsp;&nbsp;&nbsp;
              Teachers can easily see all students and class data at one time.
              </span>
            </span>
            </div>
          </div>
        </div>
          
        </div>
        </div>
  )
}

export default Page4