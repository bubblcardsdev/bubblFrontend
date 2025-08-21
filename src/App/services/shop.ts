import axios from "../helpers/axios";

export type DeviceT = {
  availability: boolean;
  type:
    | "Card"
    | "Socket"
    | "Tile"
    | "Bundle Cards"
    | "Bundle Devices"
    | "NC-Pattern"
    | "NC-Pattern"
    | "NC-Metal"
    | "Full Custom"
    | "Name Custom"
    | "Wrist Band";
  images: Record<string, string>;
  description: string;
  price: number;
};

export const getShop = async () => {
  const devices = {} as Record<DeviceT["type"], DeviceT>;
  try {
    const allDevices = await axios.get<{
      data: {
        devices: {
          availability: boolean;
          deviceColor: string;
          deviceDescription: string;
          deviceImage: string;
          deviceType:
            | "Card"
            | "Socket"
            | "Tile"
            | "Bundle Cards"
            | "Bundle Devices"
            | "NC-Pattern"
            | "NC-Pattern"
            | "NC-Metal"
            | "Full Custom"
            | "Name Custom"
            | "Wrist Band";
          id: number;
          price: number;
        }[];
      };
    }>("cart/alldevices");

    const deviceData = allDevices.data.data.devices;

    const deviceMaps = deviceData.reduce<Record<DeviceT["type"], DeviceT>>(
      (acc, device) => {
        const colorMap = acc[device.deviceType]?.images || {};

        return {
          ...acc,
          [device.deviceType]: {
            availability: device.availability,
            type: device.deviceType,
            images: {
              ...colorMap,
              [device.deviceColor]: device.deviceImage,
            },
            description: device.deviceDescription,
            price: device.price,
          },
        };
      },
      devices
    );

    return deviceMaps;
  } catch (error) {
    console.log(error);
    return devices;
  }
};
