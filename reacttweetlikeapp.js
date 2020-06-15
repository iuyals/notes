//whtich data in store?
//react redux to solve: Propagation of props;Ensuring consistency and predictability of the state across the app.


//create action
export function setAuthedUser (id) {
    return {
      type: SET_AUTHED_USER,
      id,
    }
  } 
//receiveUser and receiveTweets similar to this

//get initial data then dispatch action
const AUTHED_ID = 'tylermcginnis'

export function handleInitialData () {
  return (dispatch) => {
    return getInitialData()
      .then(({ users, tweets }) => {
        dispatch(receiveUsers(users))
        dispatch(receiveTweets(tweets))
        dispatch(setAuthedUser(AUTHED_ID))
      })
  }
} 
//this action creator func should in action foder

//A Reducer describes how an application's state changes
(previousState, action) => newState

function tweets (state = {}, action) {
}//set default state
//have a tweets to manage the tweets slice of the state, a users reducer to manage the users slice of the state, and an authedUser reducer to manage the authedUser portion of the state. Each of these reducers will manage just its own part of the state.
//in reducer foder
combineReducers({
    authedUser: authedUser,
    tweets: tweets,
    users: users
  });


  //install react-redux
  yarn add react-redux redux
  //index.js
  import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}> //hook store here
    <App />
  </Provider>,
document.getElementById('root')
) 

//add thunk
yarn add redux-thunk
//All middleware follows this currying pattern:

const logger = (store) => (next) => (action) => {
    // ...
   }
   //The variable logger is assigned to a function that takes the store as its argument. That function returns another function, which is passed next (which is the next middleware in line or the dispatch function). That other function return another function which is passed an action. Once inside that third function, we have access to store, next, and action.

//index.js
const store = createStore(reducer, middleware)
import middleware from './middleware'

//in middleware folder
//middleware/index.js
import thunk from 'redux-thunk'
import logger from './logger'
import { applyMiddleware } from 'redux'

export default applyMiddleware(
  thunk,
  logger,
) 
//A Thunk Action Creator returns a function that will be passed store.dispatch and store.getState when it's invoked.

const logger = (store) => (next) => (action) => {
    console.group(action.type)
      console.log('The action: ', action)
      const returnValue = next(action)
      console.log('The new state: ', store.getState())
    console.groupEnd()
    return returnValue
  }

//  initial app data

//dashboard component
function mapStateToProps ({ tweets }) {
    return {
      tweetIds: Object.keys(tweets)
        .sort((a,b) => tweets[b].timestamp - tweets[a].timestamp)
    }
  }
  export default connect(mapStateToProps)(Dashboard) 


  //like a tweet
  function handleToggleTweet (info) {
    return (dispatch) => {
      saveLikeToggle(info)
      .then(() => {
        dispatch(toggleTweet(info));
        })
      .catch((e) => {
        console.warn('Error in handleToggleTweet: ', e);
        alert('There was an error liking the tweet. Try again.');
    });
  };
  }

  //name 
  saveLikeToggle()