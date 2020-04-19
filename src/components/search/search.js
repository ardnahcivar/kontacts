import React from 'react'
import styles from './search.module.css'
import { MdSearch } from 'react-icons/md'
import { connect } from 'react-redux'
const Search = props => {
    return(
            <div className={styles.searchbox}>
                <span className={styles.searchIcon}>
                    <MdSearch size={25} color={'#a13acb'}  />
                </span>
                <input placeholder='Search'></input>
            </div>
    )
}

const mapStateToProps = state => {
    return {
        contacts:state.contacts
    }
  }
  
  const mapDispatchToProps = dispatch => {
      return {
        
      }
  }
  
export default connect(mapStateToProps,mapDispatchToProps)(Search)