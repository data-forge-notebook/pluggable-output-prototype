import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {

    private iframeRef: React.RefObject<HTMLIFrameElement>;

    private url = "http://localhost:1234";

    constructor(props: any) {
        super(props);

        this.iframeRef = React.createRef<HTMLIFrameElement>();
    }

    componentDidMount() {
        setTimeout(() => {
            console.log(`Configuring the output plugin.`);

            this.iframeRef.current?.contentWindow?.postMessage({
                name: "config",
                data: {
                    chart: {
                        type: 'line'
                    },
                    series: [{
                        name: 'sales',
                        data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
                    }],
                    xaxis: {
                        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
                    }
                },
            }, "*");

            window.addEventListener("message", event => {
                const payload = event.data;
                if (payload.name !== undefined) {
                    console.log(`Message from output plugin:`);
                    console.log(payload);
                }
            });
    
        }, 1000); // TODO: Need an initialisation protocol. The problem is that the plugin might not be ready by the time we send the config event.
    }

    render() {
        return (
            <div
                style={{
                    width: "100%",
                    padding: "15px",
                }}
                >
                <div>
                    <h1>Data-Forge Notebook v2 output plugin prototype</h1>
                    <p>
                        Below is prototype "output plugin" for Data-Forge Notebook running in an iframe:
                    </p>
                </div>
                <div
                    style={{
                        marginTop: "10px",
                        padding: "15px",
                        border: "1px solid red",
                        height: "500px",
                    }}
                    >
                    <iframe 
                        style={{
                            width: "100%",
                            height: "100%",
                        }}
                        ref={this.iframeRef}
                        src={this.url}
                        title="Output plugin"
                        sandbox="allow-scripts"
                        />
                </div>
            </div>
        );                
    }
}

ReactDOM.render(<App />, document.getElementById("root"));