/* eslint-disable react/function-component-definition */
import React from "react";

interface WebSVGProps {
  color: string;
}

const WebSVG: React.FC<WebSVGProps> = ({ color }) => (
  <svg
    width={23}
    height={23}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.2002 0.599976C11.7402 0.599976 11.2702 0.599976 10.8102 0.599976C10.7402 0.649976 10.6702 0.630015 10.5902 0.640015C8.94015 0.760015 7.39015 1.21001 5.94015 2.01001C1.58015 4.41001 -0.729846 9.73998 0.330154 14.35C0.830154 16.54 1.74015 18.53 3.28015 20.19C5.94015 23.04 9.30015 23.93 13.0702 23.5C14.9902 23.28 16.7402 22.55 18.3202 21.43C20.8302 19.66 22.3702 17.26 22.9002 14.22C22.9802 13.77 23.0202 13.32 23.0802 12.87C23.0802 12.36 23.0802 11.85 23.0802 11.34C23.0702 11.26 23.0502 11.18 23.0402 11.1C22.9302 9.53998 22.5502 8.03997 21.7902 6.65997C19.9802 3.35997 17.1202 1.52003 13.4902 0.780029C13.0602 0.690029 12.6302 0.649976 12.2002 0.599976ZM20.0901 12.47C20.7601 12.47 21.4402 12.48 22.1102 12.47C22.2802 12.47 22.3402 12.52 22.3102 12.69C22.2902 12.85 22.2801 13.02 22.2701 13.18C22.0601 15.28 21.2902 17.16 19.9802 18.82C19.8702 18.96 19.8102 18.95 19.6902 18.83C19.0202 18.15 18.2701 17.57 17.4501 17.08C17.3201 17 17.2802 16.93 17.3202 16.78C17.6602 15.43 17.8302 14.06 17.8602 12.67C17.8602 12.51 17.9102 12.47 18.0702 12.47C18.7402 12.47 19.4201 12.47 20.0901 12.47ZM20.1002 11.73C19.4202 11.73 18.7402 11.73 18.0602 11.73C17.9102 11.73 17.8602 11.69 17.8702 11.54C17.8702 11.32 17.8602 11.11 17.8502 10.89C17.7902 9.71001 17.6202 8.54001 17.3302 7.39001C17.3002 7.28001 17.3102 7.22002 17.4202 7.15002C18.2802 6.66002 19.0602 6.05003 19.7502 5.34003C19.8302 5.26003 19.8802 5.24998 19.9602 5.34998C20.0902 5.52998 20.2302 5.69 20.3502 5.87C21.5502 7.56 22.2002 9.44001 22.3302 11.51C22.3402 11.69 22.2902 11.74 22.1102 11.74C21.4302 11.73 20.7702 11.73 20.1002 11.73ZM3.06015 11.73C2.38015 11.73 1.70015 11.72 1.02015 11.73C0.860153 11.73 0.810154 11.68 0.830154 11.53C0.850154 11.37 0.860151 11.2 0.870151 11.04C1.08015 8.92998 1.85015 7.05001 3.16015 5.39001C3.26015 5.27001 3.31015 5.26 3.43015 5.37C4.10015 6.06 4.86015 6.65 5.69015 7.13C5.83015 7.21 5.85015 7.28999 5.81015 7.42999C5.48015 8.76999 5.30015 10.13 5.28015 11.51C5.28015 11.68 5.23015 11.73 5.06015 11.72C4.39015 11.73 3.73015 11.73 3.06015 11.73ZM0.830154 12.77C0.860154 12.66 0.730151 12.47 1.01015 12.47C2.37015 12.48 3.73015 12.48 5.10015 12.47C5.24015 12.47 5.28015 12.51 5.28015 12.65C5.31015 14.05 5.48015 15.44 5.82015 16.8C5.85015 16.91 5.84015 16.98 5.72015 17.05C4.87015 17.55 4.10015 18.15 3.41015 18.85C3.32015 18.94 3.27015 18.94 3.19015 18.84C1.77015 17.06 0.990154 15.04 0.830154 12.77ZM11.2002 19.52C11.2002 20.52 11.2002 21.53 11.2002 22.53C11.2002 22.75 11.0902 22.83 10.8702 22.78C10.8602 22.78 10.8602 22.77 10.8502 22.77C9.98015 22.55 9.31015 22.02 8.74015 21.36C7.76015 20.23 7.19015 18.89 6.75015 17.48C6.71015 17.33 6.79015 17.32 6.87015 17.27C8.16015 16.64 9.53015 16.3 10.9702 16.2C11.1502 16.19 11.2102 16.23 11.2102 16.42C11.2002 17.45 11.2002 18.48 11.2002 19.52ZM11.9402 4.69C11.9402 3.69 11.9402 2.67999 11.9402 1.67999C11.9402 1.45999 12.0502 1.37999 12.2702 1.42999C12.2802 1.42999 12.2802 1.44 12.2902 1.44C13.1802 1.67 13.8701 2.21002 14.4501 2.90002C15.4001 4.02002 15.9702 5.33998 16.4002 6.72998C16.4402 6.86998 16.3602 6.89 16.2802 6.94C14.9802 7.57 13.6002 7.92002 12.1602 8.02002C11.9702 8.03002 11.9402 7.95999 11.9402 7.79999C11.9402 6.74999 11.9402 5.72 11.9402 4.69ZM11.2002 4.67999C11.2002 5.71999 11.2002 6.75999 11.2002 7.79999C11.2002 7.96999 11.1502 8.01 10.9802 8C9.53015 7.9 8.15015 7.54998 6.84015 6.91998C6.73015 6.86998 6.70015 6.82001 6.74015 6.70001C6.89015 6.23001 7.05015 5.76 7.24015 5.31C7.70015 4.23 8.27015 3.22998 9.12015 2.41998C9.64015 1.91998 10.2402 1.55002 10.9602 1.40002C11.1402 1.36002 11.1902 1.39002 11.1902 1.58002C11.2002 2.62002 11.2002 3.64999 11.2002 4.67999ZM11.9402 19.49C11.9402 18.46 11.9502 17.44 11.9402 16.41C11.9402 16.21 12.0002 16.17 12.1802 16.19C12.4502 16.23 12.7202 16.24 12.9802 16.27C14.1402 16.42 15.2402 16.76 16.2902 17.27C16.4002 17.32 16.4201 17.38 16.3801 17.49C16.2801 17.77 16.2001 18.06 16.0901 18.34C15.6601 19.47 15.1302 20.55 14.3002 21.45C13.7102 22.1 13.0202 22.6 12.1502 22.79C11.9602 22.83 11.9202 22.78 11.9302 22.6C11.9402 21.57 11.9402 20.53 11.9402 19.49ZM14.5502 11.73C13.7602 11.73 12.9602 11.73 12.1702 11.73C12.0002 11.73 11.9402 11.7 11.9402 11.51C11.9502 10.66 11.9502 9.80001 11.9402 8.95001C11.9402 8.79001 11.9802 8.72998 12.1502 8.72998C13.6602 8.65998 15.0901 8.29997 16.4501 7.65997C16.5801 7.59997 16.6302 7.60001 16.6702 7.76001C16.9502 9.00001 17.0902 10.27 17.1402 11.54C17.1502 11.69 17.1001 11.73 16.9501 11.73C16.1501 11.73 15.3502 11.73 14.5502 11.73ZM14.5302 12.47C15.3302 12.47 16.1302 12.47 16.9302 12.47C17.0802 12.47 17.1401 12.5 17.1301 12.67C17.0801 13.94 16.9402 15.19 16.6602 16.43C16.6202 16.59 16.5802 16.61 16.4302 16.54C15.0702 15.9 13.6302 15.54 12.1302 15.47C11.9802 15.46 11.9302 15.42 11.9302 15.26C11.9402 14.4 11.9402 13.54 11.9302 12.68C11.9302 12.51 11.9802 12.47 12.1502 12.47C12.9402 12.47 13.7402 12.47 14.5302 12.47ZM8.63015 11.73C7.82015 11.73 7.01015 11.73 6.21015 11.73C6.08015 11.73 6.01015 11.72 6.01015 11.55C6.06015 10.28 6.20015 9.02998 6.47015 7.78998C6.51015 7.58998 6.57015 7.59998 6.73015 7.66998C8.08015 8.29998 9.50015 8.65997 10.9902 8.71997C11.1702 8.72997 11.2102 8.79002 11.2102 8.96002C11.2002 9.81002 11.2002 10.65 11.2102 11.5C11.2102 11.7 11.1402 11.73 10.9702 11.73C10.1802 11.73 9.41015 11.73 8.63015 11.73ZM8.61015 12.47C9.40015 12.47 10.2002 12.48 10.9902 12.47C11.1502 12.47 11.2102 12.51 11.2102 12.68C11.2002 13.54 11.2002 14.4 11.2102 15.26C11.2102 15.41 11.1702 15.47 11.0102 15.47C9.50015 15.53 8.07015 15.89 6.71015 16.54C6.56015 16.61 6.52015 16.6 6.48015 16.43C6.20015 15.19 6.06015 13.92 6.01015 12.65C6.00015 12.48 6.08015 12.47 6.21015 12.47C7.01015 12.47 7.81015 12.47 8.61015 12.47ZM8.85015 22.48C8.78015 22.48 8.75015 22.49 8.73015 22.48C6.87015 21.96 5.26015 21.01 3.89015 19.64C3.78015 19.53 3.83015 19.48 3.91015 19.39C4.50015 18.79 5.16015 18.27 5.87015 17.82C6.02015 17.72 6.08015 17.72 6.14015 17.91C6.41015 18.8 6.78015 19.65 7.24015 20.45C7.67015 21.2 8.18015 21.87 8.85015 22.48ZM8.83015 1.71002C8.59015 1.97002 8.36015 2.19 8.15015 2.44C7.20015 3.57 6.58015 4.87001 6.14015 6.26001C6.07015 6.48001 6.01015 6.46999 5.84015 6.35999C5.15015 5.91999 4.52015 5.41002 3.93015 4.83002C3.81015 4.71002 3.80015 4.65002 3.93015 4.52002C5.09015 3.36002 6.45015 2.51001 7.99015 1.95001C8.25015 1.86001 8.52015 1.76002 8.83015 1.71002ZM14.3102 1.73999C14.3702 1.69999 14.4102 1.71999 14.4602 1.73999C16.3002 2.25999 17.8902 3.2 19.2402 4.56C19.3602 4.68 19.3202 4.73001 19.2302 4.82001C18.6302 5.41001 17.9801 5.93001 17.2701 6.39001C17.1001 6.50001 17.0602 6.44998 17.0102 6.28998C16.6202 5.07998 16.1002 3.93002 15.3502 2.90002C15.0402 2.48002 14.7002 2.08999 14.3102 1.73999ZM14.3401 22.47C14.5601 22.23 14.7902 22 14.9902 21.76C15.9402 20.62 16.5602 19.31 17.0002 17.91C17.0502 17.75 17.0902 17.71 17.2502 17.81C17.9602 18.26 18.6102 18.78 19.2102 19.37C19.3302 19.49 19.3302 19.55 19.2102 19.67C18.2202 20.65 17.1002 21.42 15.8202 21.98C15.3502 22.19 14.8601 22.37 14.3401 22.47Z"
      fill={color}
    />
  </svg>
);

export default WebSVG;