import React, { Component } from 'react';

export default class Add extends Component {

    constructor()
    {
        super();
        this.onChangeCategoryName = this.onChangeCategoryName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state={
            category_name:''
        }
    }

    onChangeCategoryName(e){
        this.setState({
           category_name:e.target.value
        });
    }

    onSubmit(e)
    {
        e.preventDefault();
        const category = {
            category_name : this.state.category_name
        }

        axios.post('http://localhost:9000/category/store',category)
            .then(res=>Console.log(res.data));
    }


    render() {
        return (
            <div>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label htmlFor="category_name">Category Name</label>
                  <input type="text" className="form-control" id="category_name"
                         placeholder="Enter category name" value={this.state.category_name}
                         onChange={this.onChangeCategoryName} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
        );
    }
  }
