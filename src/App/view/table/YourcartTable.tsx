/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
// /* eslint-disable no-unused-vars */
// /* eslint-disable @next/next/no-html-link-for-pages */
// /* eslint-disable consistent-return */
// /* eslint-disable array-callback-return */
// /* eslint-disable react-hooks/exhaustive-deps */
// /* eslint-disable operator-assignment */
// /* eslint-disable react/self-closing-comp */

// import { useEffect, useState } from "react";
// import { Col } from "react-bootstrap";
// import { getCartValue } from "src/App/helpers/local-storage";
// import {
//   addCartItem,
//   getCartItems,
// } from "src/App/services/shopPage/shopServices";

// import CartComponent from "./cartComponent";
// import styles from "./YourcartTable.module.css";

// let subTotal = 0;
// let grandTotal = 0;

// export default function Table({
//   allCart,
//   calcTotaFunc,
//   productPriceArray,
// }: any) {
//   const [cartState, setCartState] = useState<any>();
//   const [image, setImage] = useState<any>([]);
//   const [productNames, setProductName] = useState<any>([]);
//   const [cartProductPrice, setCartProductPrice] = useState<any>();

//   const tallyTotal = (cartValues: any, priceArray: any) => {
//     subTotal = 0;
//     grandTotal = 0;
//     cartValues?.Carts?.map((el: any, index: any) => {
//       subTotal = priceArray[index] * el.quantity;
//       grandTotal = grandTotal + subTotal;
//       return grandTotal;
//     });
//     calcTotaFunc(grandTotal);
//   };

//   console.log(allCart, "allCartallCartallCartallCartallCart");
//   const getCart = async () => {
//     const cart = await getCartItems();
//     const responseVal = cart?.response?.data?.cart;
//     const cartPrices = cart?.response?.data?.productPrice;
//     setCartProductPrice(cart?.response?.data?.productPrice);
//     setImage(cart?.response?.data?.deviceImages);
//     setProductName(cart?.response?.data?.displayName);

//     let Total = 0;
//     responseVal?.Carts?.map((cartItem: any, index: any) => {
//       if (cartItem.productStatus) {
//         Total += cartPrices[index] * cartItem.quantity;
//       }
//       return Total;
//     });

//     setCartState(responseVal);
//     tallyTotal(responseVal, cart?.response?.data?.productPrice);
//   };

//   const deleteCartItem = (cartItemObjId: any) => {
//     const updatedCarts = cartState.Carts.filter(
//       (cartItem: any, index: any) => index !== cartItemObjId
//     );

//     let total = 0;
//     updatedCarts.forEach((cartItem: any) => {
//       if (cartItem.productStatus) {
//         total += cartItem.productPrice * cartItem.quantity;
//       }
//     });

//     const updatedImages = image.filter(
//       (img: any, index: any) => index !== cartItemObjId
//     );

//     const updatePrice = cartProductPrice.filter(
//       (price: any, index: any) => index !== cartItemObjId
//     );

//     setImage(updatedImages);
//     setCartProductPrice(updatePrice);

//     let subTotalnew = 0;
//     let grandTotalnew = 0;
//     updatedCarts.map((cartItem: any, index: any) => {
//       subTotalnew = updatePrice[index] * cartItem.quantity;
//       grandTotalnew += subTotalnew;
//     });

//     calcTotaFunc(grandTotalnew);
//     setCartState({ Carts: updatedCarts, Total: grandTotalnew });
//   };

//   const updateCartItemAtIndex = async (
//     index: number,
//     count: number,
//     addOrSub: number
//   ) => {
//     const updatedCartState = { ...cartState };
//     updatedCartState.Carts[index] = {
//       ...updatedCartState.Carts[index],
//       quantity: count,
//     };

//     setCartState(updatedCartState);
//     tallyTotal(updatedCartState, cartProductPrice);
//     const shopObj = {
//       cartItem: {
//         productType: updatedCartState.Carts[index].productType,
//         quantity: addOrSub,
//         productColor: updatedCartState.Carts[index].productColor,
//         productPrice: cartProductPrice[index] * addOrSub,
//         productStatus: updatedCartState.Carts[index].productStatus,
//       },
//     };

//     const resp = await addCartItem(shopObj);
//   };

//   // useEffect(() => {
//   //   getCart();
//   // }, []);

//   const getAllCartValues = () => {
//     const totalValue = getCartValue();
//     console.log(totalValue, "total");
//   };

