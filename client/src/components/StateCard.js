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
                    <div className="row stats-container text-center">
                        <div className="col-6 card">
                            <h5 className="section">State Stats
                            </h5>
                            <div className="row global-container">
                                <div className="col-6">
                                    <h6>Cumulative</h6>
                                    <p className="badge badge-primary">Confirmed: {this.state.usState.Confirmed.toLocaleString()}
                                    </p>
                                    <p className="badge badge-warning">Active: {this.state.usState.Active.toLocaleString()}
                                    </p>
                                    <p className="badge badge-danger">Deaths: {this.state.usState.Deaths.toLocaleString()}
                                    </p>
                                    <p className="badge badge-success">Recovered: {this.state.usState.Recovered.toLocaleString()}
                                    </p>
                                    <br></br>
                                </div>
                                <div className="col-6">
                                    <h6>Daily</h6>
                                    <p className="badge badge-warning">New Cases: {this.state.usState.NewConfirmed.toLocaleString()}</p>
                                    <p className="badge badge-danger">New Deaths: {this.state.usState.NewDeaths.toLocaleString()}
                                    </p>
                                    <p className="badge badge-success">New Recovered: {this.state.usState.NewRecovered.toLocaleString()}
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