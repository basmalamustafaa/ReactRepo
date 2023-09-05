import React, { Component } from 'react'
import SearchBar from '../SearchBar/SearchBar';

export default class FruitsVeg extends Component {
    state={
        products :[
            { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
            { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
            { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
            { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
            { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
            { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
        ],
        searchQuery:"",
        inStockOnly: false,
    }
    handleSearch = (event,category) => {
         this.setState({ searchQuery: event.target.value });
        }
        handleInStockOnlyChange = (event) => {
            this.setState({ inStockOnly: event.target.checked });
          }
        
    

    renderProducts= (category)=>{ 
         return this.state.products.map((product,index)=> {
        if(product.category===category){
            return(
                <div key={index}>
                   <p>{product.stocked?<span style={{ color: 'black' }}>{product.name}</span> : <span style={{ color: 'red' }}>{product.name}</span>} {product.price}</p>
                   <p></p>
                </div>
            )}
        return null;
    })
    }
    
    renderSearchedProducts = (category) => {
        return this.state.products.map((product, index) => {
          if (product.category===category && product.name.toLowerCase().includes(this.state.searchQuery.toLowerCase())) {
            return (
              <div key={index}>
                <p>
                  {product.stocked ? (
                    <span style={{ color: 'black' }}>{product.name}</span>
                  ) : (
                    <span style={{ color: 'red' }}>{product.name}</span>
                  )} {product.price}
                </p>
              </div>
            );
          }
          return null;
        });
      }
   
      renderFilteredProducts = (category) => {
        return this.state.products.map((product, index) => {
          if (product.category===category && product.name.toLowerCase().includes(this.state.searchQuery.toLowerCase()) && product.stocked) {
            return (
              <div key={index}>
                <p>
                  {product.stocked ? (
                    <span style={{ color: 'black' }}>{product.name}</span>
                  ) : (
                    <span style={{ color: 'red' }}>{product.name}</span>
                  )} {product.price}
                </p>
              </div>
            );
          }
          return null;
        });
      }
  render() {
    return (
      <div>
        <SearchBar onSearch={this.handleSearch} />
        <label>
        <input 
          type="checkbox" 
          checked={this.state.inStockOnly}
            onChange={this.handleInStockOnlyChange}/>
        {' '}
        Only show products in stock
      </label>
        <h2>Fruits</h2>
        {this.state.searchQuery ? this.renderSearchedProducts("Fruits") : this.state.inStockOnly ? this.renderFilteredProducts("Fruits") : this.renderProducts("Fruits")}
        
        <h2>Vegetables </h2>
        {this.state.searchQuery ? this.renderSearchedProducts("Vegetables") : this.state.inStockOnly ? this.renderFilteredProducts("Vegetables") : this.renderProducts("Vegetables")}
      </div>
    )
  }
}
