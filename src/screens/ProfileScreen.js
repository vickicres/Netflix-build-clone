import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import Nav from "../Nav";
import "./ProfileScreen.css";
import PlansScreen from "./PlansScreen";

function ProfileScreen() {
    // const [products, setProducts] = useState([]);
    const user = useSelector(selectUser);

    // useEffect (() => {
    //     db.collection("products")
    //     .where("active","==", true)
    //     .get()
    //     .then((querySnapshot) => {
    //         const products = {};
    //         querySnapshot.forEach(async (productDoc) => {
    //             products[productDoc.id] = productDoc.data();
    //             const priceSnap = await productDoc.ref.collection
    //             ("prices").get();
    //             priceSnap.docs.forEach((price) => {
    //                 products[productDoc.id].prices = {
    //                     priceId: price.id,
    //                     priceData: price.data(),

    //                 };
    //             });
    //         });
    //         setProducts(products);
    //     });

    // }, []);

    // console.log(products);
        
  return (
    <div className="profileScreen">
        <Nav />
        <div className="profileScreen_body">
            <h1>Edit Profile</h1>
            <div className="profileScreen_info">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt=""/>
                <div className="profileScreen_details">
                    <h2>{user.email}</h2>
                    <div className="profileScreen_plans">
                        <h3>Plans(Current Plan:)</h3>

                        <PlansScreen />
                        <button 
                        onClick={() => auth.signOut()}
                        className="profileScreen_signOut">Sign Out</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default ProfileScreen;