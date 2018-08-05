import React from 'react'
import Header from './Header'
import DataPreview from './DataPreview'

class App extends React.Component {
    state = {
        pageHeader: 'aaa'
    }
    componentDidMount() {
    }
    componentWillUnmount () {

    }
    render() {
        return(
            <div className="App">
                <Header msg={this.state.pageHeader}/>
                <p></p>
                <div>
                    {
                        this.props.data.map(
                            element => <DataPreview data={element} key={element.id}/>
                        )
                    }
                
                </div>
            </div>
        )
    }
}
export default App