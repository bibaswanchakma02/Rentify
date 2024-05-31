import './listPage.scss'
import {listdata} from '../../lib/dummydata'
import Filter from '../../components/filter/filter';

const ListPage = () => {

  const data = listdata;
  return (
    <div className='listPage'>
      <div className="listContainer">
        <div className="wrapper">
          <Filter/>
        </div>
      </div>
      <div className="mapContainer">Map</div>
    </div>
  )
}

export default ListPage