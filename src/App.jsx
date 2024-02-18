import './App.css'
import {HomeLayout} from "../src/pages/HomeLayout"
import {CookiesProvider} from "react-cookie"
import { createContext } from 'react'
let loginState = createContext();
function App() {
  let isLoggedIn = false;
  return (
    <>
      <CookiesProvider>
        <loginState.Provider value={isLoggedIn}>
          <HomeLayout/>
        </loginState.Provider>
      </CookiesProvider>
    </>
  )
}
export {App,loginState}