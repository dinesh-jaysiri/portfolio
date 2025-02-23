// components/HeroIllustration.tsx
import React from "react";

const HeroIllustration = () => {
  return (
    <div
      className="p-12 absolute hidden md:block  md:w-[50vw] md:top-[30%] right-[20vw] lg:right-[-10vw] md:right-[-5vw]  z-0"
      style={{
        perspective: "100px",
        transformStyle: "preserve-3d",
        transform: "rotateX(45deg) rotateZ(45deg)",
        aspectRatio: "984 / 802",
        maskImage:
          "linear-gradient(rgb(0, 0, 0) 40%, rgba(0, 0, 0, 0) 110%), linear-gradient(to right, rgb(0, 0, 0) 80%, rgba(0, 0, 0, 0) 100%)",
        maskComposite: "intersect",
      }}
    >
      <BackgroundGrid />
      <MainCard />
      <AdditionalCards />
    </div>
  );
};

const BackgroundGrid = () => (
  <svg
    width="1122"
    height="702"
    viewBox="0 0 1122 702"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute top-0 left-0"
  >
    {/* SVG paths from original component */}
    <path
      d="M28.3105 1V701.129"
      stroke="#171717"
      strokeWidth="1.09307"
      strokeMiterlimit="10"
    />
    {/* ... include all other path elements ... */}

    <path
      d="M28.3105 1V701.129"
      stroke="#171717"
      strokeWidth="1.09307"
      strokeMiterlimit="10"
    ></path>
    <path
      d="M55.6377 1V701.129"
      stroke="#171717"
      strokeWidth="1.58416"
      strokeMiterlimit="10"
      strokeDasharray="3.17 3.17"
    ></path>
    <path
      d="M82.9482 1V701.129"
      stroke="#171717"
      strokeWidth="1.09307"
      strokeMiterlimit="10"
    ></path>
    <path
      d="M110.275 1V701.129"
      stroke="#171717"
      strokeWidth="1.58416"
      strokeMiterlimit="10"
      strokeDasharray="3.17 3.17"
    ></path>
    <path
      d="M137.586 1V701.129"
      stroke="#171717"
      strokeWidth="1.09307"
      strokeMiterlimit="10"
    ></path>
    <path
      d="M164.897 1V701.129"
      stroke="#171717"
      strokeWidth="1.58416"
      strokeMiterlimit="10"
      strokeDasharray="3.17 3.17"
    ></path>
    <path
      d="M192.224 1V701.129"
      stroke="#171717"
      strokeWidth="1.09307"
      strokeMiterlimit="10"
    ></path>
    <path
      d="M219.534 1V701.129"
      stroke="#171717"
      strokeWidth="1.58416"
      strokeMiterlimit="10"
      strokeDasharray="3.17 3.17"
    ></path>
    <path
      d="M246.846 1V701.129"
      stroke="#171717"
      strokeWidth="1.09307"
      strokeMiterlimit="10"
    ></path>
    <path
      d="M274.172 1V701.129"
      stroke="#171717"
      strokeWidth="1.58416"
      strokeMiterlimit="10"
      strokeDasharray="3.17 3.17"
    ></path>
    <path
      d="M301.483 1V701.129"
      stroke="#171717"
      strokeWidth="1.09307"
      strokeMiterlimit="10"
    ></path>
    <path
      d="M328.81 1V701.129"
      stroke="#171717"
      strokeWidth="1.58416"
      strokeMiterlimit="10"
      strokeDasharray="3.17 3.17"
    ></path>
    <path
      d="M356.121 1V701.129"
      stroke="#171717"
      strokeWidth="1.09307"
      strokeMiterlimit="10"
    ></path>
    <path
      d="M383.432 1V701.129"
      stroke="#171717"
      strokeWidth="1.58416"
      strokeMiterlimit="10"
      strokeDasharray="3.17 3.17"
    ></path>
    <path
      d="M410.759 1V701.129"
      stroke="#171717"
      strokeWidth="1.09307"
      strokeMiterlimit="10"
    ></path>
    <path
      d="M438.069 1V701.129"
      stroke="#171717"
      strokeWidth="1.58416"
      strokeMiterlimit="10"
      strokeDasharray="3.17 3.17"
    ></path>
    <path
      d="M465.396 1V701.129"
      stroke="#171717"
      strokeWidth="1.09307"
      strokeMiterlimit="10"
    ></path>
    <path
      d="M492.707 1V701.129"
      stroke="#171717"
      strokeWidth="1.58416"
      strokeMiterlimit="10"
      strokeDasharray="3.17 3.17"
    ></path>
    <path
      d="M520.018 1V701.129"
      stroke="#171717"
      strokeWidth="1.09307"
      strokeMiterlimit="10"
    ></path>
    <path
      d="M547.345 1V701.129"
      stroke="#171717"
      strokeWidth="1.58416"
      strokeMiterlimit="10"
      strokeDasharray="3.17 3.17"
    ></path>
    <path
      d="M574.655 1V701.129"
      stroke="#171717"
      strokeWidth="1.09307"
      strokeMiterlimit="10"
    ></path>
    <path
      d="M601.982 1V701.129"
      stroke="#171717"
      strokeWidth="1.58416"
      strokeMiterlimit="10"
      strokeDasharray="3.17 3.17"
    ></path>
    <path
      d="M629.293 1V701.129"
      stroke="#171717"
      strokeWidth="1.09307"
      strokeMiterlimit="10"
    ></path>
    <path
      d="M656.604 1V701.129"
      stroke="#171717"
      strokeWidth="1.58416"
      strokeMiterlimit="10"
      strokeDasharray="3.17 3.17"
    ></path>
    <path
      d="M683.931 1V701.129"
      stroke="#171717"
      strokeWidth="1.09307"
      strokeMiterlimit="10"
    ></path>
    <path
      d="M711.241 1V701.129"
      stroke="#171717"
      strokeWidth="1.58416"
      strokeMiterlimit="10"
      strokeDasharray="3.17 3.17"
    ></path>
    <path
      d="M738.568 1V701.129"
      stroke="#171717"
      strokeWidth="1.09307"
      strokeMiterlimit="10"
    ></path>
    <path
      d="M765.879 1V701.129"
      stroke="#171717"
      strokeWidth="1.58416"
      strokeMiterlimit="10"
      strokeDasharray="3.17 3.17"
    ></path>
    <path
      d="M793.19 1V701.129"
      stroke="#171717"
      strokeWidth="1.09307"
      strokeMiterlimit="10"
    ></path>
    <path
      d="M820.517 1V701.129"
      stroke="#171717"
      strokeWidth="1.58416"
      strokeMiterlimit="10"
      strokeDasharray="3.17 3.17"
    ></path>
    <path
      d="M847.828 1V701.129"
      stroke="#171717"
      strokeWidth="1.09307"
      strokeMiterlimit="10"
    ></path>
    <path
      d="M875.139 1V701.129"
      stroke="#171717"
      strokeWidth="1.58416"
      strokeMiterlimit="10"
      strokeDasharray="3.17 3.17"
    ></path>
    <path
      d="M902.466 1V701.129"
      stroke="#171717"
      strokeWidth="1.09307"
      strokeMiterlimit="10"
    ></path>
    <path
      d="M929.775 1V701.129"
      stroke="#171717"
      strokeWidth="1.58416"
      strokeMiterlimit="10"
      strokeDasharray="3.17 3.17"
    ></path>
    <path
      d="M957.103 1V701.129"
      stroke="#171717"
      strokeWidth="1.09307"
      strokeMiterlimit="10"
    ></path>
    <path
      d="M984.414 1V701.129"
      stroke="#171717"
      strokeWidth="1.58416"
      strokeMiterlimit="10"
      strokeDasharray="3.17 3.17"
    ></path>
    <path
      d="M1011.72 1V701.129"
      stroke="#171717"
      strokeWidth="1.09307"
      strokeMiterlimit="10"
    ></path>
    <path
      d="M1039.05 1V701.129"
      stroke="#171717"
      strokeWidth="1.58416"
      strokeMiterlimit="10"
      strokeDasharray="3.17 3.17"
    ></path>
    <path
      d="M1066.36 1V701.129"
      stroke="#171717"
      strokeWidth="1.09307"
      strokeMiterlimit="10"
    ></path>
    <path
      d="M1093.69 1V701.129"
      stroke="#171717"
      strokeWidth="1.58416"
      strokeMiterlimit="10"
      strokeDasharray="3.17 3.17"
    ></path>
    <path
      d="M1121 675.192H1"
      stroke="#171717"
      strokeWidth="1.10891"
      strokeMiterlimit="10"
    ></path>
    <path
      d="M1121 649.27H1"
      stroke="#171717"
      strokeWidth="1.58416"
      strokeMiterlimit="10"
      strokeDasharray="3.17 3.17"
    ></path>
    <path
      d="M1121 623.333H1"
      stroke="#171717"
      strokeWidth="1.10891"
      strokeMiterlimit="10"
    ></path>
    <path
      d="M1121 597.412H1"
      stroke="#171717"
      strokeWidth="1.58416"
      strokeMiterlimit="10"
      strokeDasharray="3.17 3.17"
    ></path>
    <path
      d="M1121 571.475H1"
      stroke="#171717"
      strokeWidth="1.10891"
      strokeMiterlimit="10"
    ></path>
    <path
      d="M1121 545.538H1"
      stroke="#171717"
      strokeWidth="1.58416"
      strokeMiterlimit="10"
      strokeDasharray="3.17 3.17"
    ></path>
    <path
      d="M1121 519.616H1"
      stroke="#171717"
      strokeWidth="1.10891"
      strokeMiterlimit="10"
    ></path>
    <path
      d="M1121 493.68H1"
      stroke="#171717"
      strokeWidth="1.58416"
      strokeMiterlimit="10"
      strokeDasharray="3.17 3.17"
    ></path>
    <path
      d="M1121 467.758H1"
      stroke="#171717"
      strokeWidth="1.10891"
      strokeMiterlimit="10"
    ></path>
    <path
      d="M1121 441.821H1"
      stroke="#171717"
      strokeWidth="1.58416"
      strokeMiterlimit="10"
      strokeDasharray="3.17 3.17"
    ></path>
    <path
      d="M1121 415.884H1"
      stroke="#171717"
      strokeWidth="1.10891"
      strokeMiterlimit="10"
    ></path>
    <path
      d="M1121 389.962H1"
      stroke="#171717"
      strokeWidth="1.58416"
      strokeMiterlimit="10"
      strokeDasharray="3.17 3.17"
    ></path>
    <path
      d="M1121 364.025H1"
      stroke="#171717"
      strokeWidth="1.10891"
      strokeMiterlimit="10"
    ></path>
    <path
      d="M1121 338.104H1"
      stroke="#171717"
      strokeWidth="1.58416"
      strokeMiterlimit="10"
      strokeDasharray="3.17 3.17"
    ></path>
    <path
      d="M1121 312.167H1"
      stroke="#171717"
      strokeWidth="1.10891"
      strokeMiterlimit="10"
    ></path>
    <path
      d="M1121 286.229H1"
      stroke="#171717"
      strokeWidth="1.58416"
      strokeMiterlimit="10"
      strokeDasharray="3.17 3.17"
    ></path>
    <path
      d="M1121 260.308H1"
      stroke="#171717"
      strokeWidth="1.10891"
      strokeMiterlimit="10"
    ></path>
    <path
      d="M1121 234.371H1"
      stroke="#171717"
      strokeWidth="1.58416"
      strokeMiterlimit="10"
      strokeDasharray="3.17 3.17"
    ></path>
    <path
      d="M1121 208.449H1"
      stroke="#171717"
      strokeWidth="1.10891"
      strokeMiterlimit="10"
    ></path>
    <path
      d="M1121 182.513H1"
      stroke="#171717"
      strokeWidth="1.58416"
      strokeMiterlimit="10"
      strokeDasharray="3.17 3.17"
    ></path>
    <path
      d="M1121 156.591H1"
      stroke="#171717"
      strokeWidth="1.10891"
      strokeMiterlimit="10"
    ></path>
    <path
      d="M1121 130.654H1"
      stroke="#171717"
      strokeWidth="1.58416"
      strokeMiterlimit="10"
      strokeDasharray="3.17 3.17"
    ></path>
    <path
      d="M1121 104.717H1"
      stroke="#171717"
      strokeWidth="1.10891"
      strokeMiterlimit="10"
    ></path>
    <path
      d="M1121 78.7954H1"
      stroke="#171717"
      strokeWidth="1.58416"
      strokeMiterlimit="10"
      strokeDasharray="3.17 3.17"
    ></path>
    <path
      d="M1121 52.8584H1"
      stroke="#171717"
      strokeWidth="1.10891"
      strokeMiterlimit="10"
    ></path>
    <path
      d="M1121 26.9365H1"
      stroke="#171717"
      strokeWidth="1.58416"
      strokeMiterlimit="10"
      strokeDasharray="3.17 3.17"
    ></path>
    <path
      d="M1121 1H1V701.129H1121V1Z"
      stroke="#171717"
      strokeWidth="1.10891"
      strokeMiterlimit="10"
    ></path>
  </svg>
);

