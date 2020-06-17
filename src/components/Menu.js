import React from 'react';
import Burger from '../resources/burger.png'
import Pizza from '../resources/pizza.png'
import Fries from '../resources/fries.png'
import Cupckae from '../resources/cupcake.png'
import Sandwich from '../resources/sandwich.png'
import Spaghetti from '../resources/spaghetti.png';
import Brush from '../resources/Brush_1_.png';

function Menue() {
    const greeting = 'Menue Component!';

    return (
        <div>
            <div class="Want-To-Eat" >Want To Eat?</div>

            <div className="Brush_1_">
                <img src={Brush} alt="Snow" alt="Hot Burger"  />
            </div>

            <div class="TryOut" >Try our Most Delicious food and it usually take minutes to deliver!</div>

        <div class="row">
            <div class="column">
                <img src={Burger} alt="Snow" alt="Hot Burger" width="100" height="100" />
            </div>
            <div class="column">
                <img src={Pizza} alt="Snow" alt="Hot Burger" width="100" height="100" />
            </div>
            <div class="column">
                <img src={Fries} alt="Snow" alt="Hot Burger" width="100" height="100" />
            </div>
            <div class="column">
                <img src={Cupckae} alt="Snow" alt="Hot Burger" width="100" height="100" />
            </div>
            <div class="column">
                <img src={Sandwich} alt="Snow" alt="Hot Burger" width="100" height="100" />
            </div>
            <div class="column">
                <img src={Spaghetti} alt="Snow" alt="Hot Burger" width="100" height="100" />
            </div>
        </div>

        </div>
    );
}



export default Menue;