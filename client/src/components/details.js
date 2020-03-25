import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Details extends Component {
    state = {
        details: []
        }

   componentDidMount() {
      var request = 'ad-single'
        fetch(request)
        .then(res => res.json())
        .then((data) => {
          this.setState({ details: data })
        })
        .catch(console.log)
   }

   render(){
   return (
   <div>
   <h5 align="center"><Link to ='/ads'>Back to the result page</Link></h5>
      <table class="center">
      <tr>
      <th>Ad Listing name</th>
      </tr>
      <tr>
      <td>{this.state.details.title}</td>
      </tr>
      <tr>
      <th>Description</th>
      </tr>
      <tr>
      <td>{this.state.details.description}</td>
      </tr>
      <tr>
      <th>Write a message </th>
      <td><button type="button" onClick={this.showModal}>click</button></td>
      </tr>
     </table>
</div>
   );
   }
}

export default Details;