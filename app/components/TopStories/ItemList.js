import React from 'react';
import TimeAgo from 'react-timeago';

class ItemList extends React.Component {
  render() {
    return (
      <div className="mdl-tabs__panel is-active mdl-grid" id="hacker-news-panel">
        {this.props.items.length == 0 && <center><div className="mdl-spinner mdl-js-spinner is-active"></div></center>}

        <ol className="hacker-news-top-story-list mdl-cell--4-col mdl-cell--4-offset">
          {this.props.items.map((item, index) => (
            <li key={index}>
              <a href="#" className="hacker-news-title">{item.title}</a>
              <span><i className="material-icons">thumb_up</i>{item.score}</span>
              <span><i className="material-icons">comment</i>{item.descendants}</span>
              <span><i className="material-icons">access_time</i><TimeAgo date={item.time} /> by <a href="#">viach</a></span>
            </li>
          ))}
        </ol>
      </div>
    )
  }
}

export default ItemList;
