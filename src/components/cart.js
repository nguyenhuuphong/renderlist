import React, { Component } from 'react';
import Variants from './variants';



class Cart extends Component {
    render() {
        return (

            <div className='cart'>

                <img src={this.props.items.image.src} alt='image' />
                <p><strong>Title:</strong> {this.props.items.title}</p>

                <p><strong>Variants:</strong> {this.props.items.variants.map((item) => <Variants abc={item} />)} </p>



            </div>
        )
    }
}

export default Cart;