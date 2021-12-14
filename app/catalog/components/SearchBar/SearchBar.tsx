import { useState } from "react"
import styles from "./styles.module.scss"

const ITEMS_PER_PAGE = 10

export function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("")

  return (
    <div>
      <div className={styles.searchBar}>
        <input
          onChange={(e) => setQuery(e.target.value)}
          className={styles.searchBar__input}
          type="text"
          placeholder="Ищи"
        />
        <div onClick={() => onSearch(query)} className={styles.searchBar__button}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="23"
            height="23"
            viewBox="0 0 172 172"
          >
            <g
              fill="none"
              fillRule="nonzero"
              stroke="none"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              strokeMiterlimit="10"
              strokeDasharray=""
              strokeDashoffset="0"
              fontFamily="none"
              fontWeight="none"
              fontSize="none"
              textAnchor="none"
            >
              <path d="M0,172v-172h172v172z" fill="none"></path>
              <g fill="#ffffff">
                <path d="M72.24,10.32c-32.33062,0 -58.48,26.14938 -58.48,58.48c0,32.33063 26.14938,58.48 58.48,58.48c11.54281,0 22.22563,-3.38625 31.2825,-9.1375l42.2475,42.2475l14.62,-14.62l-41.71,-41.6025c7.49813,-9.83625 12.04,-22.02406 12.04,-35.3675c0,-32.33062 -26.14937,-58.48 -58.48,-58.48zM72.24,24.08c24.76531,0 44.72,19.95469 44.72,44.72c0,24.76531 -19.95469,44.72 -44.72,44.72c-24.76531,0 -44.72,-19.95469 -44.72,-44.72c0,-24.76531 19.95469,-44.72 44.72,-44.72z"></path>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default SearchBar
