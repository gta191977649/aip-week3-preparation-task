import React from 'react'
import axios from 'axios'
import Header from './Header'
import DataPreview from './DataPreview'


class App extends React.Component {
    state = {
        pageHeader: 'aaa',
        data: [],
        content: "Do you like javascript"
    }
    onYes(){
       console.log("YES click")
    }
    onNO() {
        console.log("no click")
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
                <p>{this.state.content}</p>
                <button onClick={this.onYes}>YES</button>
                <button onClick={this.onNO}>NO</button>

            </div>
        )
    }
}
export default App