import React, { useEffect, useState } from "react";
import logo from "../Login/LOGO.png";
import { doc, getDocs } from "firebase/firestore";
import "./dashboard.css";
import "../Profile/profile.css";
import { Link, NavLink } from "react-router-dom";
import { collection, query, orderBy, onSnapshot, where,updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import 'firebase/firestore';
import { useParams } from "react-router-dom";
import { format } from 'date-fns'
import moment from "moment";
// import db from '../../firebase';

const Allorders = () => {
  // const [products, setProducts] = useState([]);
  
  const [allDocs, setAllDocs] = useState([]);
  const [id,setId]= useState();
  

  const [products, setProducts] = useState([]);
  // async function fetchData() {
  //   const q =  query(collection(db, "orders"));
  //   onSnapshot(q, (querySnapshot) => {
  //     setAllDocs(
  //       querySnapshot.docs.map((doc) => ({
  //         id: doc.id,
  //         data: doc.data(),

  //       }))
  //     );
  //   });
  // }

  useEffect(() => {
    // const getProducts = async () => {
    //   const res = await fetch(
    //     `https://fake-silan-server.herokuapp.com/product_data`
    //   );
    //   const data = await res.json();
    //   setProducts(data);
    // };
    // getProducts();


    // const fetchAll = (e) => {
    //   e.preventDefault();
    //   db.collection("orders")
    //   .get()
    //   .then((snapshot) => {
    //     if(snapshot.docs.length > 0){
    //       snapshot.docs.forEach((doc) => {
    //         setProducts((prev)=>{
    //           return[...prev,doc.data()];
    //         });
    //       });

    //     }
    //   });
    //   console.log(products);
    //   fetchAll();
    // }



    async function fetchData() {
      //   const q =  query(collection(db, "orders")); 
      //   onSnapshot(q, (querySnapshot) => {
      //     setAllDocs(

      //       querySnapshot.docs.map((doc) => ({
      //         id: doc.id,
      //         data: doc.data(),


      //       }))
      //     );
      //   });


      // var ref = await _firebaseFirestore
// .collection('orders')
// .where('orderID', isEqualTo: orderId);

//orderStatus="accepted"

// var snap = await ref.get();
// await _firebaseFirestore
// .collection('orders')
// .doc(snap.docs[0].reference.id)
// .update(
//   order.toMap(),
// );


      const q = query(collection(db, "orders"), where("orderStatus", "==", "placed"),);
         onSnapshot(q, (querySnapshot) => {
          setAllDocs(
            querySnapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    }
    fetchData();
    console.log(allDocs);

    





  }, []);
 // var ref = await _firebaseFirestore
// .collection('orders')
// .where('orderID', isEqualTo: orderId);

//orderStatus="accepted"

// var snap = await ref.get();
// await _firebaseFirestore
// .collection('orders')
// .doc(snap.docs[0].reference.id)
// .update(
//   order.toMap(),
// );


const updateHandler = async (id) => {
  // e.preventDefault()
  console.log(id);
  const taskDocRef = doc(db, "orders" ,id);
  // console.log(id)
  try {
    await updateDoc(taskDocRef, {
      orderStatus: 'accepted'
    });
  } catch (err) {
    console.log(err);
  }
  
  // setAllDocs(false);
  console.log(id)
  
};



  return (
    <div className="dashboard">
      {/* <nav className="navbar bg">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">
            <img src={logo} alt="logo" className="logo_head" />
          </span>
        </div>
      </nav> */}

      {/* dashboard navigation */}
      {/* <div className="navigation">
        <div className="first_navigation">Hello Sneha!</div>
        <div className="second_navigation">
          <ul>
            <li>Dashboard</li>
            <li>Report</li>
            <li>Profile</li>
          </ul>
        </div>
      </div> */}

      {/* line */}
      <div className="line"></div>

      {/* category navigation */}
      <div className="category_nav">
        <div>
          <NavLink to="/dashboard"> All Orders</NavLink>
        </div>

        <div>
          <NavLink to="/dashboard/accepted">Accepted Orders</NavLink>
        </div>

        <div>
          <NavLink to="/dashboard/rejected">Rejected Orders</NavLink>
        </div>
      </div>

      <div className="filter">
        <div className="btn-group dropdown fil">
          <button
            className="btn btn-secondary btn_impo dropdown-toggle btn_pink"
            type="button"
            // id="dropdownMenu2"
            data-bs-toggle="dropdown"
            data-bs-auto-close="false"
            id="dropdownMenuClickable"
            aria-expanded="false"
          >
            filter
          </button>
          <ul
            className="dropdown-menu drop_width"
            style={{ width: "540px" }}
            aria-labelledby="dropdownMenuClickable"
          >
            {/* start */}

            <div className="collp">
              {/* collapse start   className="bt_toggle coll_tog " <span className="date">20 May 2022</span> */}
              <a
                className="btn btn_collap"
                data-bs-toggle="collapse"
                href="#collapseExample1"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample1"
              >
                Monday<span className="date">20 May 2022</span>
              </a>

              <div className="collapse " id="collapseExample1">
                <div className="card card-body card_body1">
                  <table>
                    <tr>
                      <th>Time</th>
                      <th>Status</th>
                    </tr>
                    <tr>
                      <td>9:00 am - 12:00 pm</td>

                      <td><div>
                        <select>
                          <option value="Available">Available</option>
                          <option value="UnAvailable">UnAvailable</option>
                        </select>
                      </div></td>
                    </tr>
                    <tr>
                      <td>12:00 pm - 3:00 pm</td>
                      <td><div>
                        <select>
                          <option value="Available">Available</option>
                          <option value="UnAvailable">UnAvailable</option>
                        </select>
                      </div></td>
                    </tr>
                    <tr>
                      <td>3:00 pm - 6:00 pm</td>
                      <td><div>
                        <select>
                          <option value="Available">Available</option>
                          <option value="UnAvailable">UnAvailable</option>
                        </select>
                      </div></td>
                    </tr>
                  </table>
                </div>
              </div>

              {/* collapse end */}

              {/* collapse start */}
              <a
                className="btn btn_collap"
                data-bs-toggle="collapse"
                href="#collapseExample"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                Tuesday<span className="date">20 May 2022</span>
              </a>
              <div className="collapse" id="collapseExample">
                <div className="card card-body card_body1">
                  <table>
                    <tr>
                      <th>Time</th>
                      <th>Status</th>
                    </tr>
                    <tr>
                      <td>9:00 am - 12:00 pm</td>
                      <td><div>
                        <select>
                          <option value="Available">Available</option>
                          <option value="UnAvailable">UnAvailable</option>
                        </select>
                      </div></td>
                    </tr>
                    <tr>
                      <td>12:00 pm - 3:00 pm</td>
                      <td><div>
                        <select>
                          <option value="Available">Available</option>
                          <option value="UnAvailable">UnAvailable</option>
                        </select>
                      </div></td>
                    </tr>
                    <tr>
                      <td>3:00 pm - 6:00 pm</td>
                      <td><div>
                        <select>
                          <option value="Available">Available</option>
                          <option value="UnAvailable">UnAvailable</option>
                        </select>
                      </div></td>
                    </tr>
                  </table>
                </div>
              </div>

              {/* start */}
              <a
                className="btn btn_collap"
                data-bs-toggle="collapse"
                href="#collapseExample2"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample2"
              >
                Wednesday<span className="date2">20 May 2022</span>
              </a>
              <div className="collapse" id="collapseExample2">
                <div className="card card-body card_body1">
                  <table>
                    <tr>
                      <th>Time</th>
                      <th>Status</th>
                    </tr>
                    <tr>
                      <td>9:00 am - 12:00 pm</td>
                      <td><div>
                        <select>
                          <option value="Available">Available</option>
                          <option value="UnAvailable">UnAvailable</option>
                        </select>
                      </div></td>
                    </tr>
                    <tr>
                      <td>12:00 pm - 3:00 pm</td>
                      <td><div>
                        <select>
                          <option value="Available">Available</option>
                          <option value="UnAvailable">UnAvailable</option>
                        </select>
                      </div></td>
                    </tr>
                    <tr>
                      <td>3:00 pm - 6:00 pm</td>
                      <td><div>
                        <select>
                          <option value="Available">Available</option>
                          <option value="UnAvailable">UnAvailable</option>
                        </select>
                      </div></td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>

            {/* end */}
          </ul>
        </div>
        <div className="total_order">Total orders:300</div>
      </div>

      <div className="products">
        {allDocs.map((item) => {
          return (
            <>
              <div className="div_item">
                <div className="first_prod">
                  <img src={item.data.imgUrl} alt="prod_img" />
                </div>
                <div className="second_prod">
                  <p>Order Id: {item.data.orderID}</p>
                  <p>Type Of Clothing: {item.data.typeOfCloth}</p>
                  <p>Type of Slitch: {item.data.typeOfStich}</p>
                </div>
                <div className="third_prod">
                  <p>Delivery Date: {moment(item.data.deliveryDate).format("Do MMMM YYYY")}</p>
                  {/* <p>Delivery Date: { Date(item.data.deliveryDate)}</p> */}
                  <button onClick={()=>{
                    // setId(item.id);
                      // console.log(item.id)
                      updateHandler(item.id);}}> Accept</button>
                  <button>Decline</button>
                  {/* <button onClick={fetchAll}>ready orders</button> */}
                </div>
                <div className="fourth_prod">
                  <p>Status:{item.data.orderStatus}</p>
                  <p>
                    <Link to={`/dashboard/orderDetails/${item.id}`}>
                      View Details
                    </Link>
                  </p>
                </div>
              </div>
            </>
          );
        })}
        <div className="more">view more</div>
      </div>
    </div>
  );
};

export default Allorders;


// var ref = await _firebaseFirestore
// .collection('orders')
// .where('orderID', isEqualTo: orderId);

//orderStatus="accepted"

// var snap = await ref.get();
// await _firebaseFirestore
// .collection('orders')
// .doc(snap.docs[0].reference.id)
// .update(
//   order.toMap(),
// );