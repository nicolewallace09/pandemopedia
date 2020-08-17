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

        console.log(data)
        
        this.setState({ world: data[0], loading: false});
    }
    render() {
        return (
            <>
            <div>
                {this.state.loading || !this.state.world ? (
                    <div>Loading...</div>
                ):(
                    <div className="row stats-container text-center">
                        <div className="col-6 card">
                            <h5 className="section">Global Stats
                            </h5>
                            <div className="row global-container">
                                <div className="col-6">
                                    <h6>Cumulative</h6>
                                    <p className="badge badge-primary">Confirmed: {this.state.world.globalData.Confirmed.toLocaleString()}
                                    </p>
                                    <p className="badge badge-warning">Active: {this.state.world.globalData.Active.toLocaleString()}
                                    </p>
                                    <p className="badge badge-danger">Deaths: {this.state.world.globalData.Deaths.toLocaleString()}
                                    </p>
                                    <p className="badge badge-success">Recovered: {this.state.world.globalData.Recovered.toLocaleString()}
                                    </p>
                                    <br></br>
                                </div>
                                <div className="col-6">
                                    <h6>Daily</h6>
                                    <p className="badge badge-warning">New Cases: {this.state.world.globalData.NewConfirmed.toLocaleString()}</p>
                                    <p className="badge badge-danger">New Deaths: {this.state.world.globalData.NewDeaths.toLocaleString()}
                                    </p>
                                    <p className="badge badge-success">New Recovered: {this.state.world.globalData.NewRecovered.toLocaleString()}
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