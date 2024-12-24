import { render } from 'preact'
import { Router } from 'preact-router'
import AsyncRoute from 'preact-async-route'

import Home from './pages/home'
import NotFound from './pages/notfound'

import 'normalize.css'
import './styles/global.css'

function App() {
  return (
    <Router>
      <Home path="/" />

      <AsyncRoute
        path="/play/:id"
        getComponent={() =>
          import('./pages/deeplink/play').then((module) => module.default)
        }
      />

      <AsyncRoute
        path="/signin/:provider/callback"
        getComponent={() =>
          import('./pages/signin/callback').then((module) => module.default)
        }
      />

      <AsyncRoute
        path="/signin/fail"
        getComponent={() =>
          import('./pages/signin/fail').then((module) => module.default)
        }
      />

      <NotFound default />
    </Router>
  )
}

render(<App />, document.getElementById('root')!)
