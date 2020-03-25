import React from "react";
import withSvgContainer from "./withSvgContainer.js";
import styled from "styled-components";

/**
 * Svg Brain Pic
 * @component
 * @param {SvgComponentProps} props
 * @returns SvgComponent
 */
function SvgBrainPic(props){
  return (
    <svg
      id={"brain-pic-svg"}
      viewBox="0 0 1738 1692"
      fill={props.fill}
      width={props.width}
      height={props.height}
      {...props}
    >
      <g opacity={"81%"}
         fill={props.fill}
         clipPath="url(#BrainPic_svg__clip0)"
      >
        <path
          d="M1409.04 566.742l-21.93 24.761 46.6 101.795 30.15 66.03h2.75l-35.64-184.332h-5.48c-5.49-2.751-10.97-5.502-16.45-8.254zM890.926 13.768c-2.741-2.752-8.224-2.752-10.965-2.752l-38.378 55.025-24.672 35.766 74.015-88.04zM712.745 1097.73l24.672-35.77c-2.742-2.75-8.224-8.25-8.224-13.75l-109.653 24.76-16.448 5.5 49.344 16.51 52.085 16.51 8.224-13.76zM1315.84 178.808H1381.63c0-5.502-2.74-13.756-5.48-19.258l-60.31 19.258zM238.494 236.596l153.514-68.781-54.826 11.005c-35.637 11.005-68.533 33.015-98.688 57.776zM1406.3 200.842c5.48-11.005 16.45-16.508 27.41-16.508h2.74v-2.751c-2.74 0-2.74 0-5.48-2.751l-109.65 2.751 63.05 11.005 21.93 8.254zM701.775 57.754l82.24-49.522c-16.448 5.503-32.896 13.756-49.344 24.761h-2.741c-13.707-5.502-32.896-5.502-49.344-5.502l-2.742 13.756c10.966 2.751 16.448 8.254 21.931 16.507zM109.652 652.038c0-2.751 0-5.503 2.742-8.254l-82.24-38.517c-10.965 22.01-19.19 44.02-24.672 68.781l79.498-13.756 24.672-2.752v-5.502zM452.318 957.4c0 5.502 2.742 13.756 5.483 19.258l76.757-33.014 32.896-13.757L452.318 957.4zM775.794 181.557s-2.741 0 0 0l-16.448 104.546c2.742 2.752 8.224 2.752 10.966 5.503l46.602-52.273 10.966-13.756c-5.483-5.503-8.224-13.756-8.224-24.761 0-5.503 2.741-8.254 2.741-11.005l-19.189-13.756-8.224-2.752c-5.483 5.503-10.966 11.005-19.19 8.254zM710.004 178.815L742.9 286.113h8.224l16.447-104.547c-8.223-2.751-13.706-13.756-13.706-22.009 0-2.752 2.741-8.254 2.741-11.005l-60.309-46.771c-2.741 2.751-5.483 5.502-10.965 5.502l24.672 71.532z"/>
        <g>
          <path
            d="M1474.83 927.138V819.841h-8.22l-65.79 123.805-32.9 66.024 82.24-41.263c-2.74-2.752-2.74-8.254-2.74-13.757 2.74-13.756 13.7-24.761 27.41-27.512zM1340.51 500.727l43.86 85.287 19.19-22.009c-5.49-5.503-8.23-13.757-8.23-22.01 0-8.254 5.48-16.508 10.97-22.01l-142.55-162.322 76.76 143.064zM1082.82 1031.7l-19.19 162.32c5.48 2.75 10.97 2.75 16.45 5.5 0 0 2.74 0 2.74 2.76 2.74 5.5 2.74 8.25 5.48 13.75l19.19-77.03 32.9-132.06h-30.16c-2.74 11-13.7 22.01-27.41 24.76zM1699.62 938.177c-2.74-5.503-5.48-13.757-5.48-19.259l-2.74 35.766 5.48-8.254 2.74-8.253zM1112.98 313.625l95.94 5.503h8.23c2.74-11.005 8.22-16.508 16.45-22.01l-8.23-24.761-24.67-68.781h-10.97c-5.48 0-10.96-2.751-13.7-5.502l-52.09 68.78-21.93 27.513c8.23 5.502 10.97 11.005 10.97 19.258zM1170.54 1039.94l159 310.89c2.74-16.51 2.74-33.02 5.48-46.77 0 0 0-2.75 2.75-2.75h2.74l16.44 8.25 2.75-5.5-126.1-173.33-63.06-90.79zM1263.75 1012.44l8.22 22.01 90.47 247.61-5.49-264.11-76.75-24.765c-5.49 11.005-10.97 16.505-16.45 19.255zM1047.19 1009.68l-128.846 16.51-126.101 13.76v2.75c0 8.25-5.483 16.5-10.965 22.01l63.05 99.04c41.12-16.51 79.498-44.02 106.912-79.78h2.741s2.741 0 2.741 2.75c16.448 46.77 52.088 85.28 98.688 104.54l10.97-88.04 8.22-71.53c-13.71-2.75-21.93-11-27.41-22.01zM1455.64 814.353l-32.9 27.512-145.29 123.805c2.75 5.502 5.49 13.756 5.49 19.258v2.752l19.19 5.502 57.56 16.508 21.93-44.02 79.5-151.317c-2.74 2.751-5.48 2.751-5.48 0zM625.021 894.125l49.344-46.77c-5.483-5.503-8.224-13.756-8.224-24.761 0-2.751 0-8.254 2.741-11.005L479.731 654.77l-2.742 2.751 120.619 225.6c2.741 0 8.224-2.752 10.965 0 5.483 2.751 10.965 5.502 16.448 11.004zM597.605 968.43l2.742-16.507c-10.966 0-19.19-8.254-24.672-16.507l-115.136 49.522c8.224 27.512 21.931 55.022 38.379 77.032l84.981 11.01h5.482l8.224-104.55zM1699.62 1039.95l-16.45-57.777-57.57 156.817c35.64-24.76 60.31-57.77 74.02-99.04zM1370.66 1301.33l90.46 8.25 21.93 2.75c16.45-5.5 32.9-13.75 46.61-24.76l-126.11-198.09-38.37-57.77 5.48 269.62zM572.933 916.141c0-11.005 8.224-22.01 16.448-24.761l-21.93-41.269-98.688-184.331c-5.483 2.751-10.965 2.751-16.448 2.751h-5.483L296.06 990.424l98.687-24.761c16.448-8.254 32.896-22.01 46.603-33.015h2.741l2.741 2.751c0 5.503 2.742 11.005 2.742 16.508l32.896-8.254 87.722-22.01c2.741-2.751 2.741-2.751 2.741-5.502zM1696.88 643.798l-27.42 19.259-131.58 90.79 120.62-66.029 52.08-30.264-13.7-13.756zM1458.39 762.074l-76.76-165.073-213.83 46.771c0 5.502-2.74 8.254-2.74 11.005l134.33 57.775 145.29 63.278c2.74-8.253 8.22-11.004 13.71-13.756zM756.604 1070.2c-5.483 0-8.224-2.75-13.707-2.75l-13.706 19.26-19.19 27.51 63.051 68.78c21.93-2.75 41.12-8.25 63.05-16.51l-63.05-99.04c-5.483 2.75-10.966 5.5-16.448 2.75zM688.073 1149.99l-16.448 27.51c30.155 5.51 63.05 8.26 93.205 5.51l-57.568-63.28-19.189 30.26zM627.76 1130.76l24.671 44.02c2.742 0 8.224 2.75 13.707 2.75l35.637-60.53-35.637-11-68.533-22.01 30.155 46.77zM424.902 643.798L172.7 657.554c0 11.005-5.482 19.259-13.706 24.761l115.135 261.366 19.19 41.268 150.773-321.892c-10.966-2.752-16.448-11.005-19.19-19.259zM1206.18 200.842l30.16 85.287 2.74 11.005c2.74 0 8.22-2.751 10.96 0l27.42-88.039c-8.23-5.502-16.45-16.507-16.45-24.761l-38.38-5.502c-2.74 11.005-8.22 16.507-16.45 22.01zM693.555 858.38c-5.482 0-10.965-2.751-16.448-5.503l-46.602 46.771c5.483 5.503 5.483 13.756 5.483 22.01 0 2.751-2.742 8.254-2.742 11.005l104.171 82.537c2.741-2.75 5.482-5.5 10.965-5.5l-35.637-118.305-10.966-33.015h-8.224zM778.535 321.902c0 5.502-2.741 8.254-2.741 11.005l13.707 5.502 148.031 79.786-68.533-162.322-8.224-19.259c-2.741 0-8.224 2.751-10.965 0-5.483 0-10.966-2.751-16.448-5.502l-54.827 60.527-5.482 5.502c5.482 8.254 8.224 16.507 5.482 24.761zM866.256 236.6l79.498 187.083 82.236-68.78 27.42-22.01c-2.74-5.502-5.49-13.756-5.49-19.259 0-2.751 0-5.502 2.75-8.253l-109.657-52.273-65.792-30.264c-2.741 5.503-5.482 11.005-10.965 13.756zM1461.12 552.987c-2.74 8.253-10.96 16.507-19.19 19.258l35.64 184.332h2.74c10.97 0 19.19 5.502 24.67 13.756l104.17-71.532 84.99-60.527-233.02-85.287zM1326.8 1405.87l-71.28 236.6-13.7 49.52 106.91-13.75c-10.97-60.53-24.67-165.08-21.93-272.37zM1236.34 954.684l-93.21-283.376 8.23 324.644 65.79-11.005v-2.751c0-13.756 8.22-22.01 19.19-27.512zM671.624 808.834c5.483-5.503 10.965-11.005 19.189-13.757l-8.224-288.878-2.741-68.78h-2.741c-5.483 0-8.224-2.751-13.707-2.751L485.214 618.999c2.741 5.503 5.482 13.757 5.482 19.259 0 5.502-2.741 11.005-5.482 16.507l49.344 41.269 137.066 112.8zM1510.47 965.674c-2.75 11.005-10.97 22.01-21.93 24.761l24.67 118.305 32.89 159.57c30.16-30.27 49.35-71.53 52.09-115.55 0 0 0-2.75 2.74-2.75s2.74-2.76 5.48-2.76c2.74-2.75 5.48-2.75 8.23-5.5l10.96-33.01 49.35-137.563-164.48-5.503zM1699.62 847.386c24.67-19.258 38.38-52.273 35.64-82.536 0-11.005-2.74-19.259-8.23-30.264v-2.751c8.23-16.507 10.97-33.014 8.23-52.273 0-8.254-2.74-16.507-5.48-22.01l-5.49 2.751h-2.74l-21.93 187.083zM1452.9 976.684l-32.9 16.508-54.82 27.508 32.89 49.53 137.07 211.84c2.74-2.75 5.48-5.5 8.22-5.5l-60.31-286.13h-5.48c-10.97 0-19.19-5.502-24.67-13.756zM1047.18 995.921v-5.502l-307.026-134.81-19.189-8.254c-2.741 5.503-8.224 8.254-13.706 11.005l46.602 148.57h8.224c13.707 0 24.672 11 27.413 24.76l224.792-27.52 32.89-2.75v-5.499zM699.038 795.106c5.483 0 10.966 2.751 13.707 5.502l164.479-231.102c-8.223-5.503-10.965-16.508-10.965-27.513 0-2.751 2.742-8.253 2.742-11.005l-115.136-71.531-52.085-33.015c-5.483 5.503-10.966 8.254-16.448 11.005l5.482 129.307 8.224 228.352zM1104.75 638.293s0-2.751 0 0l-101.43-44.019-76.753-33.015c-5.483 11.005-16.448 16.508-30.155 16.508-5.482 0-8.224-2.752-13.706-2.752l-21.931 30.264-142.549 200.839c2.741 2.751 5.483 5.502 8.224 11.005l254.943-107.298 128.847-55.024c-2.75-5.503-5.49-11.005-5.49-16.508zM1285.68 209.101l-27.41 88.039c5.48 2.751 10.96 5.502 13.7 8.253l76.76-49.522 54.83-35.766v-13.756l-90.47-16.507c-2.74 11.005-13.7 19.259-27.41 19.259zM1702.36 1026.2c5.48-24.76 5.48-52.269 0-77.03l-13.71 22.009 13.71 55.021zM1504.99 781.331c0 2.751 2.74 8.254 0 11.005 0 5.502-2.74 11.005-5.49 16.507l120.62 107.298 57.57 49.521 2.74-22.009 2.74-35.766c-5.48-13.756-13.7-24.761-24.67-35.766v-2.751l2.74-2.751c10.97-2.752 19.19-5.503 27.42-11.005l10.96-93.542 10.97-96.292-205.6 115.551zM1222.63 170.569l38.38 5.502c2.74-11.005 10.96-19.258 19.19-19.258l-8.23-71.532c-16.45-19.259-38.38-33.015-63.05-38.517-2.74 0-2.74-2.751-5.48-2.751l-8.23 96.292c16.45 2.752 27.42 16.508 27.42 30.264zM1255.53 1015.2h-10.97c-13.7 0-24.67-11-27.41-24.76l-65.79 13.76 200.11 277.87-13.7-44.02-82.24-222.85zM1189.73 140.3l2.74-46.77 5.49-52.274c-16.45-8.254-35.64-11.005-54.83-8.254h-5.48c-19.19-13.756-43.86-19.258-68.54-16.507-5.48 0-10.96 2.751-16.44 2.751l41.12 44.02 79.5 82.536c5.48-2.751 10.96-5.502 16.44-5.502zM1291.16 154.043c10.97 0 19.19 8.253 21.93 16.507l24.67-8.254 35.64-11.005c-16.45-35.765-52.09-60.526-90.46-60.526l8.22 63.278s-2.74 0 0 0zM882.704 200.832l71.274-8.254 205.602-22.01v-2.751c0-8.254 2.74-13.756 8.22-19.259L1044.44 16.5C1017.03-.008 984.133-5.51 951.237-2.76c-2.741 0-8.224 0-10.965 2.751l-68.534 165.074-5.482 13.756c8.224 5.502 13.706 11.005 16.448 22.01zM800.465 162.308c0 2.751 0 5.502-2.741 5.502l27.413 19.259c5.483-8.254 16.448-13.757 27.413-11.005h5.483l54.827-134.81 19.189-35.766c-10.965 2.751-19.189 5.503-30.155 11.005h-2.741L792.241 143.049c5.483 2.751 8.224 11.005 8.224 19.259zM1727.03 649.274c-2.74-2.751-2.74-8.253-5.48-11.004V652.025l5.48-2.751zM1461.13 544.735l2.74 2.751 227.53 88.039v-2.751l2.74-16.507v-2.751c2.74-8.254 2.74-19.259 0-27.513-2.74-16.507-8.23-33.014-19.19-46.77l-213.82 2.751h-2.75c2.75 0 2.75 0 2.75 2.751zM707.259 77.034c0 5.503-2.741 13.756-5.482 16.507l60.309 46.771c5.483-2.751 10.965-5.502 16.448-2.751h5.483L874.48 5.502C855.291 0 833.36 0 811.43 0h-2.741l-101.43 60.527v16.507zM1713.33 638.279v-8.254c-2.75-2.751-5.49-5.502-8.23-8.253l-2.74 16.507 13.71 11.005-2.74-11.005zM1452.9 231.098l76.76 88.039 117.88 134.81c-10.97-30.264-32.9-55.025-60.31-71.532l-2.74-2.751v-11.005c-5.49-46.771-32.9-85.288-76.76-107.298l-2.74-2.751c0-5.502-2.74-11.005-5.49-16.507l-43.86-19.259c0 2.751 0 5.503-2.74 8.254zM1433.71 242.117v269.619c13.71 2.752 24.67 11.005 27.41 24.761l211.08-2.751c-5.48-5.502-8.22-8.253-13.7-11.005l-2.74-2.751v-30.263c0-5.503 0-8.254-2.75-13.756l-16.44-16.508-189.15-217.346c-2.75-2.751-8.23 0-13.71 0zM8.223 784.106l-2.741-2.751c5.483 24.761 13.707 49.522 24.672 71.532l10.965 8.253 57.568 38.517L8.223 784.106zM646.952 404.424c0-5.502 2.741-11.004 5.483-16.507L444.094 181.576c-2.741 2.751-8.224 5.502-13.707 5.502l16.448 233.854 13.707 181.58c8.224 0 13.706 5.503 19.189 8.254l178.186-181.581c-8.224-5.502-13.706-16.507-10.965-24.761zM1480.32 819.867v107.297c16.44 0 27.41 13.756 30.15 30.264l161.74 8.253-126.1-110.048-52.09-44.02c-2.74 5.502-8.22 8.254-13.7 8.254zM109.651 663.035L2.74 682.294c-2.742 27.512-2.742 52.273 0 79.785v2.751l109.653 137.561 10.965-110.048 13.707-107.298c-13.707 0-21.931-11.005-27.414-22.01zM1148.61 1290.31c2.74 0 2.74 2.75 0 0 19.19 35.76 35.64 74.28 49.34 115.55l131.59-41.27-183.67-354.91-54.83 214.6c13.71 27.51 35.64 49.52 57.57 66.03zM145.286 621.752c2.742 0 8.224 2.752 10.966 2.752l252.201-442.947c-2.741-2.751-8.223-5.502-8.223-8.254l-79.499 35.766-95.946 41.269c-30.155 33.014-52.085 71.531-63.051 112.8v2.751C93.201 412.66 52.081 492.445 49.34 574.982v2.751c-5.483 8.253-8.224 13.756-13.707 22.01l74.016 35.765 2.741 2.752c8.224-11.005 19.19-16.508 32.896-16.508zM117.873 918.918l-2.741 2.751-10.965 22.01c38.378 27.512 82.239 46.771 128.842 52.273h5.482l38.379-2.751-54.827-24.761-104.17-49.522zM679.846 374.176c8.224 0 13.707 2.751 19.19 8.253l27.413-38.517c-8.224-5.502-13.707-16.507-10.965-27.512v-5.502l-265.909-134.81v2.751l208.341 206.342c5.483-8.254 13.706-11.005 21.93-11.005zM540.041 1111.47c30.155 27.51 65.792 49.52 104.17 60.53l-38.378-63.28-16.448-27.52-49.344 30.27zM38.377 866.637c16.447 27.513 38.378 52.274 63.05 71.532l2.741-8.254 5.483-13.756-71.274-49.522zM745.64 349.38c-2.742 0-8.224-2.751-10.966-2.751l-30.154 38.517c5.482 5.502 8.224 13.756 5.482 22.009l216.565 16.508-21.931-13.756-131.583-71.532c-8.224 8.254-16.448 13.756-27.413 11.005zM726.45 1042.7v-5.5c0-5.51 2.741-11.01 5.482-13.76l-104.17-82.536c-5.483 5.502-13.707 11.005-21.931 11.005l-10.965 121.051 49.344-11 82.24-19.26zM424.906 123.793c5.482 0 10.965 2.751 16.448 5.502l35.637-41.268c-24.672 5.502-46.603 16.507-65.792 30.263l2.742 5.503h10.965zM548.261 115.554l95.946-33.015c0-2.751-2.741-8.254 0-11.005 0-16.507 13.707-27.512 30.155-30.263V27.515h-13.707c-46.602 5.502-87.722 22.01-126.101 49.522h-19.189c-8.224 0-19.189 2.75-27.413 5.502l-41.12 49.522c2.741 2.751 2.741 5.502 5.483 8.254l95.946-24.761zM501.659 1070.23c8.224 13.76 19.189 24.76 30.154 35.77l46.603-24.76-27.413-2.75-49.344-8.26zM180.926 751.091l-27.413-66.029c-2.741 0-5.483 2.751-8.224 2.751l-5.483 38.517-19.189 184.332 57.568 24.761 106.912 49.522-104.171-233.854zM1143.13 976.691l-5.48-291.629-43.86 283.375c10.96 5.503 19.19 16.508 19.19 27.513h32.89l-2.74-19.259zM1091.04 346.637l8.23 49.522 35.63 211.844h10.97l76.76-228.351 8.22-24.761c-10.96-5.502-16.45-16.507-16.45-27.512l-101.43-5.503c-2.74 11.005-10.96 22.01-21.93 24.761zM882.706 217.349l172.704 82.536c5.48-11.004 16.45-16.507 30.15-16.507 5.49 0 10.97 2.751 13.71 5.503l71.28-93.542c-5.49-5.502-8.23-11.005-8.23-16.507l-276.873 27.512v2.751c-2.741 2.751-2.741 5.503-2.741 8.254zM172.702 649.262l191.892-11.004 60.31-2.752v-2.751c0-16.507 13.706-27.512 27.413-30.263l-30.155-412.683h-2.741c-2.741 0-5.483 0-8.224-2.751L161.736 630.004c5.483 2.751 10.966 11.005 10.966 19.258zM945.755 434.668l-30.154 82.536c10.965 5.503 19.189 19.259 16.447 30.264v5.502l178.182 74.283c0-2.751 2.75-5.502 2.75-8.254l-2.75-2.751-164.475-181.58zM1115.72 616.248c2.74-2.751 8.22-5.502 10.96-8.254l-43.86-261.365h-5.48c-8.23 0-13.71-5.503-19.19-8.254l-109.655 90.79 164.475 184.332 2.75 2.751zM452.318 167.799l265.909 134.81c2.741-5.503 8.224-11.005 16.448-13.757l-21.931-68.78-35.637-112.8h-5.483c-10.965 0-19.189-8.254-24.671-16.507L455.06 151.29v8.254c0 2.751 0 5.503-2.742 8.254zM1406.3 228.328l-131.59 82.536c2.74 5.503 5.49 11.005 2.74 19.259 0 8.254-2.74 13.756-8.22 19.259l93.2 104.546 52.09 57.776c2.74-2.752 8.22-2.752 10.97-2.752V242.084c-8.23-2.751-13.71-8.254-19.19-13.756zM1329.54 1375.61l-63.05 16.51-65.79 19.26c24.67 77.03 35.63 165.07 38.38 261.36l90.46-297.13zM874.482 525.475c5.483-8.254 16.448-13.757 27.413-11.005h5.483l30.154-82.537-230.271-16.507c0 2.751-2.741 2.751-2.741 5.502l169.962 104.547zM1239.08 357.663l-32.9 96.293-52.09 159.571c8.23 5.502 13.71 13.756 16.45 24.761l211.09-46.771-52.09-99.044-71.27-134.81c-2.75 2.751-8.23 2.751-13.71 2.751-2.74-2.751-2.74-2.751-5.48-2.751zM825.14 781.357l-95.947 41.268v8.254c0 5.503-2.741 8.254-2.741 11.005l323.478 140.312h2.74c5.48-11.005 19.19-19.258 30.15-16.507h2.75l46.6-297.132c-5.48-2.751-13.71-5.502-16.45-11.005L825.14 781.357zM1441.93 786.852v-5.502l-279.61-121.054c-2.74 2.751-8.22 8.254-13.71 8.254l63.05 195.336 27.42 85.288h8.22c8.22 0 13.71 2.751 19.19 8.254l109.65-90.791 71.28-57.775c-2.74-5.503-5.49-13.756-5.49-22.01z"/>
        </g>
      </g>
      <defs>
        <clipPath id="BrainPic_svg__clip0">
          <path fill="white" d="M0 0h1738v1692H0z"/>
        </clipPath>
      </defs>
    </svg>
  );
}

/**
 * @type withSvgContainer
 */
export default withSvgContainer(SvgBrainPic);
