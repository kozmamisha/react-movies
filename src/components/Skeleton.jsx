import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={500}
    height={265}
    viewBox="0 0 500 265"
    backgroundColor="#fff"
    foregroundColor="#eee"
    {...props}
  >
    <rect x="234" y="32" rx="0" ry="0" width="6" height="0" /> 
    <rect x="69" y="95" rx="0" ry="0" width="19" height="1" /> 
    <rect x="3" y="24" rx="0" ry="0" width="200" height="135" /> 
    <rect x="247" y="21" rx="0" ry="0" width="261" height="25" /> 
    <rect x="247" y="53" rx="0" ry="0" width="79" height="18" /> 
    <rect x="247" y="79" rx="0" ry="0" width="358" height="79" /> 
    <rect x="123" y="230" rx="0" ry="0" width="0" height="29" />
  </ContentLoader>
)

export default Skeleton;
