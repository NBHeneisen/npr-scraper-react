import React, { Component } from "react";
import cheerio from "cheerio";
import axios from "axios";
console.log("calling search");


class Search extends Component {
  render() {
    return (
        <div className = "panel panel-default">
          <div className = "panel-heading">
            <p>Search Articles</p>
          </div>
          <div className = "panel-body">
            <form>
              <div className="form-group">
                <label htmlFor="topic">Topic</label>
                <input type="text" className="form-control" id="topic"></input>
              </div>
              <div className="form-group">
                <label htmlFor="startYear">Start Year</label>
                <input type="text" className="form-control" id="startYear"></input>
              </div>
              <div className="form-group">
                <label htmlFor="endYear">End Year</label>
                <input type="text" className="form-control" id="endYear"></input>
              </div>
              <button onClick="this.scrape" type="button" className="btn btn-primary" >Submit</button>
            </form>
          </div>
        </div>
    );
  }
}

export default Search;