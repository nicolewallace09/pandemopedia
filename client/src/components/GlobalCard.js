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
                        {/* CUMULATIVE FIGURES */}
                        
                        {/* total cases (world) */}
                        {this.state.world.globalData.Confirmed}
                        
                        {/* total active cases (world) */}
                        {this.state.world.globalData.Active}
                      
                        {/* total recovered (world) */}
                        {this.state.world.globalData.Recovered}

                        {/* total deaths (world) */}
                        {this.state.world.globalData.Deaths}
                        
                        {/* DAILY FIGURES */}
                        
                        {/* daily new cases (world) */}
                        {this.state.world.globalData.NewConfirmed}
                        
                        {/* daily new recovered (world) */}
                        {this.state.world.globalData.NewRecovered}

                        {/* daily new deaths (world) */}
                        {this.state.world.globalData.NewDeaths}

                        {/* TIME of UPDATE */}

                        {/* timestamp for data update (world) */}
                        {this.state.world.globalData.Last_Update}


                    </div>
                </div>
            
            )}
        </div>
        </>
    )

}
}