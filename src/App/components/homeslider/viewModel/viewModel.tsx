export default function ShopItemsModel(
  deviceId: number,
  itemName: string,
  colors: any[],
  price: number,
  deviceDescription: string,
  availability: boolean
) {
  const shopItemObj: any = {
    deviceId: deviceId,
    itemName: itemName,
    colors: colors,
    price: price,
    deviceDescription: deviceDescription,
    availability: availability,
  };

  return shopItemObj;
}
