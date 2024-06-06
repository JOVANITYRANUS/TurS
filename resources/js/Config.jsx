import axios from "axios";

 
 const base_api_url = "http://localhost:8000/api/V1"; 

 //route
   const header = {
      Authorization: `Bearer ${sessionStorage.getItem('token')}`
   }

 export default {

   //auth
    getRegister:(data)=>axios.post(`${base_api_url}/auth/register`, data),
    getLogin:(data)=>axios.post(`${base_api_url}/auth/login`, data),
    getLogout:()=>axios.post(`${base_api_url}/auth/logout`,{ header }),


    //rol admin
    //getCli:(data)=>axios.get(`${base_api_url}/admin/cliente`, data),////
    getDri:(data)=>axios.get(`${base_api_url}/admin/driver`, data),////
    getGui:(data)=>axios.get(`${base_api_url}/admin/guide`, data),////
    getGuic:(data)=>axios.post(`${base_api_url}/admin/addnewg`, data),////
    //vista
    //getClientAll:(data)=>axios.get(`${base_api_url}/admin/addnewg`, data),
    //
    getDriverAll:(data)=>axios.get(`${base_api_url}/admin/driver`, data),
    getDriverStore:(data)=>axios.post(`${base_api_url}/admin/driver`, data),//
////
    
    getClientAlll:(data)=>axios.get(`${base_api_url}/admin/client`, data),
    getCliStore:(data)=>axios.post(`${base_api_url}/admin/client`, data),//

    
    getGuideAll:(data)=>axios.get(`${base_api_url}/admin/guide`, data),
    getGuideStore:(data)=>axios.post(`${base_api_url}/admin/guide`, data),//

    getTransportAll:(data)=>axios.get(`${base_api_url}/admin/transport`, data),
    getTransportStore:(data)=>axios.post(`${base_api_url}/admin/transport`, data),//

    getTransAll:(data)=>axios.get(`${base_api_url}/admin/drivtrans`, data),
    getTransStore:(data)=>axios.post(`${base_api_url}/admin/drivtrans`, data),//

    getJourAll:(data)=>axios.get(`${base_api_url}/admin/journey`, data),
    getJourStore:(data)=>axios.post(`${base_api_url}/admin/journey`, data),//

    
    getRouteAll:(data)=>axios.get(`${base_api_url}/admin/route`, data),
    getRouteStore:(data)=>axios.post(`${base_api_url}/admin/route`, data),//
    
    getTickAll:(data)=>axios.get(`${base_api_url}/admin/ticket`, data),
    getTickStore:(data)=>axios.post(`${base_api_url}/admin/ticket`, data),//
    
    getSaleAll:(data)=>axios.get(`${base_api_url}/admin/sale`, data),
    getSaleStore:(data)=>axios.post(`${base_api_url}/admin/sale`, data),//
    

 } 