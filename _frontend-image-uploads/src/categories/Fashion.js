import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import * as PhotoAPI from '../PhotoAPI';
import Photo from '../Photo';
import Footer from '../components/Footer';

class Fashion extends Component {
    constructor() {
        super();
          this.state = {
            photos: [],
          };
      }  
    
    componentDidMount() {
        PhotoAPI.getAll()
        .then(photos => {
          this.setState({ photos: photos });
          console.log(photos)
          console.log(photos.length)
          return photos
        })
      }

    render() {

        const { photos } = this.state
        
        return(
            <div>
                <div className="category">
                    <h2 className="heading">Fashion</h2>
                </div>
                {photos.length > 0
                ?
                (<div className="wrapper wrapper__medium">

                    {photos.filter(photo => photo.category === 'Fashion').map((photo, index) => {
                        return(
                            <Photo key={index} photo={photo} />
                        )
                    })}
                    
                </div>)
                :
                 (<div><h1 style={{color: "black"}}>Loading takes some time isn't it!</h1></div>)
                }
                <div>
                    <Link className="search-buttons" to="/">BACK</Link>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Fashion;