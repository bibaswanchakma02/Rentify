import SearchBar from '../../components/searchBar/SearchBar'
import './home.scss'

const Home = () => {
  return (
    <div className='home'>
        <div className="textContainer">
            <div className="wrapper">
                <h1 className='title'>
                    Discover the simplicity of finding your comfort place with us.
                </h1>
                <p>
                Explore the best properties tailored to your needs and 
                start your journey towards a perfect living experience today.
                </p>
                <SearchBar/>
                <div className="boxes">
                    <div className="box">
                        <h1>1000+</h1>
                        <h2>Properties Listed</h2>
                    </div>
                    <div className="box">
                        <h1>2000+</h1>
                        <h2>Bookings made</h2>
                    </div>
                    <div className="box">
                        <h1>4000+</h1>
                        <h2>Happy users</h2>
                    </div>
                </div>
            </div>
        </div>
        <div className="imgContainer">
            <img src="/bg-img.png" alt="" />
        </div>
    </div>
  )
}

export default Home