const MainCard = () => (
  <div className="hero-illustration-card group border border-neutral-800 rounded-xl size-72 relative">
    <div
      className="absolute bg-neutral-950 inset-[-1px] border border-neutral-800 rounded-xl group-hover:[transform:translateX(-15px)_translateY(-15px)] pointer-events-none"
      style={{ transition: "transform 0.3s ease-in-out" }}
    >
      <svg
        width="280"
        height="280"
        viewBox="0 0 280 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 rounded-xl"
      >
        <g clipPath="url(#clip0_2178_104205)">
          <rect width="280" height="280" fill="#0A0A0A"></rect>
          <path
            d="M286.566 124.511C288.166 113.951 288.982 103.286 289.008 92.6045M289.008 92.6045C289.194 -11.127 212.703 -79.8044 118.123 -60.7897M289.008 92.6045C297.502 78.2996 309.16 65.1415 323.658 53.4866M289.008 92.6045C297.502 78.3032 309.16 65.1415 323.658 53.4866M289.008 92.6045C288.822 196.336 212.013 295.84 117.451 314.851M118.123 -60.7897C23.543 -41.775 -53.2489 57.7258 -53.4384 161.457M118.123 -60.7897C105.889 -93.6944 95.4034 -126.739 86.935 -159.011M-53.4384 161.457C-20.7233 167.354 12.5748 174.986 45.5152 184.145M-53.4384 161.457C-53.2489 57.7258 23.5608 -41.7785 118.123 -60.7753C130.235 -28.2068 144.151 4.53329 159.492 36.4974M-53.4384 161.457C-53.6244 265.189 22.8853 333.865 117.451 314.851M-53.4384 161.457C-85.6278 155.61 -118.094 151.407 -150.711 148.865C-150.997 292.56 -44.9985 387.698 85.9979 361.362M45.5152 184.145C45.6404 115.231 96.6549 49.1286 159.492 36.4974M45.5152 184.145C78.4807 193.3 111.335 204.053 143.21 216.108M45.5152 184.145C45.3936 253.058 96.2188 298.683 159.042 286.066M159.492 36.4974C213.715 25.5936 259.004 58.0941 270.305 111.501M159.492 36.4974C174.831 68.4651 191.71 99.9284 209.67 130.015M273.974 153.51C273.974 144.08 272.096 119.98 270.305 111.511M-29.8893 61.9603C-0.00652037 79.8056 30.6344 98.6772 61.1609 118.042C91.691 137.415 122.365 157.441 152.333 177.564C182.588 197.888 209.312 216.367 237.833 236.676M102.048 65.0747C77.8373 37.5236 54.1521 9.64713 31.6577 -17.7716C8.94525 -45.4586 -12.7558 -72.9277 -32.8469 -99.4202M102.048 65.0747C126.263 92.6294 151.192 120.085 176.176 146.681C201.388 173.535 223.789 196.615 248.822 221.444M102.048 65.0747C126.263 92.6294 151.192 120.083 176.175 146.679M78.4056 193.822C78.5093 135.219 121.903 79.0081 175.321 68.2651M209.67 130.015C227.801 160.391 238.758 178.018 258.864 205.304M209.67 130.015C173.035 137.382 143.282 175.926 143.21 216.108M209.67 130.015C248.036 123.41 273.76 146.137 272.186 176.921C266.21 151.97 257.781 104.02 257.599 78.5466C258.865 53.4881 259.93 23.651 265.802 2.5085C271.576 -22.9891 280.201 -47.7562 291.512 -71.3257C303.36 -95.9444 317.853 -119.2 334.734 -140.683M175.328 68.2642C239.664 56.6987 280.111 115.735 273.971 172.332M274.157 172.136C274.246 123.131 236.764 90.5199 192.086 99.5034C147.412 108.487 111.125 155.507 111.039 204.501C110.949 253.505 153.331 285.755 198.005 276.776M141.555 288.101C147.431 287.904 153.28 287.218 159.043 286.052M159.043 286.052C168.187 284.213 188.957 280.823 197.48 276.879M159.043 286.052C143.636 292.632 129.642 302.334 117.451 314.851M159.043 286.052C96.2193 298.683 45.3939 253.058 45.5155 184.13C12.5751 174.971 -20.723 167.322 -53.4381 161.442C-53.6241 265.188 22.8853 333.865 117.451 314.851M197.48 276.879C144.055 287.607 78.2993 252.425 78.3923 193.821M197.48 276.879C175.375 292.864 157.332 295.411 157.332 295.411C85.887 313.078 25.1448 264.605 21.6616 187.141C18.1784 109.662 73.2734 32.5595 144.719 14.893C208.129 -0.78864 263.092 35.6353 277.107 98.1689C279.734 109.896 280.592 121.95 279.653 133.931C278.699 146.172 276.793 165.38 273.971 172.364M117.451 314.851C105.142 327.5 94.5629 343.145 85.9979 361.362M117.451 314.851C105.142 327.5 94.5594 343.145 85.9979 361.362M31.0754 306.582C53.4766 295.11 77.1757 286.373 101.663 280.558M-30.2278 251.552C-0.0903056 246.611 30.3937 244.085 60.9333 243.999C91.494 243.906 122.013 246.251 152.201 251.009C172.594 254.232 192.792 258.583 212.703 264.044M143.21 216.108C175.396 228.267 195.722 236.492 225.58 251.155M101.662 280.559C125.999 274.814 150.946 272.052 175.95 272.334M272.189 176.92C262.705 163.281 246.551 156.296 228.202 159.983C198.945 165.866 175.181 196.65 175.124 228.743M266.582 190.356C260.874 188.192 254.365 187.627 247.453 189.015C224.801 193.571 206.405 217.403 206.358 242.251C206.344 250.841 208.522 258.408 212.316 264.487M204.567 -52.5289C206.956 -9.4857 208.945 -0.262596 216.874 41.9903C223.319 73.017 232.096 103.513 243.13 133.219C250.175 152.167 258.171 170.746 267.09 188.887M201.616 273.793C185.752 266.951 175.095 250.293 175.134 228.732M-328.595 157.219C-302.242 151.923 -273.589 148.543 -243.42 147.181M-328.595 157.219C-328.173 -78.0596 -153.951 -303.75 60.5356 -346.876M-328.595 157.219C-328.173 -78.0596 -153.951 -303.751 60.5356 -346.872C60.4891 -317.97 62.7528 -287.15 67.2839 -255.321M-328.595 157.219C-329.017 392.501 -155.481 548.274 59.0051 505.152M-243.42 147.181C-243.084 -40.6811 -103.977 -220.886 67.2839 -255.321M-243.42 147.181C-243.76 335.042 -105.2 459.419 66.061 424.987M-243.42 147.181C-214.028 145.854 -182.84 146.415 -150.725 148.865M-243.42 147.181C-214.024 145.854 -182.84 146.415 -150.725 148.865M-243.42 147.181C-243.76 335.042 -105.2 459.419 66.0787 424.987M-243.42 147.181C-243.084 -40.6811 -103.973 -220.893 67.2839 -255.321M67.2839 -255.321C238.545 -289.757 377.101 -165.373 376.765 22.489M67.2839 -255.321C71.6969 -224.287 78.3056 -191.883 86.935 -159.011M67.2839 -255.321C238.541 -289.75 377.101 -165.373 376.765 22.489M67.2839 -255.321C238.541 -289.75 377.105 -165.373 376.765 22.489M376.765 22.489C376.429 210.351 237.318 390.556 66.0787 424.987M376.765 22.489C377.101 -165.373 238.541 -289.75 67.2833 -255.326C62.7522 -287.154 60.4819 -317.969 60.5356 -346.876M376.765 22.489C397.768 13.5484 421.782 6.35312 448.135 1.05318M376.765 22.489C397.768 13.5699 421.782 6.35312 448.135 1.05318M376.765 22.489C376.407 210.351 237.318 390.556 66.061 424.987M376.765 22.489C356.298 31.1863 338.424 41.6136 323.658 53.4866M376.765 22.489C376.425 210.351 237.318 390.556 66.061 424.987M376.765 22.489C376.425 210.351 237.322 390.556 66.061 424.987M66.0787 424.987C-105.161 459.419 -243.742 335.042 -243.403 147.181C-273.571 148.543 -302.224 151.923 -328.577 157.219C-328.999 392.501 -155.464 548.273 59.0228 505.152C273.509 462.03 447.71 236.335 448.135 1.05318M66.0787 424.987C70.5919 401.324 77.2968 379.927 86.0156 361.363C-44.9987 387.698 -150.997 292.56 -150.725 148.865M448.135 1.05318C448.561 -234.229 275.022 -390.001 60.5356 -346.876M448.135 1.05318C448.557 -234.225 275.022 -390.001 60.5356 -346.876M448.135 1.05318C447.71 236.335 273.499 462.026 59.0051 505.152M66.061 424.987C61.4298 449.274 59.0588 476.245 59.0051 505.152M66.061 424.987C70.5742 401.324 77.2791 379.912 85.9979 361.362M-150.725 148.865C-150.468 5.16565 -44.0686 -132.672 86.935 -159.011M-150.725 148.865C-150.997 292.56 -44.9987 387.713 85.9977 361.363C216.994 335.014 323.393 197.173 323.658 53.488C323.923 -90.1968 217.939 -185.35 86.935 -159.011M-150.725 148.865C-118.108 151.407 -85.6418 155.609 -53.4524 161.456C-53.2629 57.7249 23.5468 -41.7794 118.109 -60.7905C105.896 -93.6952 95.4034 -126.739 86.935 -159.011M86.935 -159.011C217.931 -185.35 323.923 -90.1982 323.658 53.4866M323.658 53.4866C323.401 197.182 216.994 335.013 85.9979 361.362M223.707 -240.347C215.439 -209.946 209.712 -178.909 206.584 -147.559M334.119 202.693C317.082 196.903 302.581 193.077 291.04 191.328M222.652 347.079C214.577 329.681 208.894 314.428 205.779 301.769M357.182 31.7504C357.489 -141.102 230.001 -255.548 72.423 -223.863C-85.1553 -192.184 -213.151 -26.3737 -213.459 146.482C-213.77 319.335 -86.2822 433.78 71.2962 402.095M339.44 42.1048C339.726 -115.996 223.107 -220.661 78.9854 -191.694C-65.1428 -162.716 -182.213 -11.0562 -182.496 147.044C-182.782 305.145 -66.1625 409.81 77.9586 380.842M357.181 31.7513C356.87 204.607 228.874 370.418 71.2955 402.096M339.439 42.1217C339.157 200.226 222.086 351.882 77.9579 380.86M206.585 -147.56C203.437 -115.982 202.738 -84.2082 204.496 -52.5226M291.04 191.317C279.707 189.601 271.102 189.865 265.463 192.1M205.779 301.755C202.718 289.32 202.089 279.25 203.916 271.818M-33.651 349.908C-13.8123 333.026 7.90768 318.488 31.0783 306.583M197.837 276.868C192.58 277.036 188.936 276.435 184.165 275.234C160.065 269.176 143.139 246.542 143.193 216.151C111.318 204.096 78.4632 193.342 45.512 184.187M289.102 92.6362C289.102 92.6362 274.315 112.005 273.971 172.35M280.436 114.219C280.562 27.2347 216.711 -27.9498 137.652 -11.9785C58.5932 3.99287 -5.59972 87.4508 -5.72489 174.442C-5.85006 261.422 70.1158 317.218 149.175 301.247M114.754 326.831C220.642 300.643 302.301 186.326 297.141 71.5293C291.977 -43.2669 201.949 -115.127 96.0576 -88.9385C-9.83738 -62.7536 -91.4965 51.5491 -86.3289 166.36M-86.3356 166.36C-81.1715 281.174 8.85946 353.016 114.751 326.831M176.762 289.003C163.818 296.177 149.992 301.631 135.635 305.224C48.9589 326.66 -24.7318 267.852 -28.9589 173.877C-33.1824 79.8977 33.6569 -13.6666 120.333 -35.0952C207.01 -56.531 280.701 2.27606 284.942 96.2516C284.942 96.2516 284.388 137.646 277.647 161.646M-301.505 152.566C-301.112 -66.7696 -138.699 -277.169 61.2541 -317.369C261.207 -357.572 422.984 -212.354 422.587 6.98216C422.193 226.318 259.78 436.713 59.8274 476.916C-140.125 517.116 -301.913 371.902 -301.505 152.566ZM-273.056 149.212C-272.699 -54.2741 -122.005 -249.488 63.5075 -286.788C249.02 -324.081 399.112 -189.355 398.747 14.1417C398.39 217.628 247.695 412.842 62.1834 450.139C-123.329 487.438 -273.421 352.709 -273.056 149.212ZM307.39 55.4183C313.112 182.402 222.78 308.821 105.663 337.785C-11.4576 366.748 -111.015 287.285 -116.737 160.301C-122.434 33.321 -32.1312 -93.0979 84.986 -122.065C202.107 -151.025 301.668 -71.5656 307.39 55.4183Z"
            stroke="url(#paint0_linear_2178_104205)"
            strokeWidth="1.578512"
            strokeMiterlimit="10"
          ></path>
          <g style={{ mixBlendMode: "multiply" }}>
            <path
              d="M196.602 276.9C229.861 250.886 256.536 214.42 272.06 173.512C278.14 117.53 234.278 55.4003 174.519 70.5884C122.307 83.8597 78.7806 136.795 78.6769 194.74C78.5732 252.685 143.792 287.525 196.602 276.9Z"
              fill="url(#paint1_radial_2178_104205)"
              style={{ mixBlendMode: "multiply" }}
            ></path>
            <path
              d="M271.493 173.376C256.018 214.116 229.458 250.433 196.354 276.359C170.138 281.593 140.844 275.57 118.108 261.046C95.342 246.502 79.204 223.473 79.2554 194.741C79.3586 137.065 122.7 84.3565 174.662 71.1491C204.289 63.619 229.98 75.2407 247.54 95.7376C265.097 116.231 274.491 145.567 271.493 173.376Z"
              stroke="url(#paint2_linear_2178_104205)"
              strokeOpacity="0.6"
              strokeWidth="1.15702"
            ></path>
          </g>
          <g style={{ mixBlendMode: "multiply" }}>
            <path
              d="M197.759 269.958C231.018 243.944 257.693 207.478 273.217 166.57C279.297 110.588 235.435 48.4582 175.676 63.6463C123.464 76.9176 79.9378 129.853 79.8341 187.798C79.7304 245.743 144.95 280.582 197.759 269.958Z"
              fill="url(#paint3_radial_2178_104205)"
              style={{ mixBlendMode: "multiply" }}
            ></path>
            <path
              d="M272.65 166.434C257.175 207.174 230.615 243.491 197.511 269.417C171.295 274.651 142.001 268.628 119.266 254.104C96.4993 239.56 80.3612 216.53 80.4126 187.799C80.5158 130.123 123.858 77.4144 175.819 64.207C205.446 56.6769 231.137 68.2986 248.697 88.7955C266.254 109.289 275.648 138.625 272.65 166.434Z"
              stroke="url(#paint4_linear_2178_104205)"
              strokeOpacity="0.6"
              strokeWidth="1.15702"
            ></path>
          </g>
          <rect
            x="-0.000976562"
            y="-1.15625"
            width="280"
            height="281.157"
            fill="url(#paint5_radial_2178_104205)"
            fillOpacity="0.8"
          ></rect>
          <path
            d="M201.322 271.322L270.744 173.554L281.735 161.983L280.578 282.314L186.859 281.157L201.322 271.322Z"
            fill="url(#paint6_linear_2178_104205)"
          ></path>
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_2178_104205"
            x1="225.041"
            y1="210.579"
            x2="-13.693"
            y2="139.133"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#525252"></stop>
            <stop offset="1" stopColor="#0A0A0A"></stop>
            <stop offset="1" stopColor="#0A0A0A"></stop>
          </linearGradient>
          <radialGradient
            id="paint1_radial_2178_104205"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(242.536 235.45) rotate(-176.76) scale(165.751 170.839)"
          >
            <stop offset="0.26"></stop>
            <stop offset="0.29" stopColor="#0E0E0E"></stop>
            <stop offset="0.49" stopColor="#636363"></stop>
            <stop offset="0.67" stopColor="#A6A6A6"></stop>
            <stop offset="0.82" stopColor="#D6D6D6"></stop>
            <stop offset="0.94" stopColor="#F4F4F4"></stop>
            <stop offset="1" stopColor="white"></stop>
          </radialGradient>
          <linearGradient
            id="paint2_linear_2178_104205"
            x1="216.917"
            y1="205.473"
            x2="157.579"
            y2="187.226"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#525252"></stop>
            <stop offset="1" stopColor="#0A0A0A"></stop>
            <stop offset="1" stopColor="#0A0A0A"></stop>
          </linearGradient>
          <radialGradient
            id="paint3_radial_2178_104205"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(243.694 228.508) rotate(-176.76) scale(165.751 170.839)"
          >
            <stop></stop>
            <stop offset="0.03" stopColor="#181818"></stop>
            <stop offset="0.1" stopColor="#484848"></stop>
            <stop offset="0.17" stopColor="#737373"></stop>
            <stop offset="0.25" stopColor="#999999"></stop>
            <stop offset="0.33" stopColor="#B9B9B9"></stop>
            <stop offset="0.42" stopColor="#D3D3D3"></stop>
            <stop offset="0.51" stopColor="#E6E6E6"></stop>
            <stop offset="0.62" stopColor="#F4F4F4"></stop>
            <stop offset="0.76" stopColor="#FDFDFD"></stop>
            <stop offset="1" stopColor="white"></stop>
          </radialGradient>
          <linearGradient
            id="paint4_linear_2178_104205"
            x1="218.074"
            y1="198.531"
            x2="158.736"
            y2="180.284"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#525252"></stop>
            <stop offset="1" stopColor="#0A0A0A"></stop>
            <stop offset="1" stopColor="#0A0A0A"></stop>
          </linearGradient>
          <radialGradient
            id="paint5_radial_2178_104205"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(208.263 201.902) rotate(-135.725) scale(290.872 289.675)"
          >
            <stop stopColor="#0A0A0A" stopOpacity="0"></stop>
            <stop offset="0.42417" stopColor="#0A0A0A" stopOpacity="0.8"></stop>
            <stop offset="1" stopColor="#0A0A0A"></stop>
          </radialGradient>
          <linearGradient
            id="paint6_linear_2178_104205"
            x1="238.925"
            y1="227.934"
            x2="280"
            y2="278.843"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0A0A0A" stopOpacity="0"></stop>
            <stop offset="0.368893" stopColor="#0A0A0A"></stop>
          </linearGradient>
          <clipPath id="clip0_2178_104205">
            <rect width="280" height="280" fill="white"></rect>
          </clipPath>
        </defs>
      </svg>

      <AnimatedIcons />
    </div>
  </div>
);

