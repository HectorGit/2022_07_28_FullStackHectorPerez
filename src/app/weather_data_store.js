import { configureStore } from '@reduxjs/toolkit';
import { GET_DATA_INTO_REDUX_STORE_ACTION } from './actions'


const initialState = {
  id:"",
  name:"",
  country:"",
  coord:{
    lon:0.0,
    lat:0.0
  },
  weather:{
    summary:{
      title:"",
      decription:"",
      icon:""
    },
    temperature:{
      actual:0.0,
      feelsLike:0.0,
      min:0.0,
      max:0.0
    },
    wind:{
      speed:0.0,
      deg:0
    },
    clouds:{
      all:0,
      visibility:0,
      humidity:0
    },
    timestamp:0
  }
}

const weatherCityDataReducer = (state=initialState, action) => { 
  switch (action.type) {
    case GET_DATA_INTO_REDUX_STORE_ACTION:
      console.log("reducer called")
      console.log('action payload : ', action.payload)
      return {
        id : action.payload.id,
        name : action.payload.name,
        country : action.payload.country,
        coord : {
          lon : action.payload.lon,
          lat : action.payload.lat
        },
        weather:{
          summary:{
            title:action.payload.title,
            decription:action.payload.description,
            icon:action.payload.icon
          },
          temperature:{
            actual: action.payload.actual,
            feelsLike: action.payload.feelsLike,
            min: action.payload.min,
            max: action.payload.max,
          },
          wind:{
            speed: action.payload.speed,
            deg: action.payload.deg,
          },
          clouds:{
            all : action.payload.all,
            visibility : action.payload.visibility,
            humidity: action.payload.humidity
          },
          timestamp:action.payload.timestamp
        }
        
      }
    default:
      return state
  }

}

export const weather_data_store = configureStore({
  reducer:weatherCityDataReducer
});
