import style from './Footer.module.css';
import Icons from './Icons';
import Drona from '../../assets/images/Drona.png'
import YourComponent from './ImportantNavigation';
const FooterFlow = () => {
    return <div>
        <div className={style.container}>
            <div className={style.first}>
            <img src={Drona} alt="" />
                <Icons/>
            </div>
            <div className={style.middle}>
            <YourComponent/>
            </div>        
            <div style={{flex: 1, height: '1px',
                marginTop:'30px',marginLeft:'70px',
                width:'1103.25px', backgroundColor: '#3A3C56'}} /> 
                <div className={style.lastpart}>
                    <a href="">Terms of Use</a>
                    <a href="">Privacy Policy</a>
                    </div>  
        </div>
  </div>
};

export default FooterFlow;
