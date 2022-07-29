import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { weather_data_store } from './app/weather_data_store';
import App from './App';

import { ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
});

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <ApolloProvider client={client}>
      <Provider store={weather_data_store}>
        <App/>
      </Provider>
    </ApolloProvider>,
);

