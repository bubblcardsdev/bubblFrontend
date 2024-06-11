/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
import router from "next/router";
import { cancelOrder } from "src/App/services/orderCancel";

import LeftDetails from "../order/bubble_card";
import styles from "./order_details.module.css";
import OrderPrice from "./order_price";

function MultipleOrder({ orderDetails, imageSrc, deviceNames }: any) {
  const cancelOrderFunction = async () => {
    const orderBody = {
      orderId: orderDetails?.id,
    };
    const orderResp = await cancelOrder(orderBody);
    if (orderResp?.data.success) {
      router.push("/order");
    }
  };
  return (
    <div>
      <div className={styles.multiple_order_details_lists}>
        {orderDetails &&
          orderDetails?.Carts?.map((val: any, index: any) => (
            <div>
              <div className={styles.order_detail_list_extra}>
                <LeftDetails
                  itemName={deviceNames[index]}
                  itemQuantity={val.quantity}
                  itemPrice={val.productPrice}
                  itemTotal={orderDetails?.totalPrice}
                  imageSrc={imageSrc[index]}
                />
                <div className={styles.order_detail_responsive_btn}>
                  {/* <Button

                        variant="none"
                        className={styles.order_details_number_track_responsive}
                      >
                        Track Your Order
                      </Button> */}
                </div>
              </div>
            </div>
          ))}
      </div>
      <OrderPrice orderDetails={orderDetails} />
    </div>
  );
}

export default MultipleOrder;
