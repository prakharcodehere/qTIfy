import React from 'react'
import styles from "./search.module.css"
import { ReactComponent as SearchIcon } from '../../assets/searchIcon.svg'


const Search = () => {
  return (
    <div >
      <form className={styles.wrapper}>
  <input className={styles.search}/>
  <button className={styles.searchBtn} type='submit'>
  <SearchIcon/>
  </button>

      </form>
    </div>
  )
}

export default Search;
