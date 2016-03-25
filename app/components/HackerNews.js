import React from 'react';
import helpers from '../utils/HNHelpers';
import ItemList from './TopStories/ItemList';

class HackerNews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    helpers.fetchTopStories((stories) => {
      this.setState({
        items: stories
      })
    });
  }

  render() {
    return (
      <ItemList items={this.state.items} />
    )
  }
}

export default HackerNews;
