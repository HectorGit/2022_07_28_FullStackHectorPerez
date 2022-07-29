
import { useQuery, gql} from '@apollo/client';
import { GET_DATA_INTO_REDUX_STORE_ACTION } from '../app/actions'
import {weather_data_store} from '../app/weather_data_store'
import { ViewRedux } from './viewRedux';
import { ViewWeatherDetails } from './viewWeatherFromRedux';

const GET_CITY_BY_NAME = gql`
query{ 
  getCityByName(name:"Guatemala", config:{units:metric, lang:en}){
   id
   name
   country
   coord {
     lon
     lat
   }
   weather{
     summary{
       title
       description
       icon
     }
     temperature{
       actual
       feelsLike
       min
       max
     }
     wind{
       speed
       deg
     }
     clouds{
       all
       visibility
       humidity
     }
     timestamp
   }
 }
}
`;

// *** I am not using this query at the moment .
// const GET_CITY_BY_ID = gql`
//   query{ 
//     getCityById(id:"6173331", config:{units:metric, lang:en}){
//     id
//     name
//     country
//     coord {
//       lon
//       lat
//     }
//     weather{
//       summary{
//         title
//         description
//         icon
//       }
//       temperature{
//         actual
//         feelsLike
//         min
//         max
//       }
//       wind{
//         speed
//         deg
//       }
//       clouds{
//         all
//         visibility
//         humidity
//       }
//       timestamp
//     }
//   }
//   }
// `; 

//define an action to get the data into the redux store.
export function getDataIntoReduxStore(data) {

  let simplifier = data.getCityByName
  console.log("simplifier" , simplifier)

  let payload = {
    id : simplifier.id,
    name : simplifier.id,
    lon : simplifier.coord.lon,
    lat : simplifier.coord.lat,
    title : simplifier.weather.summary.title,
    description : simplifier.weather.summary.description,
    icon : simplifier.weather.summary.icon,
    actual : simplifier.weather.temperature.actual,
    feelsLike : simplifier.weather.temperature.feelsLike,
    min : simplifier.weather.temperature.min,
    max : simplifier.weather.temperature.max,
    speed : simplifier.weather.wind.speed,
    deg : simplifier.weather.wind.deg,
    all : simplifier.weather.clouds.all,
    visibility : simplifier.weather.clouds.visibility,
    humidity : simplifier.weather.clouds.humidity,
    timestamp : simplifier.weather.timestamp
  }

  console.log('payload', payload)

  return {
     type: GET_DATA_INTO_REDUX_STORE_ACTION,
     payload
  }
}

export const DisplayWeatherDataComponent = () => {
    const { loading, error, data } = useQuery(GET_CITY_BY_NAME);

    if (loading) return <div><p>'Loading...'</p></div>;
    if (error) return <div><p>`Error! ${error.message}`</p></div>;

    console.log("data fetched by Apollo GraphQL client : " , data)

    return (
        <div>

          <button onClick= { () =>{weather_data_store.dispatch(getDataIntoReduxStore(data))} }>
            Get Weather Data
          </button>


          <h1>This is provided by the Redux Store Provider. After the button is clicked, the state within the store should be updated</h1>
          <ViewRedux/>

          <h1>This is a nicer looking way to display the data stored in the Redux store</h1>
          <ViewWeatherDetails/>

          <h1>This is provided by the Apollo Client Provider (Which fetches data from the graphql-weather-api server at port 4000)</h1>
            <pre>
                {JSON.stringify(data, null, 2)}
            </pre>

        </div>
    )
}

