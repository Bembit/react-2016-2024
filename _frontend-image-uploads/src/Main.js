import React, { Component } from 'react';

import './styles/App.css';
import './styles/Grid.css';
import './styles/Photo.css';
import './styles/Hero.css';
import './styles/Animations.css';
import './styles/DropDown.css';
import './styles/Category.css';
import './styles/Modal.css';
import './styles/PhotoInfo.css';
import './styles/Quote.css';
import './styles/Contact.css';
import './styles/Footer.css';
import './styles/Search.css';
import './styles/MobileNav.css';

import * as PhotoAPI from './PhotoAPI';
import Category from './Category';
import Header from './components/Header';
import Footer from './components/Footer';
import Quote from './components/Quote';
import Contact from './components/Contact';
// import MobileNav from './components/MobileNav';

class Main extends Component {
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
      return photos
    })
  }

  render() {

    const { photos } = this.state

    const categories = [
      {
        name: 'Portraits'
      },
      {
        name: 'Nature'
      },
      {
        name: 'Weddings'
      },
      {
        name: 'Fashion'
      },
      {
        name: 'Others'
      },
      {
        name: 'Mobile'
      }
    ]

    return (
      <div>
            <Header />
            {/* <MobileNav /> */}
            <Quote />

            {categories.map((category, index) => (
              <Category key={index} title={category.name} category={category} photos={photos}/>
            ))}

            <Contact />
            <Footer />
      </div>
    );
  }
}

export default Main;