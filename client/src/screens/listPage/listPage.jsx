import './listPage.scss'
import {listdata} from '../../lib/dummydata'
import Filter from '../../components/filter/filter';
import Card from '../../components/card/Card';
import Map from '../../components/map/Map';

const ListPage = () => {

  const data = listdata;
  return (
    <div className='listPage'>
      <div className="listContainer">
        <div className="wrapper">
          <Filter/>  
          {data.map(item => (
            <Card key={item.id} item = {item}/>
          ))}
        </div>
      </div>
      <div className="mapContainer">
        <Map/>
      </div>
    </div>
  )
}

export default ListPage