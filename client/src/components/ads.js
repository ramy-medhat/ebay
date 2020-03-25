import React from 'react';
import {Link} from 'react-router-dom'

const Ads = ({ ads }) => {
      return (
        <div>
          <center><h1>Classifieds</h1></center>
          {ads.map((ad) => (
           <table class="center"><tr>
           <th>ID</th>
           <th>Title</th>
           <th>Image Url</th>
           <th>Description</th>
           <th>User id</th>
         </tr>
            <tr>
            <td>{ad[0].id}</td>
            <td>{ad[0].title}</td>
            <td>{ad[0].imageUrl}</td>
            <td>{ad[0].description}</td>
            <td>{ad[0].userId}</td>
            <td><Link to ='/details'>details</Link></td>
            </tr>
          </table>
          ))}
        </div>
      )
    };

    export default Ads
