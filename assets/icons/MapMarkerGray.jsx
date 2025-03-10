import * as React from "react";
import Svg, { Path } from "react-native-svg";
const MapMarkerGray = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
      stroke="#BDBDBD"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20 10.364C20 16.09 12 21 12 21s-8-4.91-8-10.636C4 6.297 7.582 3 12 3s8 3.297 8 7.364v0Z"
      clipRule="evenodd"
    />
    <Path
      stroke="#BDBDBD"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default MapMarkerGray;
