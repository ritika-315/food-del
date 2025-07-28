import { useEffect, useContext } from 'react'
import './Verify.css'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { toast } from "react-toastify";

const Verify = () => {
    const [searchParams,setSearchParams] = useSearchParams();
    const success = searchParams.get("success");
    const orderId = searchParams.get("orderId");
    const {url} = useContext(StoreContext);
    const navigate= useNavigate();

    // const verifyPayment=async()=>{
    //     const response= await axios.post(url+"/api/order/verify",{success,orderId});
    //     if(response.data.success){
    //         navigate("/myorders");
    //         toast.success("Order Placed Successfully");
    //     }else{
    //         toast.error("Something went wrong");
    //         navigate("/");
    //     }
    // }
    const verifyPayment = async () => {
  console.log("Verifying payment with:", { success, orderId }); // 🔍 Add this here

  try {
    const response = await axios.post(url + "/api/order/verify", { success, orderId });
    console.log("Verify API response:", response.data); // ✅ Optional, helpful for debugging

    if (response.data.success) {
      navigate("/myorders");
      toast.success("Order Placed Successfully");
    } else {
      toast.error("Something went wrong");
      navigate("/");
    }
  } catch (error) {
    console.error("Error during verifyPayment:", error); // ❗ Good for catching backend or network issues
    toast.error("Verification failed");
    navigate("/");
  }
};


    useEffect(()=>{
        verifyPayment();
    },[])


  return (
    <div className='verify'>
        <div className="spinner"></div>
    </div>
  )
}

export default Verify
