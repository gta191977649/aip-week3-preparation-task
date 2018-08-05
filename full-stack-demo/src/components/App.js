import React from 'react'
import Header from './Header'

class App extends React.Component {
    state = {
        pageHeader: 'aaa'
    }
    render() {
        return(
            <div className="App">
                <Header msg={this.state.pageHeader}/>
                <p></p>
                <div>
    
                </div>
            </div>
        )
    }
}
export default App