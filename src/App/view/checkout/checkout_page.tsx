/* eslint-disable no-plusplus */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
/* eslint-disable no-shadow */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
import "react-toastify/dist/ReactToastify.css";

import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button, Col } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import Footer from "src/App/components/ui/Footer/footer";
import NavBar from "src/App/components/ui/NavBar/_navbar";
import {
  getAccessToken,
  getCartValue,
  setPriceValue,
  setRouteValue,
} from "src/App/helpers/local-storage";
import Table from "src/App/view/table/YourcartTable";

import arrow from "../../../../public/order_page/checkout-arrow.svg";
import { getCartItems } from "../../services/shopPage/shopServices";
import styles from "./checkout_page.module.css";

function CheckoutPage() {
  const [cartState, setCartState] = useState<any>();
  const [cartTotal, setCartTotal] = useState(0);
  const [orderId, setOrderId] = useState();
  const [priceTotal, setPriceTotal] = useState<number | undefined>();
  const [allCart, setAllCart] = useState<any>();

  const Router = useRouter();
  // const getCart = async () => {
  //   const cart = await getCartItems();
  //   const responseVal = cart?.response?.data?.cart;

  //   const orderId = responseVal?.Carts[0].orderId;
  //   setOrderId(orderId);
  //   setCartState(responseVal);
  // };

  const getCartTotal = (cartTotals: any) => {
    setCartTotal(cartTotals);
    if (cartTotals === 0) {
      setCartState(undefined);
    }
  };

  const clickCheckOut = () => {
    const getToken = getAccessToken();
    if (getToken === null) {
      setRouteValue("/shippingDetails");
      Router.push("/login");
    } else {
      Router.push({
        pathname: "/shippingDetails",
        query: { orderId },
      });
    }
  };
  const checkFailure = () => {
    const failureCheck = Router.query?.isFailed;
    if (failureCheck === "1") {
      toast.error("Payment Failed", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  const getCartItems = () => {
    const getCartVal: any = getCartValue();
    const value = JSON.parse(getCartVal);
    setAllCart(value);
    let totalPrice = 0;
    for (let i = 0; i < value?.length; i++) {
      const item = value[i];
      totalPrice += item.productPrice * item.quantity;
    }
    setPriceTotal(totalPrice);
    setPriceValue(totalPrice);
  };

  useEffect(() => {
    getCartItems();
  }, []);

  return (
    <div>
      <ToastContainer />
      <NavBar />

      <div className="container">
        <Table
          allCarts={allCart}
          setAllCart={setAllCart}
          getCartItems={getCartItems}
        />

        {/* {allCart !== null ? (
          <>
            <div className={styles.orderLine}></div>
            <div className={styles.promoCode}>
              <Col xl={4} lg={5} md={12} sm={12} xs={12}>
                <Col>
                  <div className={styles.subtotal}>
                    <p>Subtotal :</p>
                    <p>{priceTotal}</p>
                  </div>
                  <div className={styles.line} />
                  <div className={styles.subtotal_total}>
                    <p>
                      TOTAL&nbsp;
                      <span style={{ fontSize: "12px" }}>
                        (Excluding Tax and Shipping Charges)
                      </span>
                      <br />
                      (INR)
                    </p>
                    <p>{priceTotal}/-</p>
                  </div>
                </Col>
                {priceTotal !== undefined ? (
                  <Button
                    type="button"
                    variant="none"
                    className={styles.checkoutbtn_checkout}
                    onClick={clickCheckOut}
                  >
                    Proceed to Checkout
                    <span>
                      <Image width={16} height={20} src={arrow} alt="bubbl" />
                    </span>
                  </Button>
                ) : (
                  <Button
                    type="button"
                    variant="none"
                    disabled
                    className={styles.checkoutbtn_checkout}
                    onClick={clickCheckOut}
                  >
                    Proceed to Checkout
                    <span>
                      <Image width={16} height={20} src={arrow} alt="bubbl" />
                    </span>
                  </Button>
                )}
              </Col>
            </div>
          </>
        ) : null} */}
      </div>

      <Footer />
    </div>
  );
}

export default CheckoutPage;
