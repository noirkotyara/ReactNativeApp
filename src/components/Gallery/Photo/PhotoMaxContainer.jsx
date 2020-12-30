import { connect } from "react-redux"
import PhotoMax from "./PhotoMax";


let mapStateToProps = (state) => {
    return {
        currentPhoto: state.galleryPage.currentPhoto
    }
}

export default connect(mapStateToProps, {})(PhotoMax);