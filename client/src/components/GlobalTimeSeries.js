import React from 'react'; 

export default class CountryCard extends React.Component {
    state = {
        loading: true,
        globalTime: null
    }; 

    async componentDidMount() {
        const api = "https://corona.azure-api.net/all";
        const response = await fetch(api);
        const data = await response.json();

        console.log(data)
        
        this.setState({ globalTime: data[0], loading: false});

        
    }
    render() {
    return (
        <>
        </>
    )
}

}

