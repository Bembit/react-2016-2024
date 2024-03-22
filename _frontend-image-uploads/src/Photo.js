import React, { Component } from 'react';
import PhotoModal from './PhotoModal';

class Photo extends Component {

    constructor() {
        super();
          this.state = {
            isActive: false,
        };
    }
      
    handleClick = () => {
        this.setState(() => ({
            isActive: true,
        }));
    }

    handleClose = () => {
        this.setState(() => ({
            isActive: false,
        }));
    }

    render() {

        const { photo } = this.props

        return(
                <div className="panel photo" key={photo.index}>
                    <div className="photo__side photo__side--front photo__side--front-rotatey">
                        <div className="photo__picture" style={{backgroundImage: `url(${photo.image})`}}>
                            &nbsp;
                        </div>
                        <h4 className="photo__heading">
                            <span className="photo__heading-span">{photo.tag}</span>
                        </h4>
                    </div>
                    <div className="photo__side photo__side--back photo__side--back-rotatey" style={{backgroundImage: `url(${photo.image})`}}>
                        <div className="photo__enlarge">
                            <a className="btn btn--expand" onClick={this.handleClick}>
                                <span>{photo.category} &rarr;</span>
                            </a>
                        </div>
                    </div>
                <PhotoModal photo={photo} isActive={this.state.isActive} handleClose={this.handleClose} />
                </div>
        )
    }
}

export default Photo;