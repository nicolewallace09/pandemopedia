import React from 'react';

const Homepage = () => {
    return (
        <>
        <div class="jumbotron-fluid"></div>

        <div class="row stats-container text-center">
            <div class="col-6 card">
                <h1 class="section">Global Placeholder</h1>
                <div class="row global-container">
                    <div class="col-12">
                        <p class="badge badge-primary">Confirmed:</p> Example# <p class="badge badge-warning">Active:</p> Example#<br></br>
                    </div>
                    <div class="col-12">
                        <p class="badge badge-success">Recovered:</p> Example# <p class="badge badge-danger">Deaths:</p> Example#
                    </div>
                </div>
            </div>

            <div class="col-6">
                <h1 class="section">United States Placeholder</h1>
            </div>
        </div>
        </>
    );
};


export default Homepage; 
