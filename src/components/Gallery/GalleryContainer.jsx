import { connect } from "react-redux"
import { setCurrentPhoto } from "../../redux/actionCreators";
import { setPhotosThunkCreator } from "./../../redux/thunk";
import GalleryScreen from "./Gallery";

let mapStateToProps = (state) => {
    return {
        gallery: state.galleryPage.gallery,
        currentPhoto: state.galleryPage.currentPhoto
    }
}

export default connect(mapStateToProps, {
    setCurrentPhoto,
    setPhotosThunkCreator
})(GalleryScreen);