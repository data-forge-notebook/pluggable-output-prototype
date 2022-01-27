import React from "react";
import ReactDOM from "react-dom";
import ApexCharts from 'apexcharts';

class App extends React.Component {

    componentDidMount() {
        console.log(`Subscribing to messages from parent!`);

        window.addEventListener("message", event => {
            console.log(`Output plugin received message: `);
            console.log(event);

            const payload = event.data;
            if (payload.name === "config") {
                // 
                // Configures the plugin.
                //
                const chart = new ApexCharts(document.querySelector("#chart"), payload.data);
                chart.render();

                event.source?.postMessage({
                    name: "configured",
                }, "*");
            }
        });
    }

    render() {
        return (
            <div 
                id="chart" 
                style={{
                    width: "100%",
                    height: "100%",
                }}
                />
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));