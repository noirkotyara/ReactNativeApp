import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import galleryPage from './gallery-reducer';

const rootReducers = combineReducers({
    galleryPage: galleryPage
})

export const store = createStore(rootReducers, applyMiddleware(thunkMiddleware));