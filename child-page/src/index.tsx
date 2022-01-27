import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {

    componentDidMount() {
        console.log(`Subscribing to messages from parent!`);
        
        window.addEventListener("message", event => {
            console.log(`Message from parent!`);
            console.log(event);

            event.source?.postMessage({
                msg: "Thanks so much for your wonderful message.",
            }, "*");
        });

        setTimeout
    }

    render() {
        return (
            <div>
                Hello from inside the iframe!
            </div>
        );                
    }
}

ReactDOM.render(<App />, document.getElementById("root"));