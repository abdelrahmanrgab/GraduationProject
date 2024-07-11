import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import screenReducer from "../features/screen/screenSlice";
import pagesReducer from "../features/templates/pagesSlice";
import websitesReducer from "../features/templates/websitesSlice";
import messagesReducer from "../features/messages/messagesSlice";
import ownTemplateReducer from "../features/templateData/ownTemplateSlice";
import templateReducer from "../features/templateData/templateSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  screen: screenReducer,
  pages: pagesReducer,
  websites: websitesReducer,
  ownTemplate: ownTemplateReducer,
  template1: templateReducer,
  messages: messagesReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["screen", "template1", "ownTemplate", "auth", "messages"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

export const persistor = persistStore(store);
