import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { GEditor, GBlock } from "grapesjs-react";
import "grapesjs/dist/css/grapes.min.css";
import "antd/dist/antd.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Editor from "./Editor";




class SimpleBlock extends GBlock {
    content = `<div class="simple-block"> This is a simple block </div>`;

    constructor() {
        super("simple-block", "Simple Block");
    }
}

function CustomBlock() {
    return (
        <div className="container-fluid">
            <div>
                <GEditor id="geditor" newsletter blocks={[new SimpleBlock()]} />
            </div>
        </div>
    );
}


function App() {
    return (
        <div className="App">
            <CustomBlock />
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
