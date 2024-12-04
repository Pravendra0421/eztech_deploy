import Home from "./Home";
import Product from "./Product";
import Services from "./Services";
import { useEffect, useState } from "react";
import Loader from "../common/Loader";
import Header from "./Header";
import ContactPage from "./Contact";
const Layout = () => {
    const [isloading, setloading] =useState(true);
    useEffect(()=>{
        const timer = setTimeout(()=>{
            setloading(false);
        },1000); //3 second delay
        return ()=>clearTimeout(timer);
    },[])
  return (
    <div className="overflow-hidden">
        {isloading?(<Loader/>):(
            <>
            <Header />
            <Home/>
            <Services/>
            <Product/>
            <ContactPage/>
            </>
        )}
    </div>
  )
}

export default Layout