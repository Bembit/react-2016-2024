import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class ListContacts extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
  }

  state = {
    query: ''
  }

// The user enters text into the input field.
// An event listener invokes the updateQuery() function on every onChange event.
// updateQuery() then calls setState(), merging in the new state to update the component's internal state.
// Because its state has changed, the ListContacts component re-renders.

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
  }

  clearQuery = () => {
    this.setState({ query: '' })
  }

  render() {
// clean up a bit and stay DRY
    const { contacts, onDeleteContact } = this.props
    const { query } = this.state

    let showingContacts
    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i')
      showingContacts = contacts.filter((contact) => match.test(contact.name))
    } else {
      showingContacts = contacts
    }

// for alphabetic sorting
    showingContacts.sort(sortBy('name'))

    return (
      <div className='list-contacts'>
        {/* {JSON.stringify(this.state)} */}
        <div className='list-contacts-top'>
          <input 
            className='search-contacts'
            type='text'
            placeholder='Search contacts'
            value={query}
            onChange={(event) => this.updateQuery(event.target.value)}
          />
          <Link
          to='/create'
          onClick={this.props.onNavigate}
          className='add-contact'
          >Add Contact
          </Link>
        </div>

        {showingContacts.length !== contacts.length && (
          <div className='showing-contacts'>
          {/* debugging : I CANT FUCKING TYPE LENGTH SOO */}
            <span>Now showing {showingContacts.length} of {contacts.length} total.</span>
            <button onClick={this.clearQuery}>Show all</button>
          </div>
        )}

        <ol className='contact-list'>
            {/*  {this.props.contacts.map((contact) => ( */}
            {/* changed to the new showingContacts defined above */}
            {showingContacts.map((contact) => (
                <li key={contact.id} className='contact-list-item'>
                  <div className='contact-avatar' style={{
                      backgroundImage: `url(${contact.avatarURL})`
                  }} />
                  <div className='contact-details'>
                    <p>{contact.name}</p>
                    <p>{contact.email}</p>
                </div>
                <button onClick={() => onDeleteContact(contact)} className='contact-remove'>
                    Remove
                </button>
                </li>
            ))}
        </ol>
      </div>
      )
    }
}

export default ListContacts