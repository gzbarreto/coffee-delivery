import { createContext} from "react";

interface Coffee {
  id: number;
  title: string;
  description: string;
  price: number;
  tags: string[];
  srcImg: string;
}

interface Address {
  cep: string;
  street: string;
  number: number;
  complement?: string;
  district: string;
  city: string;
  state: string;
}

interface OrderContextType {
  orderId: string
  coffeeList: Coffee[]
  address: Address;
  paymentMethod: string;
  deliveryFee: number;
}

export const OrderContext = createContext({} as OrderContextType)

export function OrderContextProvider({ children }: { children: React.ReactNode }) {

  return (
    <OrderContext.Provider value={{
  
    }}>
      {children}
    </OrderContext.Provider>
  );
}