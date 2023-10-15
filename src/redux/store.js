import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { todoApi } from './slice/todo';

const store = configureStore({
  reducer: {
    [todoApi.reducerPath]: todoApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todoApi.middleware),
});

setupListeners(store.dispatch);

export default store;
