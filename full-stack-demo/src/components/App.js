import React from 'react'
import Header from './Header'
import DataPreview from './DataPreview'
import JsonData from '../data'

class App extends React.Component {
    state = {
        pageHeader: 'aaa',
        data: []
    }
    componentDidMount() {
        this.setState({
            data: JsonData.data
        })
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
                        this.state.data.map(
                            element => <DataPreview data={element} key={element.id}/>
                        )
                    }
                
                </div>
            </div>
        )
    }
}
export default App