/* eslint-disable react/button-has-type */
/* eslint-disable prefer-const */
/* eslint-disable simple-import-sort/imports */
/* eslint-disable no-unused-vars */
import "react-toastify/dist/ReactToastify.css";

import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { getAccessToken } from "src/App/helpers/local-storage";
import styles from "./button.module.css";
import { addCartItem } from "../../services/shopPage/shopServices";

export default function ButtonCart({
  productName,
  productPrice,
  productQuantity,
  productColor,
}: // getCartLength,
{
  productName: string;
  productPrice: number;
  productQuantity: number;
  productColor: string;
  // getCartLength: any;
}) {
  const router = useRouter();

  const addCartValue = async () => {
    const token = getAccessToken();
    if (token !== null) {
      // serialize the product to be added to cart
      const cartObj = {
        productType: productName,
        quantity: 1,
        productColor: productColor,
        productPrice: productPrice * productQuantity,
        productStatus: true, // to be removed one API updated
      };
      const cartItemObj = {
        cartItem: cartObj,
      };
      const response = await addCartItem(cartItemObj);
      // getCartLength();
      if (response?.res?.data?.success) {
        toast.success("Cart added Successfully", {
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
      // window.location.reload();
    } else {
      router.push("/login");
    }
  };
  return (
    // eslint-disable-next-line react/button-has-type
    <button className={styles.buttonaddtocart} onClick={() => addCartValue()}>
      <p>ADD TO CART</p>
    </button>
  );
}
