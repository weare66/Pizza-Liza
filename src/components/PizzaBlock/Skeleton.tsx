import React from 'react';
import ContentLoader from "react-content-loader";


export const Skeleton: React.FC = () => {
  return (
    
    <ContentLoader 
    className='pizza-block'
    speed={2}
    width={300}
    height={480}
    viewBox="0 0 300 480"
    backgroundColor="#e0e0e0"
    foregroundColor="#949494"
    
  >
    <rect x="0" y="280" rx="3" ry="3" width="280" height="24" /> 
    <rect x="0" y="319" rx="3" ry=



"3" width="280" height="85" /> 
    <rect x="0" y="422" rx="3" ry="3" width="89" height="27" /> 
    <rect x="125" y="413" rx="11" ry="11" width="155" height="40" /> 
    <circle cx="139" cy="130" r="130" />
  </ContentLoader>
  )
}
