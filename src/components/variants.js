import { Component } from 'react';
import '../App.css';

class Variants extends Component{
 render(){
        return(     
            <div className='subCart'>
                <span class='price'>Price: <strong>{this.props.abc.price }</strong></span> <br></br>
                <span>Inventory_management: <strong>
                    {this.props.abc.inventory_management ? this.props.abc.inventory_management : 'unlimited' }</strong></span>  <br></br> 
                <span>Inventory_policy: <strong>{this.props.abc.inventory_policy}</strong> </span> <br></br>
                <span>Inventory_quantity: <strong>{this.props.abc.inventory_quantity}</strong> </span> <br></br>
                         
            </div>     
                
        )
        }
}
export default Variants;