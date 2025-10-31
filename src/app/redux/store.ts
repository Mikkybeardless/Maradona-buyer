import { configureStore } from '@reduxjs/toolkit';
import authReducer, { logout } from './slices/authSlice';
import { persistReducer, persistStore } from 'redux-persist';
import { combineReducers } from 'redux';
// import storage from './storage/storage';
import storage from 'redux-persist/lib/storage';
import notificationsReducer from './slices/notificationSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'notifications'], // only persist the auth slice
};

const appReducer = combineReducers({
  auth: authReducer,
  notifications: notificationsReducer,
});

const rootReducer = (state, action) => {
  // When logout is dispatched, reset all state
  if (action.type === logout.type) {
    // persistor.purge(); // ensure purge runs within store
    return appReducer(undefined, action); // reset redux memory state
  }

  return appReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // to avoid Redux Persist warnings
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
