
import {weather_data_store} from '../app/weather_data_store'

export const ViewRedux = () => {

    return (
        <div>
          <pre>
            {JSON.stringify(weather_data_store.getState(), null,2)}
          </pre>
        </div>
    )
}

