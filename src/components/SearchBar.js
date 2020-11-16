import React, { Component } from 'react';

class SearchBar extends Component {
  state = { text: '' };

  onFormSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.text);
  };

  render() {
    return (
      <div className='ui segment'>
        <form onSubmit={this.onFormSubmit} className='ui form'>
          <div className='field'>
            <label>SearchBar</label>
            <input
              type='text'
              value={this.state.text}
              onChange={e => this.setState({ text: e.target.value })}
              placeholder='Search...'
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
