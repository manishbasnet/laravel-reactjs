import React, { Component } from 'react';

export default class Add extends Component {
    render() {
        return (
            <div>
              <form>
                <div className="form-group">
                  <label for="category_name">Category Name</label>
                  <input type="text" className="form-control" id="category_name" placeholder="Enter category name" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
        );
    }
  }
