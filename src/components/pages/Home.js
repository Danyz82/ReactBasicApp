import React, { Component } from 'react';

 
class MainPage extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1 className="display-3">React project</h1>
        </div>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Firstname</th>
                  <th>Lastname</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>John</td>
                  <td>Doe</td>
                  <td>john@example.com</td>
                </tr>             
              </tbody>
          </table>
          <button type="button" className="btn btn-success">Add new record</button>
      </div>
    );
  }
}
 
export default MainPage;
 