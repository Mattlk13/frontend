import React from 'react';

const TallyLogo = ({ width, height, viewBox }) => {
  width = width || '295.4px';
  height = height || '350.3px';
  viewBox = viewBox || '0 0 295.4 350.3'
  return (
    <svg className="tally-logo" x="0px" y="0px" width={width} height={height} viewBox={viewBox}>
      <g>
        <polygon className="logo-shade" points="295.4,98.9 97.7,134 290.2,0   "/>
        <polygon className="logo-red-stripe" points="163.7,122.3 196.7,116.4 196.7,350.3 163.7,332.1 147.2,323 130.7,332.1 97.7,350.3 97.7,134
          130.7,128.1   "/>
        <polygon className="logo-white-stripe" points="130.7,128.1 163.7,122.3 163.7,332.1 147.2,323 130.7,332.1  "/>
        <rect x="148.6" y="-40.3" transform="matrix(-5.334190e-02 -0.9986 0.9986 -5.334190e-02 154.3022 255.2521)" className="logo-red-stripe" width="99" height="189.6"/>

        <rect x="181.6" y="-40.3" transform="matrix(-5.334190e-02 -0.9986 0.9986 -5.334190e-02 154.3022 255.2521)" className="logo-white-stripe" width="33" height="189.6"/>

        <rect x="6.4" y="8.7" transform="matrix(-5.334225e-02 -0.9986 0.9986 -5.334225e-02 -3.0786 121.2472)" className="logo-blue-rectangle" width="99" height="106.7"/>
        <path className="logo-checkmark" d="M93.7,25.5c-2.8,2.2-5.3,4.6-7.7,7.2c-2.4,2.6-4.6,5.3-6.7,8.1c-4.2,5.6-7.9,11.5-11.4,17.6
          c-3.5,6.1-6.6,12.3-9.6,18.7c-1.5,3.2-2.9,6.3-4.3,9.5c-1.4,3.2-2.7,6.5-3.9,9.6l-9.9-1.8c0,0.1,0-0.1-0.1-0.2L40,93.9
          c0-0.2-0.1-0.5-0.2-0.8c-0.2-0.5-0.3-1.1-0.5-1.6c-0.4-1.1-0.9-2.2-1.4-3.2c-1.1-2.1-2.4-4.2-3.8-6.1c-0.8-1-1.5-1.9-2.3-2.8
          c-0.8-0.9-1.7-1.8-2.5-2.7s-1.8-1.7-2.7-2.5l-2.9-2.4l10.1-11.1c1,1.1,2.1,2.2,3.1,3.4c1,1.2,2,2.3,2.9,3.6
          c0.9,1.2,1.8,2.5,2.7,3.8c0.9,1.3,1.6,2.6,2.4,4c0.9,1.6,1.7,3.2,2.4,4.9c1.4-2.4,2.8-4.7,4.3-7c3.8-6.1,7.8-12,12.1-17.8
          c4.3-5.7,8.8-11.3,13.8-16.5c2.5-2.6,5.1-5,7.8-7.3C87.8,29.5,90.6,27.3,93.7,25.5z"/>
      </g>
    </svg>
  );

};

export default TallyLogo;
