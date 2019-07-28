import React, { Component } from 'react';
import FoodImage from '../components/FoodImage/FoodImage';

class Food extends Component {
    render() {
        return (
            <div>
                <h1>The Food</h1>
                <FoodImage />
            </div>
        );
    }
}

export default Food;