import React from "react";
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import LayoutPublic from "./layouts/LayoutPublic";
import LayoutAdmin from "./layouts/LayoutAdmin";
import LayoutClient from "./layouts/LayoutClient";
import PageHome from "./pagepublic/PageHome";
import ProtectedRoutes from "./pageauth/ProtectedRoutes";
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import Login from "./pageauth/Login";
import Register from "./pageauth/Register";
import PanelAdmin from "./pageadmin/PanelAdmin";
import PanelClient from "./pagecliente/PanelClient";
import ListC from "./components/componentscl/ListC";
import ListD from "./components/componentsdr/ListD";
import Listg from "./components/componentsgui/ListGui";
import HomeG from "./components/componentsgui/HomeGui";
import HomeD from "./components/componentsdr/HomeD";
import HomeC from "./components/componentscl/HomeC";
import HomeTr from "./components/componentstr/HomeTr";
import ListTr from "./components/componentstr/ListTr";
import Homess from "./components/componentsSa/Homess";
import Listss from "./components/componentsSa/Listss";
import HomeTi from "./components/componentsTi/HomeTi";
import ListTi from "./components/componentsTi/ListTi";
import Homesa from "./components/componentsSale/Homesa";
import Listsa from "./components/componentsSale/Listsa";
import HomeRo from "./components/componentsRu/HomeRo";
import ListRo from "./components/componentsRu/ListRo";

const App = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<LayoutPublic/>}>
                    <Route index element={<PageHome/>} />
                    <Route path='/login' element={<Login/>} />
                    <Route path='/register' element={<Register/>} />
                

                </Route>
                <Route element={<ProtectedRoutes/>}>
                    <Route path="/admin" element={<LayoutAdmin/>}>
                    <Route index element={<PanelAdmin/>} />

                   <Route path="cliente" element={<ListC/>}/> 
                   <Route path="clientc" element={<HomeC/>}/>   
                   <Route path="driver" element={<ListD/>}/>  
                   <Route path="drivec" element={<HomeD/>}/>  
                   <Route path="guide" element={<Listg/>}/>  
                   <Route path="guidec" element={<HomeG/>}/>  
                   <Route path="transport" element={<ListTr/>}/>  
                   <Route path="transportc" element={<HomeTr/>}/>   
                   <Route path="journey" element={<Listss/>}/>  
                   <Route path="journeyc" element={<Homess/>}/> 
                   
                   <Route path="ticket" element={<ListTi/>}/>  
                   <Route path="ticketc" element={<HomeTi/>}/> 


                   <Route path="route" element={<ListRo/>}/>  
                   <Route path="routec" element={<HomeRo/>}/> 
                   
                   <Route path="sale" element={<Listsa/>}/>  
                   <Route path="salec" element={<Homesa/>}/> 
                
                   
                </Route>

                <Route path="/client" element={<LayoutClient/>}>
                    <Route index element={<PageHome/>} />
                    <Route index element={<PanelClient/>} />
                </Route> 
                </Route> 
            </Routes>
        </Router>
    )
}

export default App

if (document.getElementById('root')) {
    const Index = ReactDOM.createRoot(document.getElementById("root"));

    Index.render(
        
            <App/>
        
    )
}
