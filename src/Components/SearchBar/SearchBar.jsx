// SearchBar.js
import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Search products..."
          onChange={this.props.onSearch}
        />
      </div>
    );
  }
}

export default SearchBar;