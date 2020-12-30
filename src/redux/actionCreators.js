import types from './types';
export const setPhotos = (gallery) => ({type: types.SET_PHOTOS, gallery});
export const setCurrentPhoto = (id) => ({type: types.SET_CURRENT_PHOTO, id});