const AnimatedIcons = () => (
  <div className="absolute inset-0 group-hover:rotate-[360deg] group-hover:scale-[60%] group-hover:translate-x-[12%] group-hover:translate-y-[12%] group-hover:delay-200 transition-transform duration-700 [transition-timing-function:ease-in-out]">
    {/* Icon elements with gradient borders */}
    <div
      className="isolate before:transition-opacity flex items-center justify-center bg-white/5 rounded-[40px] size-14 absolute translate-x-[-50%] translate-y-[-50%] left-[70%] top-[50%] -rotate-[16deg]"
      style={{
        border: "1.5px solid transparent",
        background:
          "linear-gradient(to bottom right, rgba(23, 23, 23, 70%) 0%, #525252 62%, rgba(23, 23, 23, 70%) 100%)",
        boxShadow:
          "inset 0 0 15px rgba(255, 255, 255, 0.14), 0 -27px 40px rgba(255, 255, 255, 0.03)",
      }}
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        role="img"
        viewBox="0 0 24 24"
        className="size-[45%]"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z"></path>
      </svg>
    </div>
    {/* Repeat for other icons */}

    <div
      className="isolate before:transition-opacity  flex items-center justify-center bg-white/5 backdrop-blur-sm rounded-[40px] size-14 absolute translate-x-[-50%] translate-y-[-50%] left-[45%] top-[65%] rotate-[-16deg] gradient-box_gradientBorder__H_SK6"
      style={{
        border: "1.5px solid transparent",
        background:
          "linear-gradient(to bottom right, rgba(23, 23, 23, 70%) 0%, #525252 62%, rgba(23, 23, 23, 70%) 100%)",
        boxShadow:
          "inset 0 0 15px rgba(255, 255, 255, 0.14), 0 -27px 40px rgba(255, 255, 255, 0.03)",
      }}
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        role="img"
        viewBox="0 0 24 24"
        className="size-[45%]"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"></path>
      </svg>
    </div>

    {/*icon 3*/}

    <div
      className="isolate before:transition-opacity glass-icon  flex items-center justify-center bg-white/5 backdrop-blur-sm rounded-[40px] size-14 absolute translate-x-[-50%] translate-y-[-50%] left-[46%] top-[36%] rotate-[16deg] gradient-box_gradientBorder__H_SK6"
      style={{
        border: "1.5px solid transparent",
        background:
          "linear-gradient(to bottom right, rgba(23, 23, 23, 70%) 0%, #525252 62%, rgba(23, 23, 23, 70%) 100%)",
        boxShadow:
          "inset 0 0 15px rgba(255, 255, 255, 0.14), 0 -27px 40px rgba(255, 255, 255, 0.03)",
      }}
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        role="img"
        viewBox="0 0 24 24"
        className="size-[55%]"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"></path>
      </svg>
    </div>

    {/*icon4*/}

    <div
      className="isolate before:transition-opacity glass-icon flex items-center justify-center bg-white/5 backdrop-blur-sm rounded-[40px] size-7 absolute translate-x-[-50%] translate-y-[-50%] left-[29%] top-[48%] rotate-[-33deg] gradient-box_gradientBorder__H_SK6"
      style={{
        border: "1.5px solid transparent",
        background:
          "linear-gradient(to bottom right, rgba(23, 23, 23, 70%) 0%, #525252 62%, rgba(23, 23, 23, 70%) 100%)",
        boxShadow:
          "inset 0 0 15px rgba(255, 255, 255, 0.14), 0 -27px 40px rgba(255, 255, 255, 0.03)",
      }}
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        role="img"
        viewBox="0 0 24 24"
        className="size-[55%]"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"></path>
      </svg>
    </div>

    {/*icon 5*/}

    <div
      className="isolate before:transition-opacity glass-icon  flex items-center justify-center bg-white/5 backdrop-blur-sm rounded-[22px] size-7 absolute translate-x-[-50%] translate-y-[-50%] left-[64%] top-[68%] rotate-[20deg] gradient-box_gradientBorder__H_SK6"
      style={{
        border: "1.5px solid transparent",
        background:
          "linear-gradient(to bottom right, rgba(23, 23, 23, 70%) 0%, #525252 62%, rgba(23, 23, 23, 70%) 100%)",
        boxShadow:
          "inset 0 0 15px rgba(255, 255, 255, 0.14), 0 -27px 40px rgba(255, 255, 255, 0.03)",
      }}
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        role="img"
        viewBox="0 0 24 24"
        className="size-[55%]"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M21.8068 18.2848L13.5528.7565c-.207-.4382-.639-.7273-1.1286-.7541-.5023-.0293-.9523.213-1.2062.6253L2.266 15.1271c-.2773.4518-.2718 1.0091.0158 1.4555l4.3759 6.7786c.2608.4046.7127.6388 1.1823.6388.1332 0 .267-.0188.3987-.0577l12.7019-3.7568c.3891-.1151.7072-.3904.8737-.7553s.1633-.7828-.0075-1.1454zm-1.8481.7519L9.1814 22.2242c-.3292.0975-.6448-.1873-.5756-.5194l3.8501-18.4386c.072-.3448.5486-.3996.699-.0803l7.1288 15.138c.1344.2856-.019.6224-.325.7128z"></path>
      </svg>
    </div>

    {/*icon 6*/}

    <div
      className="isolate before:transition-opacity glass-icon  flex items-center justify-center bg-white/5 backdrop-blur-sm rounded-[22px] size-7 absolute translate-x-[-50%] translate-y-[-50%] left-[68%] top-[28%] rotate-[-21deg] gradient-box_gradientBorder__H_SK6"
      style={{
        border: "1.5px solid transparent",
        background:
          "linear-gradient(to bottom right, rgba(23, 23, 23, 70%) 0%, #525252 62%, rgba(23, 23, 23, 70%) 100%)",
        boxShadow:
          "inset 0 0 15px rgba(255, 255, 255, 0.14), 0 -27px 40px rgba(255, 255, 255, 0.03)",
      }}
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        role="img"
        className="size-[55%]"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1155 1000"
      >
        <path d="m577.3 0 577.4 1000H0z" fill="#fff" />
      </svg>
    </div>

    {/*icon 7*/}
    <div
      className="isolate before:transition-opacity opacity-60 absolute rounded-[7px] size-2 translate-x-[-50%] translate-y-[-50%] left-[55%] top-[77%] gradient-box_gradientBorder__H_SK6"
      style={{
        border: "1.5px solid transparent",
        background:
          "linear-gradient(to bottom right, rgba(23, 23, 23, 70%) 0%, #525252 62%, rgba(23, 23, 23, 70%) 100%)",
        boxShadow:
          "inset 0 0 15px rgba(255, 255, 255, 0.14), 0 -27px 40px rgba(255, 255, 255, 0.03)",
      }}
    ></div>

    {/*icon8*/}
    <div
      className="isolate before:transition-opacity opacity-60 absolute rounded-[3.5px] size-2 translate-x-[-50%] translate-y-[-50%] left-[78%] top-[63%] gradient-box_gradientBorder__H_SK6"
      style={{
        border: "1.5px solid transparent",
        background:
          "linear-gradient(to bottom right, rgba(23, 23, 23, 70%) 0%, #525252 62%, rgba(23, 23, 23, 70%) 100%)",
        boxShadow:
          "inset 0 0 15px rgba(255, 255, 255, 0.14), 0 -27px 40px rgba(255, 255, 255, 0.03)",
      }}
    ></div>

    {/*icon9*/}
    <div
      className="isolate before:transition-opacity opacity-60 absolute rounded-[3.5px] size-2 translate-x-[-50%] translate-y-[-50%] left-[58%] top-[23%] gradient-box_gradientBorder__H_SK6"
      style={{
        border: "1.5px solid transparent",
        background:
          "linear-gradient(to bottom right, rgba(23, 23, 23, 70%) 0%, #525252 62%, rgba(23, 23, 23, 70%) 100%)",
        boxShadow:
          "inset 0 0 15px rgba(255, 255, 255, 0.14), 0 -27px 40px rgba(255, 255, 255, 0.03)",
      }}
    ></div>
  </div>
);

const AdditionalCards = () => (
  <div className="flex gap-8 mt-8">
    <div className="group border border-neutral-800 rounded-xl size-72 relative shrink-0">
      <div
        className="hero-illustration-card absolute bg-neutral-950 inset-[-1px] border border-neutral-800 rounded-xl group-hover:[transform:translateX(-15px)_translateY(-15px)] pointer-events-none"
        style={{ transition: "transform 0.3s ease-in-out" }}
      >
        {/* Card content */}
      </div>
    </div>
    <div className="hero-illustration-card group border border-neutral-800 rounded-xl size-72 relative shrink-0">
      <div
        className="absolute bg-neutral-950 inset-[-1px] border border-neutral-800 rounded-xl group-hover:[transform:translateX(-15px)_translateY(-15px)] pointer-events-none"
        style={{ transition: "transform 0.3s ease-in-out" }}
      >
        {/* Card content */}
      </div>
    </div>
  </div>
);

export default HeroIllustration;
