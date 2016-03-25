import Firebase from 'firebase';

const api = new Firebase('https://hacker-news.firebaseio.com/v0');

const fetchItem = (id) => {
  return api.child('item/' + id).once('value');
}

const fetchTopStories = (cb) => {
  api.child('topstories').once('value').then((data) => {
    return Promise.all(data.val().slice(0, 20).map((id) => {
      return fetchItem(id);
    }));
  }).then((stories) => {
    cb(stories.map((story, index) => {
      return story.val();
    }));
  }).catch((err) => {
    console.log(err)
  });
}

module.exports = {
  fetchTopStories
};
