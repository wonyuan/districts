import './App.css';
import DataMap from '@/pages/DataMap';
//import getPlaceData from '@api/index';
//import {Attraction} from '@api/type';

export default function App() {
  //set data to state
  /*
  const [places, setPlaces] = useState<Attraction[]>([]);   useEffect(() => {

    getPlaceData()
    .then((data) => {
      console.log(data);
      setPlaces(data);
    })
  }, []);*/

  return (
    <div>
      <DataMap/>
    </div>
  );
}
