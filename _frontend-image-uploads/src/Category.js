import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Photo from './Photo';

class Category extends Component {
    render() {

        const { category, photos } = this.props

        return(
            <div id={`${category.name}`}>
                <div className="category">
                    <h2 className="heading">{category.name}</h2>
                    {/* <Link className="heading-button" to="/">go up</Link> */}
                </div>

                {photos.length > 0
                ?
                (<div className="wrapper">

                    {photos.filter(photo => photo.category === category.name).map((photo, index) => {
                        return(
                            <Photo key={index} photo={photo} />
                        )
                    })}
                    
                </div>)
                :
                 (<div><h1 style={{color: "black"}}>Loading takes some time isn't it!</h1></div>)
                }
                <div>
                    <h4 className="category__button"><Link to={`/${category.name}`}><svg className="fas fa-camera-retro"></svg> More from {category.name}</Link></h4>
                </div>                            
            </div>
        )
    }
}

export default Category;