'use client'

import { CartContextProvider } from "@/app/hooks/useCart";

interface CartPorviderProps{
  children: React.ReactNode
}

const CartProvider: React.FC<CartPorviderProps> = ({children }) => {
  return ( 
    <CartContextProvider>
      {children}
    </CartContextProvider>
   );
}
 
export default CartProvider;