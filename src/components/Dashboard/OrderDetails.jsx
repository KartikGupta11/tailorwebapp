import React, { useEffect, useState, } from "react";
import { Link, useParams } from "react-router-dom";
// import db from '../../firebase';
import firebase from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import 'firebase/firestore';
import moment from "moment";




const OrderDetails = () => {
  let { id } = useParams();
  const [products, setProducts] = useState([]);

  const [data, setData] = useState([]);

  useEffect(() => {
    //
    // const getProducts = async () => {
    //   const res = await fetch(
    //     `https://fake-silan-server.herokuapp.com/product_data/${id}`
    //   );
    //   const resData = await res.json();
    //   setProducts(resData);
    // };
    // getProducts();
    ;

    // const fetchAll = () => {
    //   // e.preventDefault();
    //   db.collection("orders")
    //   .get()
    //   .then((snapshot) => {
    //     if(snapshot.docs.length > 0){
          
    //       snapshot.docs.forEach((doc) => {
    //         setAllDocs((prev)=>{
    //           return[...prev,doc.data()];
    //         });
    //       });
    //     }
    //   });
    //   console.log(data);
    //   fetchAll();
      
    // };

    // const fetchData = async()=>{
    //   try{
    //     const response =await firebase.firestore()
    //     .collection("orders")
    //     .doc(slug)
    //     .get();
    //     console.log('response',response);
    //     let data = {orderStatus:"ready"};
    //     if(response.exists){
    //       data = response.data();
    //     }
    //     setAllDocs(data);
        
    //   }
    //   catch(err){
    //     console.error(err);
    //   }
    // };
    // fetchData();

    // async function fetchData() {
    //   const q = query(collection(db, "orders"));
    //   onSnapshot(q, (querySnapshot) => {
    //     setAllDocs(
    //       querySnapshot.docs.map((doc) => ({
    //         id: doc.id,
    //         data: doc.data(),
            
    //       }))
    //     );
    //   });
    // }
    // fetchData();
    // console.log(data);
    // console.log(data[0].data.amount);
    const fetchData = async () => {
      const docRef = doc(db, "orders", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("data:", docSnap.data());
        setData(docSnap.data())
        console.log(id);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
      // fetchData();
      // console.log(id);
    };
    fetchData();
    console.log(id);
    
    
  }, []);
  



  return (
    <div className="order_det">
      <div className="line"></div>

      <div className="headline">
        <span>
          <Link to="/dashboard">Dashboard {">"}</Link>
        </span>

        <span className="order_det"> OrderDetails</span>
      </div>

      
      
      <div className="card card_main">
        <div className="cont_f">
          <div className="f1">
            <p>Order Id: {data.orderID}</p>
            <p>Type Of Clothing: {data.typeOfCloth}</p>
            <p>Type Of Stitch: {data.typeOfStich}</p>
            <p>Measurement: {data.measurement}</p>
            {/* <p>Measurement: {JSON.stringify(data.measurements)}</p> */}
            <p>Pick Up Date:{data.pickDate}</p>
            <p>Delivery Time: {data.deliveryTime}</p>
            <p>Amount: {data.amount}</p>
          </div>
          <div className="f2">
            <p>Reference image: </p>
            <div className="im">
              <img src={data.imgUrl} alt="prod" />
            </div>
            <div className="btn_date">
              <p className="delivery_date">Delivery Date: {moment(data.deliveryDate).format("Do MMMM YYYY")}</p>
              <button>Accept</button>
              <button>Reject</button>
              
            </div>
          </div>
          <div className="f3">
            <p>Comment:</p>
            <div className="comm">{data.comments}</div>
          </div>
        </div>
      </div>
    
      
    </div>
        
  );
};

export default OrderDetails;
