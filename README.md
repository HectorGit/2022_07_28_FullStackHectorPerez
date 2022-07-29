
# How to run this Repo : 

First please run the graphql-weather-api on port 4000 ( `npm run dev` ) [This is the GraphQL API that was provided]

Please run `npm install`
Please run `npm start`

The application front-end will fun on port 3000 🚀 !

# What I have done so far : 

I created a react app where I  set up an Apollo GraphQL client and a Redux store 

At the moment, nothing fancy is being displayed, I simply am showing the data that the Apollo Client is able to fetch from graphql-weather-api
I am similarly showing the data that the Redux store has within it

I have made a button that dispatches the action to store the data fetched by Apollo into the redux store.
A reducer identifies the type of the action dispatched and attempts to store the data in the action's payload within the redux store.

# What I would do if I had more time : 

Look into making UI components that would consume the data in the Redux store
Possibly use something like bootstrap or material-ui for laying them out