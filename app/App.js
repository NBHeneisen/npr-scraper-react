import React from "react";
import ReactDOM from "react-dom";

import Search from "./components/Search.js";
import Results from "./components/Results.js";
import SearchArticle from "./components/SearchArticle.js";
import SavedArticles from "./components/SavedArticles.js";
import SavedArticle from "./components/SavedArticle.js";


const App = () => (
    <div className="container text-center">
        <div className="jumbotron">
            <h1>NPR Article</h1>
            <h2>Search & Save</h2>
        </div>
        <div className="row">
            <div className="col-lg-12">
                <Search />
            </div>
        </div>
        <div className="row">
            <div className="col-lg-12">
                <Results>
                    <SearchArticle />
                </Results>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-12">
                <SavedArticles>
                    <SavedArticle />
                </SavedArticles>
            </div>
        </div>
            <div className="footer">
                <p>meh</p>
            </div>
    </div>
)

ReactDOM.render(<App />, document.getElementById("app"));
