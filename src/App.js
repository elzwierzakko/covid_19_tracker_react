import React from 'react';

import {Cards, Chart, CountryPicker} from './components';
import styles from './App.modules.css';
import {fetchData} from './api';

class App extends React.Component {
    state = {
        data: {},
    }
    
    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({data: fetchedData})
    }
    render() {
        const {data} = this.state;
        return (
            <div className="containter">
                <Cards data={data}/>
                <Chart/>
                <CountryPicker/>
                </div>
        )
    }
}

export default App;