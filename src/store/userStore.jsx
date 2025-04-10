import {configureStore} from '@reduxjs/toolkit';
import slice from '../slice/Slice.jsx';
import Signin from '../slice/SigninSlice.jsx';
import Cart from '../slice/CartSlice.jsx';
import Offer from '../slice/OfferSlice.jsx';
const userStore = configureStore({
	reducer:{
     count:slice,
     sign:Signin,
     cart:Cart,
     offer:Offer,
	},
})

export default userStore;