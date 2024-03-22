import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class AddNewBook extends Component {
    render() {
        return(
            <div className="open-search">
                <Link to="/search">Add a new book</Link>
            </div>
        )
    }
}

export default AddNewBook;