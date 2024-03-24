import { configureStore} from "@reduxjs/toolkit";
import UserProfile from './Slices/profile'
export default configureStore( {
    reducer: {
        profile: UserProfile,
    }
})
