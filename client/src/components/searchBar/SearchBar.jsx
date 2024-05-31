import './searchBar.scss'

const SearchBar = () => {
  return (
    <div className='searchBar'>
        <form action="">
            <input type="text" name='location' placeholder='City'/>
            <input type="number" name='minPrice' min={0} max={100000} placeholder='Min Price'/>
            <input type="number" name='maxPrice' min={0} max={100000} placeholder='Max Price'/>
            <button>
                <img src="/search.png" alt="" />
            </button>
        </form>
    </div>
  )
}

export default SearchBar