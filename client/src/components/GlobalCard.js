import React from 'react'; 

export default class GlobalCard extends React.Component {
    state = {
        loading: true,
        world: null
    }; 

    async componentDidMount() {
        const api = "https://corona.azure-api.net/all";
        const response = await fetch(api);
        const data = await response.json();
        
        this.setState({ world: data[0], loading: false});
    }
    render() {
    return (
        <>
        <div>
            {this.state.loading || !this.state.world ? (
                <div>Loading...</div>
            ):(
                <div>
                    <div>
                        {this.state.world.globalData.Confirmed}
                        
                        {this.state.world.globalData.Active}
                      
                        {this.state.world.globalData.Recovered}
                  
                        {this.state.world.globalData.Deaths}
                    </div>
                </div>
            
            )}
        </div>
        </>
    )

}
}


