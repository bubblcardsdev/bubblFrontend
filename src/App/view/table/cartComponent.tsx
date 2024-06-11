/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/router";
import { KeyboardEventHandler, useState } from "react";
import { Button, Col } from "react-bootstrap";
import { toast } from "react-toastify";
import {
  getAccessToken,
  getCartValue,
  setCartValue,
} from "src/App/helpers/local-storage";
import {
  addCartItem,
  cancelCart,
} from "src/App/services/shopPage/shopServices";

import styles from "./YourcartTable.module.css";

export default function CartComponent({
  id,
  productTitle,
  price,
  imgSrc,
  quantity,
  index,
  color,
  orderId,
  deleteFunc,
  updateItemQunatity,
  deleteCartItems,
  getCartItems,
}: {
  id: any;
  productTitle: string;
  price: number;
  quantity: number;
  imgSrc: any | StaticImageData;
  index: number;
  orderId: number;
  color: any;
  deleteFunc: any;
  updateItemQunatity: any;
  deleteCartItems: any;
  getCartItems: any;
}) {
  const router = useRouter();
  const [itemCount, setItemCount] = useState(quantity);

  const addToCartValue = async () => {
    const token = getAccessToken();
    if (token !== null) {
      // serialize the product to be added to cart
      const cartObj = {
        productType: productTitle,
        quantity: itemCount,
        productColor: color,
        productPrice: price,
        productStatus: true, // to be removed one API updated
      };
      const cartItemObj = {
        cartItem: cartObj,
      };
      const response = await addCartItem(cartItemObj);
      if (response?.res?.data?.success) {
        toast.success("Cart added Successfully", {
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        router.push("/checkout");
      }
    } else {
      router.push("/login");
    }
  };
  // addToCartValue();

  const decrementCount = (productId: number) => {
    const getAllItems: any = getCartValue();
    const parseValue = JSON.parse(getAllItems);
    const updatedVal = parseValue.map((value: any) => {
      if (value.id === productId) {
        return { ...value, quantity: value.quantity - 1 };
      }
      return value;
    });
    setCartValue(updatedVal);
    getCartItems();
  };

  const decrementCountKeyHandler: KeyboardEventHandler = (event) => {
    // if (event.code === "Enter") {
    //   decrementCount();
    // }
  };

  const incrementCount = (productId: number) => {
    const getAllItems: any = getCartValue();
    const parseValue = JSON.parse(getAllItems);
    const updatedVal = parseValue.map((value: any) => {
      if (value.id === productId) {
        return { ...value, quantity: value.quantity + 1 };
      }
      return value;
    });
    setCartValue(updatedVal);
    getCartItems();
  };

  const incrementCountKeyHandler: KeyboardEventHandler = (event) => {
    // if (event.code === "Enter") {
    //   incrementCount();
    // }
  };

  return (
    <div>
      {/* <div className={styles.price_list}>
        <Col className={styles.price} xl="12">
          <Col xl="4" className={styles.order_img}>
            <div>
              <img src={imgSrc} width="100px" />
            </div>

            <h2>{productTitle}</h2>
          </Col>
          <Col xl="2" className={styles.price_number}>
            {price?.toLocaleString("en-IN")}
          </Col>
          <Col xl="2">
            <div className={styles.number}>
              {quantity > 0 && (
                <span
                  role="button"
                  tabIndex={0}
                  className={styles.minus}
                  onClick={() => decrementCount(id)}
                  onKeyDown={decrementCountKeyHandler}
                >
                  -
                </span>
              )}
              <input
                autoComplete="nope"
                type="text"
                value={quantity}
                className={styles.inpt}
                style={{ outline: "none", backgroundColor: "#f5f5f7" }}
                disabled
              />
              <span
                role="button"
                tabIndex={0}
                className={styles.plus}
                onClick={() => incrementCount(id)}
                onKeyDown={incrementCountKeyHandler}
              >
                +
              </span>
            </div>
          </Col>
          <Col xl="2" className={styles.price_number_total}>
            {(quantity * price).toLocaleString("en-IN")}
          </Col>
        </Col>

        <Col xl="1" className={styles.price_number_close}>
          <Button variant="none" onClick={() => deleteCartItems(id)}>
            x
          </Button>
        </Col>
      </div> */}
      {/* Responsives */}
      <div>
        <Col lg={12} className={styles.order_section_image}>
          <Col lg={6} md={6}>
            <img src={imgSrc} width="100%" height="100%" />
          </Col>
          <Col lg={4} md={4}>
            <h2>{productTitle}</h2>
            <div className={styles.price_number_res}>
              Rs. {price?.toLocaleString("en-IN")}
            </div>
            <Col xl={6} className={styles.price_number_responsive}>
              <Col xl={6} className={styles.number_responsive}>
                <div>
                  {quantity > 0 ? (
                    <span
                      role="button"
                      tabIndex={0}
                      className={styles.minus}
                      onClick={() => decrementCount(id)}
                      onKeyDown={decrementCountKeyHandler}
                    >
                      -
                    </span>
                  ) : (
                    <p>ddd</p>
                  )}
                  <input
                    autoComplete="nope"
                    type="text"
                    value={itemCount}
                    className={styles.inpt}
                    style={{ outline: "none", backgroundColor: "#f5f5f7" }}
                    disabled
                  />
                  <span
                    role="button"
                    tabIndex={0}
                    className={styles.plus}
                    onClick={() => incrementCount(id)}
                    onKeyDown={incrementCountKeyHandler}
                  >
                    +
                  </span>
                </div>
              </Col>
              <Col xl={6} className={styles.price_number_close_responsive}>
                <Button variant="none" onClick={() => deleteCartItems(id)}>
                  x
                </Button>
                <h2>remove</h2>
              </Col>
            </Col>
          </Col>
        </Col>
        <div className={styles.orderLine_responsive} />
      </div>
    </div>
  );
}
