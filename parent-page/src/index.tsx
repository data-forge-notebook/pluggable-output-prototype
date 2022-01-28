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
                className="container mx-auto"
                style={{
                    maxWidth: "800px",
                    padding: "15px",
                }}
                >
                <div>
                    <h1>Output plugin prototype</h1>
                    <p className="mt-5">
                        This is a prototype of how "pluggable cell outputs" might work in <a href="https://www.data-forge-notebook.com">Data-Forge Notebook</a> (DFN) v2.
                    </p>
                    <p>
                        The chart below is a separate web page hosted in an iframe. 
                    </p>
                    <p>
                        For DFN v2 the output for each code cell will be hosted in a iframe. Therefore an "output plugin" will simply be a web page. Anyone who can make a simple static web page will also be able to make an output plugin to upgrade DFN with custom visualisation capabilities. Some of these plugins will be embedded in DFN (the default set of output types) and others might simply be hosted on the web.
                    </p>
                    <p>
                        The configuration and data for the output plugin is a simple JSON data that is sent from DFN to the output plugin. This is how DFN controls what is displayed in the output plugin.
                    </p>
                </div>
                <div
                    className="rounded"
                    style={{
                        marginTop: "10px",
                        padding: "15px",
                        border: "1px solid #e7e7e7",
                        height: "500px",
                        boxShadow: "0 6px 14px 0 rgba(33,35,68,.05)",
                        backgroundColor: "white",
                    }}
                    >
                    <iframe 
                        className="mx-auto"
                        style={{
                            width: "100%",
                            height: "490px",
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

ReactDOM.render(<App />, document.getElementById("root"))0