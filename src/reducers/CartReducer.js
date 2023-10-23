import { saveCartOfUser } from "../database/UserData";

export const cart = (
  state = [],
  action,
) => {
  console.log('==========')
  console.log('action.payload', action)
  console.log('==========')
  switch (action.type) {
    case 'ADD_TO_CART':
      const data = JSON.parse(JSON.stringify(state));
      const pro = data.find(item => item.productVariantId == action.payload.productVariantId)
      if(pro) {
        pro.quantity = pro.quantity+1;
      } else {
        data.push({
          productId: action.payload.productId,
          productVariantId: action.payload.productVariantId,
          quantity: 1,
        })
      }
      saveCartOfUser(data);
      return data;
      break

    case 'REMOVE_FROM_CART':
      const remove_data = JSON.parse(JSON.stringify(state));
      const remove_pro = remove_data.find(item => item.productVariantId == action.payload.productVariantId)
      if(remove_pro.quantity > 1) {
        remove_pro.quantity = remove_pro.quantity-1;
      } else {
        let index = remove_data.findIndex((item)=> item.productVariantId == action.payload.productVariantId);
        remove_data.splice(index, 1);
      }
      saveCartOfUser(remove_data);
      return remove_data;
      break
   
    case 'INITIALIZE_CART':
      saveCartOfUser(action.payload);
      return action.payload;
      break

    default:
      
      return state
  }
}
