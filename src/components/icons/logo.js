// import React from 'react';

// const IconLogo = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 84 96">
//     <title>Logo</title>
//     <g id="Logo" transform="translate(-8.000000, -2.000000)">
//       <g transform="translate(11.000000, 5.000000)">
//         <path
//           d="M45.691667,45.15 C48.591667,46.1 50.691667,48.95 50.691667,52.2 C50.691667,57.95 46.691667,61 40.291667,61 L28.541667,61 L28.541667,30.3 L39.291667,30.3 C45.691667,30.3 49.691667,33.15 49.691667,38.65 C49.691667,41.95 47.941667,44.35 45.691667,45.15 Z M33.591667,43.2 L39.241667,43.2 C42.791667,43.2 44.691667,41.85 44.691667,38.95 C44.691667,36.05 42.791667,34.8 39.241667,34.8 L33.591667,34.8 L33.591667,43.2 Z M33.591667,47.5 L33.591667,56.5 L40.191667,56.5 C43.691667,56.5 45.591667,54.75 45.591667,52 C45.591667,49.2 43.691667,47.5 40.191667,47.5 L33.591667,47.5 Z"
//           fill="#64FFDA"
//         />
//         <polygon
//           id="Shape"
//           stroke="#64FFDA"
//           strokeWidth="5"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           points="39 0 0 22 0 67 39 90 78 68 78 23"
//         />
//       </g>
//     </g>
//   </svg>
// );

// export default IconLogo;

import React from 'react';

const IconLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" aria-labelledby="title" viewBox="0 0 100 100">
    <title>Logo</title>
    <g>
      <g
        id="S"
        transform="translate(32,36)"
        // fill="#64FFDA"
        //fill="#4c8bf5" // Chrome blue
        fill="#4691f6"
        fontFamily="Lexend+Deca, Calibre-Medium, Calibre"
        fontSize="60"
        fontWeight="500"
        letterSpacing="4.16666603">
        <text>
          <tspan x="0.141666985" y="35">
            S
          </tspan>
        </text>
      </g>
      <path
        // stroke="#4c8bf5" // chrome blue
        stroke="#4691f6"
        // stroke="#64FFDA"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="
            M 50, 5
            L 11, 27
            L 11, 72
            L 50, 95
            L 89, 73
            L 89, 28 z"
      />
    </g>
  </svg>
);

export default IconLogo;

{
  /* <path d="M1.334,9.368C3.18,3.435,9.803,4.069,9.803,4.069L4.33,1.016c0,0,0,0-1.669-0.807C0.987-0.597,1.334,1.188,1.334,1.188
V9.368z"/>
<path d="M1.334,12.595v8.18c0,0-0.347,1.784,1.327,0.978c1.669-0.807,1.669-0.807,1.669-0.807l5.473-3.053
C9.803,17.894,3.179,18.528,1.334,12.595z"/>
<path d="M20,10.33c-1.556-1.005-1.556-1.005-1.556-1.005l-5.458-3.078c0,0,3.991,5.321-0.109,9.989l6.979-4.264
C19.856,11.972,21.561,11.337,20,10.33z"/>
<circle cx="8.075" cy="10.981" r="4.24"/> */
}
