// import { useEffect, useState } from 'react';
// import productApi from './api/productApi.js';
import Login from './components/Heading/Login.js';

function App() {
    
    // const [productlist, setProductList] = useState([]);

    // useEffect(() => {
    //     const fetchProductlist = async () => {
    //         try {
    //             const response = await productApi.getAll();
    //             console.log(response);
    //         } catch (error) {
    //             console.log('Failed to fetch product list: ', error);
    //         }
    //         fetchProductlist();
    //     }
    // },[]);
    
    return(
        <div className="App">
            <Login />
        </div>
    );
}
export default App;