//   useEffect(() => {
//     getAllCartValues();
//   }, []);
//   return (
//     <div className={styles.your_cart}>
//       <div className={styles.your_cart_section}>
//         <a href="/">
//           <span className={styles.home_color_head}>Home {" > "}</span>
//         </a>
//         <a href="/shopPage">
//           {" "}
//           <span className={styles.home_color_head}>Shop {" > "}</span>
//         </a>

//         <span className={styles.linkDevice_color_head}>Your Cart</span>

//         <h1 className={styles.linkDevice_heading}>Your Cart</h1>

//         <div className={styles.product}>
//           <div className={styles.product_list}>
//             <Col xl="4">Product</Col>
//             <Col xl="2">Price</Col>
//             <Col xl="2">Quantity</Col>
//             <Col xl="2">Subtotal</Col>
//           </div>
//           <div className={styles.orderLine} />
//           {cartState?.Carts?.map(
//             (el: any, index: any) =>
//               el && (
//                 <CartComponent
//                   id={el.id}
//                   productTitle={productNames[index]}
//                   quantity={el.quantity}
//                   price={cartProductPrice[index]}
//                   color={el.productColor}
//                   imgSrc={image[index]}
//                   index={index}
//                   orderId={el.orderId}
//                   deleteFunc={deleteCartItem}
//                   updateItemQunatity={updateCartItemAtIndex}
//                 />
//               )
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

/* eslint-disable no-unused-vars */
/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable operator-assignment */
/* eslint-disable react/self-closing-comp */

import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { getCartValue, setCartValue } from "src/App/helpers/local-storage";
import { addCartItem } from "src/App/services/shopPage/shopServices";

import CartComponent from "./cartComponent";
import styles from "./YourcartTable.module.css";

// let subTotal = 0;
// let grandTotal = 0;

export default function Table({
  allCarts,
  setAllCart,
  calcTotaFunc,
  productPriceArray,
  getCartItems,
}: any) {
  const [cartState, setCartState] = useState<any>();
  const [image, setImage] = useState<any>([]);
  const [productNames, setProductName] = useState<any>([]);
  const [cartProductPrice, setCartProductPrice] = useState<any>();

  const deleteCartItems = (id: any) => {
    const updatedCart = allCarts.filter((CartData: any) => CartData.id !== id);
    setCartValue(updatedCart);
    setAllCart(updatedCart);
    getCartItems();
  };

  return (
    <div className={styles.your_cart}>
      {allCarts === undefined ? (
        <p className={styles.noItem}>No Products added to cart</p>
      ) : (
        <div className={styles.your_cart_section}>
          <a href="/">
            <span className={styles.home_color_head}>Home {" > "}</span>
          </a>
          <a href="/shopPage">
            {" "}
            <span className={styles.home_color_head}>Shop {" > "}</span>
          </a>

          <span className={styles.linkDevice_color_head}>Your Cart</span>
          <h1 className={styles.linkDevice_heading}>Your Cart</h1>

          <div className={styles.cartDiv}>
            <div className={styles.cartRow}>
              <Row>
                <Col className={styles.order_img}>
                  <div>
                    <img src={allCarts[0]?.productImage} width="100px" />
                  </div>
                </Col>
                <Col className={styles.productTitleDiv}>
                  <h2>{allCarts[0]?.productType}</h2>
                  <Row className={styles.priceRow}>
                    <Col className={styles.priceQuantityHead}>Price</Col>
                    <Col className={styles.priceTag}>300.00</Col>
                  </Row>
                  <Row className={styles.quantityRow}>
                    <Col className={styles.priceQuantityHead}>Quantity</Col>
                    <Col></Col>
                  </Row>
                </Col>

                <Col>3</Col>
              </Row>
            </div>
            <div>Right</div>
          </div>

          {/* 
          <div className={styles.product}>
            <div className={styles.product_list}>
              <Col xl="4">Product</Col>
              <Col xl="2">Price</Col>
              <Col xl="2">Quantity</Col>
              <Col xl="2">Subtotal</Col>
            </div>
            <div className={styles.orderLine} />

            {allCarts?.map(
              (el: any, index: any) =>
                el && (
                  <CartComponent
                    id={el.id}
                    productTitle={el.productType}
                    quantity={el.quantity}
                    price={el.productPrice}
                    color={el.productColor}
                    imgSrc={el.productImage}
                    index={index}
                    // orderId={el.orderId}
                    deleteFunc={undefined}
                    updateItemQunatity={undefined}
                    // deleteFunc={deleteCartItem}
                    orderId={0} // updateItemQunatity={updateCartItemAtIndex}
                    deleteCartItems={deleteCartItems}
                    getCartItems={getCartItems}
                  />
                )
            )}
          </div> */}
        </div>
      )}
    </div>
  );
}
