import './App.css';

import { Route, Switch } from 'react-router-dom';
import Ex1 from './pokemon/Ex1/index'
import Ex2 from './pokemon/Ex2/battle';
import Ex4 from './pokemon/Ex4/index'
import Ex5 from './pokemon/Ex5/index'

function App() {
  return (
    <div>
      <main>
        <Switch>
          <Route exact path='/' component={Ex1} />
          <Route path='/ex2Eex3' component={Ex2} />
          <Route path='/ex4' component={Ex4} />
          <Route path='/ex5' component={Ex5} />
        </Switch>
      </main>

    </div>
  )

}

export default App;
