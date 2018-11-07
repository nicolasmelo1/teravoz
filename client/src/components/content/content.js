import React, { Component } from 'react';
import Plot from 'react-plotly.js';
import CallsResource from '../../services/calls'

class Content extends Component {
    constructor (props){
        super(props);
        this.setData = this.setData.bind(this);
        this.state = {
            activeCalls: 0,
            finishedCalls: 0
        };
    }

    setData(status, data){
        this.setState({
            activeCalls: data.activeCalls,
            finishedCalls: data.finishedCalls
        })
    }

    componentDidMount() {
        CallsResource.load(this.setData);
    }

    render () {
        return (
            <main>
                <div className="row">
                    <div className="col-sm-12">
                        <Plot
                            data={[
                                {
                                hole:0.6,
                                labels: ['Ativas', 'Finalizadas'],
                                marker: {line: {color: 'transparent'}},
                                type: 'pie',
                                values: [this.state.activeCalls, this.state.finishedCalls]
                                }
                            ]}
                            layout = {{
                                hovermode: 'closest',
                                showlegend: false,
                                title: 'Chamadas',
                                xaxis: {
                                    showgrid: false,
                                    showticklabels: false,
                                    zeroline: false
                                },
                                yaxis: {
                                    showgrid: false,
                                    showticklabels: false,
                                    zeroline: false
                                },
                                displayModeBar: false
                            }}
                                />
                    </div>
                </div>
            </main>
        );
    }
}

export default Content;