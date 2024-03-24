import { configureStore} from "@reduxjs/toolkit";
import UserProfile from './Slices/profile'
import  productsSlice  from "./Slices/productsSlice";
export default configureStore({
  reducer: {
    profile: UserProfile,
    productsList: productsSlice,
  },
});
