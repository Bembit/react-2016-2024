import React, {Component} from 'react'
import Title from './Title'
import PhotoWall from './PhotoWall'
import AddPhoto from './AddPhoto'
import {Route} from 'react-router-dom'
import {Link} from 'react-router-dom'

import Single from './Single'

import {removePost} from '../redux/actions'

class Main extends Component {

    state = { loading: true }
  
    componentDidMount() {
        this.props.startLoadingPost().then(() => {
            this.setState({loading: false})
        })
        this.props.startLoadingComments()
    }

    render() {
        
        return <div>

            <h1>
                <Link to='/'>Share Your Life</Link>
            </h1>

            <Route exact path="/" render={() => (
                <div>
                    
                    <PhotoWall {...this.props} />
                </div>
            )}/>
            {/* passin history to go back to main page after submitting the details of the new post */}
            <Route path="/AddPhoto" render = {({history}) => (
                 <AddPhoto {...this.props}/>
             )} />

            <Route path="/single/:id" render={(params) => (
                <Single loading={this.state.loading} {...this.props} {...params}/>
            )}/>
            
            </div>
    }
}

export default Main