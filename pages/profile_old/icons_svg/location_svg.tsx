/* eslint-disable import/export */
/* eslint-disable react/function-component-definition */
import React from "react";

type Props = {
  color: any;
};

const LocationSVG: React.FC<Props> = ({ color }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.51258 17.9978C6.18437 17.9024 5.9725 17.6754 5.79002 17.3976C4.32776 15.1756 2.85999 12.9572 1.39405 10.7377C0.761503 9.7796 0.305923 8.74873 0.095279 7.61386C-0.0816868 6.65946 -0.00453217 5.72159 0.263672 4.799C0.66108 3.43043 1.42895 2.30412 2.54708 1.41885C3.37496 0.763625 4.30694 0.317629 5.34424 0.128585C7.64541 -0.291104 9.66061 0.308452 11.339 1.93276C12.3978 2.95751 13.0193 4.22759 13.2373 5.691C13.4687 7.2425 13.0842 8.66859 12.3439 10.0139C11.7671 11.0619 11.0549 12.0261 10.4015 13.0264C9.4463 14.488 8.47635 15.9397 7.51804 17.3995C7.33557 17.6772 7.12309 17.9036 6.79487 17.999H6.5132L6.51258 17.9978ZM6.67057 0.764849C6.37848 0.801556 6.10844 0.794827 5.84024 0.833369C4.89417 0.969799 4.03016 1.30873 3.25433 1.86424C2.20601 2.6143 1.47243 3.60295 1.07196 4.82715C0.785384 5.70262 0.69782 6.59706 0.871724 7.51291C1.06645 8.53705 1.49141 9.46147 2.05966 10.3247C3.52866 12.5559 5.00378 14.7841 6.47646 17.0128C6.50891 17.0618 6.54198 17.1095 6.57565 17.1578C6.62464 17.2276 6.67547 17.2337 6.72751 17.1615C6.76181 17.1138 6.79487 17.066 6.82733 17.0171C7.65398 15.7654 8.48554 14.5173 9.30546 13.2613C10.0837 12.0695 10.9128 10.9102 11.6305 9.67988C12.102 8.87109 12.4076 7.99867 12.4951 7.06569C12.6133 5.8054 12.3188 4.62831 11.6403 3.56441C10.4799 1.74555 8.79109 0.846217 6.66995 0.765461L6.67057 0.764849Z"
      fill={color}
    />
    <path
      d="M6.65046 10.1734C4.70452 10.1715 3.1278 8.59142 3.13086 6.64705C3.13393 4.70574 4.72595 3.12074 6.66332 3.12992C8.60007 3.13911 10.1737 4.71737 10.1743 6.65133C10.1743 8.59631 8.59517 10.1752 6.65046 10.1734ZM6.65168 3.9111C5.146 3.91232 3.90483 5.15633 3.91034 6.65868C3.91585 8.16104 5.14355 9.38851 6.64495 9.3928C8.15308 9.39708 9.39118 8.16532 9.39486 6.65684C9.39853 5.15388 8.15553 3.90987 6.65168 3.9111Z"
      fill={color}
    />
  </svg>
);
export default LocationSVG;