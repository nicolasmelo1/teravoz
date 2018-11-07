import React, { Component } from 'react';
import Plot from 'react-plotly.js';
import CallsResource from '../../services/calls'

class Content extends Component {
    constructor (props){
        super(props);
        this.setData = this.setData.bind(this);
        this.state = {
            activeCalls: 0,
            finishedCalls: 0,
            na: 1
        };
    }

    setData(status, data){
        if (data.activeCalls !==0 || data.finishedCalls !== 0){
            this.setState({
                activeCalls: data.activeCalls,
                finishedCalls: data.finishedCalls,
                na: 0
            })
        } else{
            this.setState({
                activeCalls: data.activeCalls,
                finishedCalls: data.finishedCalls,
                na: 1
            })
        }
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
                                labels: ['Ativas', 'Finalizadas', 'N/A'],
                                marker: {line: {color: 'transparent'}},
                                type: 'pie',
                                values: [this.state.activeCalls, this.state.finishedCalls, this.state.na]
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