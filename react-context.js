//first creat Context
const Context = React.creatContext()

//use Context Provider
class App extends React.Component {
    render() {
        const name = 'Tyler';

        return (
            <Context.Provider value={name}> //here
                <Parent />
            </Context.Provider>
        );
    }
}

//use Context.Consume
function Grandchild({ name }) {
    return (
        <Context.Consumer>
            {(name) => (
                <div>
                    <h1>Grandchild</h1>
                    <h3>Name: {name}</h3>
                </div>
            )}
        </Context.Consumer>
    );
}

//a abstration provider,like libary code

class Provider extends React.Component{
    render(){

        return (
            <Context.Provider value={this.props.store}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
)

//but we can only use Context.Consume in rener(),we want use it in ComponetDidMount
//we need connected/container component for how thing work and presentation componets for how thing look
class ConnectedApp extends React.Component {
    render() {
      return (
        <Context.Consumer>
          {(store) => (
            <App store={store} />
          )}
        </Context.Consumer>
      )
    }
  }

  //but still need write Context.Consumer,we want it like Provider,neednt care Context api
//connect(data)(componets) we want connect return the componet with props set 
  const ConnectedApp=connect((state)=>{propname:state.sth})(App)

  //use react-redux pkg
  ReactDOM.render(
    <ReactRedux.Provider store={store}>
    <ConnectedApp />
    </ReactRedux.Provider>,
    document.getElementById('app')
   );

   //middleware
    const checker=(store)=>(next)=>(action)=>{
        dosth;
        return next(action)
    }
   
   const store = Redux.createStore(Redux.combineReducers({
    todos,
    goals,
  }))
   Redux.applyMiddleware(checker)

  //thunk

  function handleDeleteTodo (todo) {
    return (dispatch) => {
      dispatch(removeTodoAction(todo.id))

      return API.deleteTodo(todo.id)
        .catch(() => {
          dispatch(addTodoAction(todo))
          alert('An error occurred. Try again.')
        })
    }
  }
  const thunk = (store) => (next) => (action) => {
    if (typeof action === 'function') {
        return action(store.dispatch)
    }
    return next(action)
}

Redux.applyMiddleware(ReduxThunk.default, checker, logger)

this.props.store.dispatch(handleDeleteTodo(todo))







//user Router

//index.js
import { BrowserRouter } from 'react-router-dom'
ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , document.getElementById('root')
)

//app.js
import { Route } from 'react-router-dom'
render() {
  console.log("render ")
  return (
    <div className="app">
      <Route exact path='/' render={() => (
        <ListBooks
          books={this.state.books}
          moveTo={(book, shelf) => this.moveTo(book, shelf)}
        />
      )} />
      <Route exact path='/' render={() => (
        <SearchBooks
          books={this.state.searchResult}
          search={query => this.search(query)}
          moveTo={(book,shelf)=>this.moveTo(book,shelf)}
        />

      )} />
    </div>
  )
}

class SearchButton extends React.Component {

  render() {
      return (
          <Link to='/search' className='open-search'>
              <button></button>
          </Link>
      )
  }
}

