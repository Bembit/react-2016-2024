import React, {Component} from 'react';

class PhotoInfo extends Component {

    render() {

        const {handleClose, photo} = this.props

        return(            
            <div className="photo__info">
                <div>
                    <div className="social">
                        <svg className="fas fa-thumbs-up"></svg>
                        <svg className="fas fa-heart"></svg>
                    </div>
                </div>
               
                <div className="photo__info-buttons">               
                    <a href={photo.image} target="_blank">view full image</a>  
                </div>
               
                <div className="photo__info-top">
                    {/* <div className="photo__info">
                        <h3>{photo.name}</h3>
                        <h4>{photo.tag}</h4>
                    </div> */}
                    <div className="photo__info-buttons">
                        <a className="" onClick={handleClose}>Close</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default PhotoInfo;