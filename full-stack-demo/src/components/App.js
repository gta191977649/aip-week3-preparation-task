import React from 'react'
import axios from 'axios'
import Header from './Header'
import DataPreview from './DataPreview'


class App extends React.Component {
    state = {
        pageHeader: 'aaa',
        data: []
    }
    componentDidMount() {
        // ajax
        axios.get('/api/data')
        .then(resp=> {
            this.setState({
                data: resp.data.data
            })
        })
        .catch(console.error)
        
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