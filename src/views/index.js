import { h } from 'preact'
import { Provider } from 'preact-redux';
import { Router } from 'preact-router';
import uuid from 'uuid/v4'

import store from '../store';
import { connect } from 'preact-redux'
import {updateApp } from '../actions/app'
import Home from './pages/home';
import Layout from './tags/layout';
import Error404 from './pages/errors/404';

// track pages on route change
const onChange = obj => window.ga && ga.send('pageview', { dp:obj.url });

const config = {
  apiUrl: 'http://0.0.0.0:3051',
  requestId: uuid()
}

const mapDispatchToProps = (dispatch) => ({
  updateApp: config => dispatch(updateApp())
})

const App =
<Layout>
  <Provider store={store}>
    <Router onChange={onChange}>
      <Home path="/forms/:form" />
      <Error404 default />
    </Router>
  </Provider>
</Layout>

export default connect(state => state, mapDispatchToProps)(App)
