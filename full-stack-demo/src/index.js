import React from 'react' 
import ReactDOM from 'react-dom'

import App from './components/App'

import data from './components/data'


ReactDOM.render(
    <App data={data.data}/>,
    document.getElementById('root')
)