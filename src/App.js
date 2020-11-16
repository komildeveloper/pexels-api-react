import React, { Component } from 'react';
import pexels from './api/pexels';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';

class App extends Component {
  state = { photos: [] };

  onSearchSubmit = async text => {
    const response = await pexels.get('/v1/search', {
      params: {
        query: text,
        per_page: 80,
        page: 1
      }
    });

    this.setState({ photos: response.data.photos });
  };

  render() {
    return (
      <div className='ui container' style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.photos} />
      </div>
    );
  }
}

export default App;
