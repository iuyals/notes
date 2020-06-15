1,use react router
    index.js  import { BrowserRouter } from 'react-router-dom',put <App/> in <BrowserRouter />
    app.js import { Route } from 'react-router-dom',use 
     <Route path='/create' render={({ history }) => (
          <Route path='/create' render={({ history }) => (
          <CreateContact
            onCreateContact={(contact) => {
              this.createContact(contact)
              history.push('/')
            }}
          />
      )}
      />

import { useHistory } from "react-router-dom";

function HomeButton() {
  const history = useHistory();

  function handleClick() {
    history.push("/home");
  }

  return (
    <button type="button" onClick={handleClick}>
      Go home
    </button>
  );
}
