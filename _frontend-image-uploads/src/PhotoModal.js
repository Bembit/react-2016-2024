import React, {Component} from 'react';
import Modal from 'react-modal';

import PhotoInfo from './components/PhotoInfo';

class PhotoModal extends Component {
    render() {

        const { isActive, photo, handleClose } = this.props

        return(
            <Modal isOpen={isActive} contentLabel={photo.name} closeTimeoutMS={200} className="modal" ariaHideApp={false}>
                {/*  style={{backgroundImage: `url(${photo.image})`}} onClick={handleClose} alt={photo.name} */}
                
                <PhotoInfo handleClose={handleClose} photo={this.props.photo} />
                
                <div className="modalimage__container">
                    <img onClick={handleClose} src={photo.image} alt={photo.name} />
                </div>
            </Modal>
        )
    }
}

export default PhotoModal;