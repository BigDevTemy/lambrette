import React, { useContext, useEffect,useState } from "react";
import { Link } from "react-bootstrap-icons";
import image4 from '../../assets/images/ourproducts/1.png'
import { Icon, Image } from "semantic-ui-react";
import { GlobalContext } from "../../context/Provider";
// import 'bootstrap/dist/css/bootstrap.min.css';
const CartUI = ()=>{
    const {cartState,cartDispatch} = useContext(GlobalContext)
    const {cart:{cart_data}} = cartState
   console.log('cartPageI',cart_data)
   const [cartStore,setCartStore] = useLocalStorage('cart',cart_data)
    
    return(
        <div className="cartui">
            <div className="cartUI-nav">
                <div><h1 className="h1-cart" >Your Cart</h1></div>
                <div className="h1-cart shopping" >Continue Shopping</div>
            </div>
            <hr/>
            <div>
                {cartStore && cartStore.length > 0 ? 
                cartStore.map((x)=>{
                   return <div>
                        <div className="product_display">
                            <div className="product_display_img">
                                <Image
                                    src={image4}
                                    className="imgCart"
                                />
                            </div>
                            
                            <div className="product_display_name_div">
                                <h5 className="product_display_name">{x.product_name}</h5>
                            </div>
                            <div>
                            <h5 className="close"><Icon name='close' /> </h5>
                            </div>
                            
                        </div>
                        <hr/>
                    </div>
                   
                })
                
                
                
                
                :<h1>NO ITEM IN CART</h1>}


{/* 
                <div className="product_display">
                    <div className="product_display_img">
                        <Image
                            src={image4}
                            className="imgCart"
                        />
                    </div>
                    
                    <div className="product_display_name_div">
                         <h5 className="product_display_name">LK-180/200</h5>
                    </div>
                    <div>
                    <h5 className="close">X</h5>
                    </div>
                    
                </div>
                <hr/>
                <div className="product_display">
                    <div className="product_display_img">
                        <Image
                            src={image4}
                            className="imgCart"
                        />
                    </div>
                    
                    <div className="product_display_name_div">
                         <h5 className="product_display_name">LK-580</h5>
                    </div>
                    <div>
                    <h5 className="close">X</h5>
                    </div>
                    
                </div>
                <hr/> */}
                {cart_data && cart_data.length > 0 ? 
                    <div className="divbtn">
                        <div className="cancelbtn">Cancel</div>
                        <div  className="confirmbtn">Confirm</div>
                    </div>:
                null}
                
            </div>
        </div>
    )
}



function useLocalStorage(key, initialValue) {
    // State to store our value
    // Pass initial state function to useState so logic is only executed once
    const [storedValue, setStoredValue] = useState(() => {
      try {
        // Get from local storage by key
        const item = window.localStorage.getItem(key);
        // Parse stored json or if none return initialValue
       
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        // If error also return initialValue
        console.log(error);
        return initialValue;
      }
    });
    // Return a wrapped version of useState's setter function that ...
    // ... persists the new value to localStorage.
    const setValue = (value) => {
      try {
        // Allow value to be a function so we have same API as useState
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;
        // Save state
        setStoredValue(valueToStore);
        // Save to local storage
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (error) {
        // A more advanced implementation would handle the error case
        console.log(error);
      }
    };
    return [storedValue, setValue];
  }

  export default CartUI;