
import {weather_data_store} from '../app/weather_data_store'

export const ViewWeatherDetails = () => {

    return (
        <div>
          <p> Id : {weather_data_store.getState().id}</p>
          <p> Name : {weather_data_store.getState().name}</p>
          <p> Coord Longitude: {weather_data_store.getState().coord.lon}</p>
          <p> Weather Description: {weather_data_store.getState().weather.summary.decription}</p>
        </div>
    )
}

