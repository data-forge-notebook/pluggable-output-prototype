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
            console.log(`Sending message to child.`);

            this.iframeRef.current?.contentWindow?.postMessage({
                hello: "world!",
            }, "*");

            window.addEventListener("message", event => {
                console.log(`Message from child!`);
                console.log(event);
            });
    
        }, 5000);
    }

    render() {
        return (
            <div
                style={{
                    margin: "5px",
                    padding: "5px",
                    border: "1px solid red",
                }}
                >
                <iframe 
                    ref={this.iframeRef}
                    src={this.url}
                    title="Child!"
                    sandbox="allow-scripts"
                    />
            </div>
        );                
    }
}

ReactDOM.render(<App />, document.getElementById("root"));