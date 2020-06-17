import React, { Component } from "react";
import HotBurger from '../resources/hotBurger.png'
import buyburger from '../resources/BuyBurgerBg.png';
import OrderNow from '../resources/OrderNow.png';
import sidebutton from '../resources/Group 1307.png'
import sidebuttonleft from '../resources/sidebuttonleft.png';
import BackGroundImage from '../resources/bgImage.png';

class Home extends Component {




    render() {
        return (
            <div style={{
                backgroundImage: `url(${BackGroundImage})`, position: 'fixed',
                top: 50,
                height: '100%',
                width: '100%',
                backgroundSize: 'cover',
              }}>
                <img src={HotBurger} alt="Hot Burger" width="140" height="90" style={{ position: 'absolute', left: '10%', top: '10%' }} />
                <div>
                    <h1 style={styles.partyTime}>Party Time!</h1>
                </div>

                <div style={styles.container} >
                    <img src={buyburger} alt="Hot Burger" width="394" height="120" style={{ width: '40%' }} />

                    <div style={styles.centered}>Buy any 2 burgers and get 1.5L Pepsi Free</div>
                </div>

                {/* <button class="btn"><span style={styles.buttonIcon}></span>order now</button> */}
                {/* <div class="btn btn_red"><span style={styles.buttonIcon}></span><a href="#">order now</a><span></span></div> */}

                <div style={styles.container} >
                    <img src={OrderNow} alt="Hot Burger" width='110' style={{marginTop: 18,marginLeft: 45}} />

                    <div style={styles.centered}>order now</div>
                </div>
                       <img src={sidebutton} alt="Hot Burger" width='10' style={{marginTop: 18,marginRight: 45, float: "right"}} />
                       <img src={sidebuttonleft} alt="Hot Burger" width='10' style={{marginTop: 18,marginleft: 145, float: "left"}} />
            </div>


        )
    }
}



const styles = {
    partyTime: {
        height: 38.5,
        fontFamily: 'Montserrat',
        fontSize: 55,
        fontWeight: 'bold',
        textAlign: 'left',
        top: '15%',
        marginTop: '10%',
        marginLeft: '15%',
        color: 'white'
    },
    centered: {
        position: 'absolute',
        top: '40%',
        // left: '40%',
        marginLeft: '5%',
        width: 190,
        fontFamily: 'Montserrat',
        fontWeight: 'bold',
        // transform: [{translateY:'-50%',translateX: '-50%'}],
    },

    container: {
        position: 'relative',
        textAlign: 'left',
        color: 'white',
        marginLeft: '15%',
    },
    buttonIcon:{
        background: `url(${OrderNow}) no-repeat`,
    float: 'left',
    width: 140,
    height: 40,
    },

    side:{
        float: 'right',
    }
    // btnspanicon {
    //     background: url(imgs/icon.png) no-repeat;
    //     float: left;
    //     width: 10px;
    //     height: 40px;
    // }


}

export default Home;
