import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      //state.value += 1
      state.items = [...state.items, action.payload]
    },
    removeFromBasket: (state, action) => {
      //state.value -= 1
      const index = state.items.findIndex((item)=> item.id === action.payload.id);
      let newBasket = [...state.items];
      if(index >= 0){
        newBasket.splice(index, 1);
      }
      else{
        console.warn(`can't remove product with Id ${action.payload.id}`)
      }

      state.items = newBasket;
    },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions;
export const selectBasketItems = (state) => state.basket.items;
export const getBasketTotal = (state) => state.basket.items.reduce((total, item) => 
total += item.price, 0);
export const selectBasketItemWithId = (state, id) => 
state.basket.items.filter(x=>x.id === id);

export default basketSlice.reducer