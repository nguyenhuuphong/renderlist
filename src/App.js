import './App.css';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import Cart from './components/cart';

class App extends Component {
  constructor(props){
    super(props);
    this.state =
      { "searchValue": '',

        "products": [
          {
            "handle": "ega-botconn",
            "id": 1,
            "title": "egaBotConn",
            "vendor": "EGANY",
            "tags": "platform__cross-platform, type__apps, doc__ega-botconn, demo__https://egany.com",
            "image": {
              "id": 11,
              "src": "https://picsum.photos/id/14/600"
            },
            "variants": [
              {
                "id": 111,
                "sku": "egabotconn",
                "price": "0",
                "compare_at_price": "0",
                "inventory_management": null,
                "inventory_policy": "deny",
                "inventory_quantity": 1
              }
            ]
          },
          {
            "handle": "ega-shop",
            "id": 2,
            "title": "egaShop",
            "vendor": "EGANY",
            "tags": "platform__haravan_sapo_cross-platform, type__apps, doc__ega-shop, demo__https://egany.com",
            "image": {
              "id": 22,
              "src": "https://picsum.photos/id/15/600"
            },
            "variants": [
              {
                "id": 222,
                "sku": "egashop",
                "price": "149000",
                "compare_at_price": "199000",
                "inventory_management": null,
                "inventory_policy": "deny",
                "inventory_quantity": 1
              }
            ]
          },
          {
            "handle": "ega-countdown",
            "id": 3,
            "title": "egaCountdown",
            "vendor": "EGANY",
            "tags": "platform__haravan_cross-platform, type__apps, doc__ega-countdown, demo__https://egany.com",
            "image": {
              "id": 33,
              "src": "https://picsum.photos/id/16/600"
            },
            "variants": [
              {
                "id": 333,
                "sku": "egabotconn",
                "price": "99000",
                "compare_at_price": "149000",
                "inventory_management": "manual",
                "inventory_policy": "allow",
                "inventory_quantity": 0
              }
            ]
          },
          {
            "handle": "ega-salebox",
            "id": 4,
            "title": "egaSaleBox",
            "vendor": "EGANY",
            "tags": "platform__haravan_cross-platform, type__apps, doc__ega-salebox, demo__https://egany.com",
            "image": {
              "id": 44,
              "src": "https://picsum.photos/id/14/600"
            },
            "variants": [
              {
                "id": 444,
                "sku": "egasalebox",
                "price": "99000",
                "compare_at_price": "149000",
                "inventory_management": "manual",
                "inventory_policy": "allow",
                "inventory_quantity": -1
              }
            ]
          },
          {
            "handle": "ega-cro",
            "id": 5,
            "title": "egaCRO",
            "vendor": "EGANY",
            "tags": "platform__haravan_cross-platform_sapo, type__apps, doc__ega-salebox, demo__https://egany.com",
            "image": {
              "id": 55,
              "src": "https://picsum.photos/id/14/600"
            },
            "variants": [
              {
                "id": 555,
                "sku": "egasalebox",
                "price": "99000",
                "compare_at_price": "149000",
                "inventory_management": null,
                "inventory_policy": "deny",
                "inventory_quantity": 10
              }
            ]
          }
        ]
          }  
        }
  
  handleChange = (e)=> {
       this.setState({
         searchValue: e.target.value
       })
    }
  findItem = (e) =>{
    console.log(this.state.searchValue)
    const searchValue = this.state.searchValue; 
            
    const data = [...this.state.products];
  if(searchValue){
    const data = this.state.products.filter(item =>
        item.title.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1)}
    
      this.setState({
        products: data
      })

  }      
  render() {
  return (
    <div className="App">
      <div><Navbar /></div>
      
      <form class='input' >
            <input type='text' placeholder="input keyword"
              onChange={this.handleChange}
              value={this.state.searchValue}
            />
            <button onSubmit={this.findItem} type='submit'>search</button>
        </form>



      <div className='bg'>
     {
       this.state.products.map((item) => <Cart items={item} />)
     }
     </div>
    </div>
  );
}
}
export default App;
