import React from 'react'; 

export default class GlobalCard extends React.Component {
    state = {
        loading: true,
        world: null
    }; 

    async componentDidMount() {
        const region = 'california'; // country is an input, but assuming we will only view US in state search

        const api = `https://corona.azure-api.net/country/us/${region}`;
        const response = await fetch(api);
        const data = await response.json();
        
        this.setState({ usState: data, loading: false});
    }
    render() {
        return (
            <>
            <div>
                {this.state.loading || !this.state.usState ? (
                    <div>Loading...</div>
                ):(
                    <div class="row stats-container text-center">
                        <div class="col-6 card">
                            <h5 class="section">State Stats
                            </h5>
                            <div class="row global-container">
                                <div class="col-6">
                                    <h6>Cumulative</h6>
                                    <p class="badge badge-primary">Confirmed: {this.state.usState.Confirmed.toLocaleString()}
                                    </p>
                                    <p class="badge badge-warning">Active: {this.state.usState.Active.toLocaleString()}
                                    </p>
                                    <p class="badge badge-danger">Deaths: {this.state.usState.Deaths.toLocaleString()}
                                    </p>
                                    <p class="badge badge-success">Recovered: {this.state.usState.Recovered.toLocaleString()}
                                    </p>
                                    <br></br>
                                </div>
                                <div class="col-6">
                                    <h6>Daily</h6>
                                    <p class="badge badge-warning">New Cases: {this.state.usState.NewConfirmed.toLocaleString()}</p>
                                    <p class="badge badge-danger">New Deaths: {this.state.usState.NewDeaths.toLocaleString()}
                                    </p>
                                    <p class="badge badge-success">New Recovered: {this.state.usState.NewRecovered.toLocaleString()}
                                    </p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                
                )}
            </div>
            </>
        )
    
    }
    }