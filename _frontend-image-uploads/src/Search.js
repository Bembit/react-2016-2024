import React, { Component } from 'react';
import Photo from './Photo';
// import MobileNav from './components/MobileNav';
import Footer from './components/Footer';
import { Link } from 'react-router-dom';
import * as PhotoAPI from './PhotoAPI';

import escapeRegExp from 'escape-string-regexp'

class Search extends Component {

    constructor() {
        super();
            // this.filterPhotos = this.filterPhotos.bind(this);
            this.state = {
            photos: [],
            query: ''
        };
    }
    
    componentDidMount() {
        PhotoAPI.getAll()
        .then(photos => {
          this.setState({ photos: photos });
          return photos
        })
      }

    filterPhotos = (query) => {
        this.setState({ query: query.trim() })
    }

    clearQuery = () => {
        this.setState({ query: '' })
    }

    setQueryPopularOne = () => {
        this.setState({ query: 'wedding' })
    }

    setQueryPopularTwo = () => {
        this.setState({ query: 'nature' })
    }

    setQueryPopularThree = () => {
        this.setState({ query: 'beauty' })
    }

    setQueryPopularFour = () => {
        this.setState({ query: 'something' })
    }

    setQueryPopularFive = () => {
        this.setState({ query: 'test' })
    }

    render() {

        const { photos, query } = this.state

        let showingPhotos
        if (query) {
            const match = new RegExp(escapeRegExp(query), 'i')
            showingPhotos = photos.filter((photo) => match.test(photo.tag))
        } else {
            showingPhotos = photos
            // console.log(showingPhotos);
        }

        return(
            <div>
                <div className="search__background">
                {/* <Link className="search__back-button" to="/">go back</Link> */}
                    <div className="photo__results">
                    
                        {/* <h1 className="search__heading">find the photos you love</h1> */}
                        <input className="search__bar" type="text" placeholder="Search by tags (try: Beauty, Life, Nature, Happy)" value={query} onChange={(event) => this.filterPhotos(event.target.value)} />
                        <div className="popular__tags">
                            <button onClick={this.setQueryPopularOne}>wedding</button>
                            <button onClick={this.setQueryPopularTwo}>Nature</button>
                            <button onClick={this.setQueryPopularThree}>beauty</button>
                            <button onClick={this.setQueryPopularFour}>something</button>
                            <button onClick={this.setQueryPopularFive}>test</button>
                        </div>
                    </div>
                    <div className="photo__results">
                    {showingPhotos.length !== photos.length && (
                        <div className="photo__results-container">
                            <h4 className="">Now showing <span>{showingPhotos.length}</span> of <span>{photos.length}</span> total photos.</h4>
                            <a className="search-buttons search-buttons-showall" onClick={this.clearQuery}>Show all</a>
                        </div>
                    )}
                    </div>
                </div>
                {showingPhotos.length > 0
                ?
                (<div className="wrapper wrapper__small">

                    {showingPhotos.map((photo, index) => {
                        return(
                            <Photo key={index} photo={photo} photos={photos} />
                        )
                    })}
                    
                </div>)
                :
                 (<div className="wrapper"><h1 style={{color: "black"}}>Loading... Or there are no results.. Who knows?</h1></div>)
                }
                <div>
                    <Link className="search-buttons" to="/">BACK</Link>
                </div>
                <Footer />
                {/* <MobileNav />                          */}
            </div>
        )
    }
}

export default Search;