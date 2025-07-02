import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Checkout } from "./pages/Checkout"
import { DefaultLayout } from "./layout/DefaultLayout"
import { OrderConfirmed } from "./pages/Checkout/OrderConfirmed"

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<OrderConfirmed />} />
      </Route>
    </Routes>
  )
}
