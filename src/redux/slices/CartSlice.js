import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItem: [],
  Qty: 0,
  TotalAmount:[0],
  discountPrice:0,
}

const CartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItem.find((item) => item.id === newItem.id);
      state.Qty += 1;

      if (!existingItem) {
        state.cartItem.push({
          id: newItem.id,
          productName: newItem.productName,
          image: newItem.image,
          price: newItem.price,
          review:newItem.review,
          qty: 1,
          totalPrice: newItem.price,
          initialPrice:newItem.initialPrice,
        })
      }
      else {
        existingItem.qty += 1;
        existingItem.totalPrice = Number(existingItem.totalPrice) + Number(newItem.price);
        existingItem.initialPrice = Number(existingItem.initialPrice) + Number(newItem.initialPrice);
      }
      let temp=0
      state.TotalAmount = state.cartItem.map((el)=>{
        return temp += Number(el.price) * Number(el.qty);
      })

      let temp2=0
      state.discountPrice = state.cartItem.map((el) =>{
        return temp2 += Number(el.initialPrice);
      })
    
    }
  }
});

export const { addItem } = CartSlice.actions

export default CartSlice.reducer