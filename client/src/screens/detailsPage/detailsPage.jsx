import Slider from '../../components/slider/Slider'
import './detailsPage.scss'

const DetailsPage = () => {
  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider />
          <div className="info">
            <div className="top"></div>
            <div className="bottom"></div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper"></div>
      </div>
    </div>
  )
}

export default DetailsPage