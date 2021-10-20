import React, { useContext, useEffect,useState } from "react";
import { Link } from "react-router-dom";
import image4 from '../../assets/images/ourproducts/1.png'
import { Icon, Image ,Modal,Form,Button,Input} from "semantic-ui-react";
import { GlobalContext } from "../../context/Provider";
import { useHistory } from "react-router";
import cart from "../../context/reducers/cart";
import Swal from "sweetalert2";
import clearcart from "../../context/actions/category/clearcart";
// import 'bootstrap/dist/css/bootstrap.min.css';
const CartUI = ({currentCart})=>{
    const {cartState,cartDispatch} = useContext(GlobalContext);
    const {cart:{cart_data}} = cartState;
    const {cart:{save_loader}} = cartState;
    const {cart:{error}} = cartState;
    // const [cartStore,setCartStore] =  useLocalStorage('cart',cart_data);
    //const  cart = localStorage.getItem("cart");
    //const pcart = JSON.parse(cart) != null ? JSON.parse(cart) : [];
    const history = useHistory()
    const localstorageVar = localStorage.getItem('cart') && JSON.parse(localStorage.getItem('cart')).length > 0 ? JSON.parse(localStorage.getItem('cart')):[];
    const [store,setStore] = useState([]);
    const [open,setOpen] =useState(false)
    const[fname,setfname]=useState();
    const[lname,setlname]=useState();
    const[email,setemail]=useState();
    const[phonenumber,setphonenumber]=useState();
    currentCart(store)
    useEffect(()=>{
        // localStorage.removeItem('cart')
        if(localStorage.getItem('cart') && JSON.parse(localStorage.getItem('cart')).length > 0){
            setStore(JSON.parse(localStorage.getItem('cart')))
               
        }
        if(error && error.length >0){
            Swal.fire(
                'An Error Occurred',
                error,
                'error'
              )
        }
    },[error])

    const deleteItem = (pname)=>{
        
         const newitems = localstorageVar.filter(x=>x.product_name != pname)
         localStorage.setItem('cart',JSON.stringify(newitems))
        setStore(store.filter(x=> x.product_name != pname));
        currentCart(store)
    }
    const handlefname =(e)=>{
        setfname(e.target.value)
    }
    const handlelname =(e)=>{
        setlname(e.target.value)
    }
    const handleemail =(e)=>{
        setemail(e.target.value)
    }
    const handlephonenumber =(e)=>{
        setphonenumber(e.target.value)
    }
    const sendMail=()=>{
        const contact = {
            fname:fname,
            lname:lname,
            email:email,
            phonenumber:phonenumber
        }
        const data = [store,contact];
        console.log('data',data)
        clearcart(data)(cartDispatch)
        
        // if(error.length == 0){
        //     localStorage.removeItem('cart')
        //     setOpen(false);
        //     Swal.fire(
        //         'Order Successfully Sent!',
        //         'You will get a callback from Our Marketing Team!',
        //         'success'
        //       )
        //       history.push('/boulos/exhibition');
        // }
        // else{
        //     console.log('error',error)
        // }
       
    }
    return(
        <div className="cartui">
             <Modal
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                >
                    <Modal.Header>Contact Form</Modal.Header>
                    <Modal.Content image>
                        <Image size='medium' src='https://react.semantic-ui.com/images/wireframe/image-square.png' wrapped />
                        <Modal.Description style={{width:'100%',marginTop:0}}>
                        <Form>
                            <Form.Field>
                            <label>First Name</label>
                            <input placeholder='First Name' onChange={handlefname} required value={fname} />
                            </Form.Field>
                            <Form.Field>
                            <label>Last Name</label>
                            <input placeholder='Last Name' required onChange={handlelname}  value={lname}/>
                            </Form.Field>
                            <Form.Field>
                                 <label>Email Address</label>
                                <input type="email" placeholder='Email Address' onChange={handleemail} value={email} required />
                            </Form.Field>
                            <Form.Field>
                                 <label>PhoneNumber</label>
                                <input type="number" placeholder='PhoneNumber' onChange={handlephonenumber} required />
                            </Form.Field>
                            <Button type='submit' loading={save_loader} disabled={save_loader} positive onClick={()=>{sendMail()}}>Submit</Button>
                            <Button onClick={() => setOpen(false)}>Cancel</Button>
                        </Form>
                        </Modal.Description>
                    </Modal.Content>
                   
               </Modal>
            <div className="cartUI-nav">
                <div><h1 className="h1-cart" >Your Cart</h1></div>
                <div className="h1-cart shopping" onClick={()=>{history.goBack()}} >Continue Shopping</div>
            </div>
            <hr/>
            <div>
                { store.length > 0 ? 
                    store.map((x)=>{
                    
                   return <div>
                        <div className="product_display">
                            <div className="product_display_img">
                                <Image
                                    src={`https://boulos.ng/lamberet/products/${x.imageurl}`}
                                    className="imgCart"
                                />
                            </div>
                            
                            <div className="product_display_name_div">
                                <h5 className="product_display_name">{x.product_name}</h5>
                                <div className="list">
                                    <li>{x.product_category}</li>
                                    <li>{x.application}</li>
                                    <li>{x.subapplication}</li>
                                    <li>{x.subapplication}</li>
                                    <li>{x.requiredtemp}</li>
                                    <li>{x.vanbox}</li>
                                    <li>{x.boxvolume}</li>

                                </div>
                                    
                            </div>
                            
                            <div>
                            <h5 className="close" onClick={()=>{deleteItem(x.product_name)}}><Icon name='close' /> </h5>
                            </div>
                            
                        </div>
                        <hr/>
                    </div>
                   
                })
                
                
                
                
                :<h1>NO ITEM IN CART</h1>}



                { store.length > 0  ? 
                    <div className="divbtn"> 
                        <div  className="confirmbtn" onClick={()=>{setOpen(true)}}>Send Order</div>
                    </div>:
                null}
                
            </div>
        </div>
    )
}



function useLocalStorage(key, initialValue) {
    // State to store our value
    // Pass initial state function to useState so logic is only executed once
    console.log('InitialValue',initialValue)
    const [storedValue, setStoredValue] = useState(() => {
      try {
        // Get from local storage by key
        
        // Parse stored json or if none return initialValue
    //    console.log('item',item ? JSON.parse(item) : initialValue)
        if(initialValue.length > 0){
            const item = window.localStorage.getItem(key);
            console.log('Here')
            return item ? JSON.parse(item) : initialValue;
        }
        else{
            console.log('Refreshed/Emptied')
            console.log('key',key)
            return JSON.parse(window.localStorage.getItem(key));
        }
        
      } catch (error) {
        // If error also return initialValue
        console.log(error);
        return initialValue;
      }
    });
    // Return a wrapped version of useState's setter function that ...
    // ... persists the new value to localStorage.
    const setValue = (value) => {
        console.log('setValue',value)
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