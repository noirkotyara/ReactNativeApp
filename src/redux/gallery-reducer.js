import types from './types'

const initialState = {
    gallery: [],
    currentPhoto: null
}
const galleryPage = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_PHOTOS: {
            return {
                ...state,
                gallery: action.gallery
            }
        }
        case types.SET_CURRENT_PHOTO: {
            let photo = state.gallery.filter(item => item.id === action.id)
            return {
                ...state,
                currentPhoto: photo[0]
            }
        }
        default: {
            return state
        }
    }
}




export default galleryPage;