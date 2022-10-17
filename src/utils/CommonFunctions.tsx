// import axios from "axios";

// Environment Url
// const URL = process.env.REACT_APP_DATAPOINTS_URL
// export function classNames(...classes: string[]) {
//   return classes.filter(Boolean).join(' ')
// }

// export function Capitalize(str) {
//   var i,
//     frags = str.split("_");
//   for (i = 0; i < frags.length; i++) {
//     frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
//   }
//   return frags.join(" ");
// }

// export const scrollToBottom = () => {
//   window.scrollTo(0, 0);
// };

export const getYear = () => {
  return new Date().getFullYear();
}

// export const dataPoints = (userId, event, storeId, context) => {
//   const payload = {
//     userId,
//     event,
//     storeId,
//     context,
//   };
//   try {
//     const  data  = axios.post(`${URL}/segmentationTrackingEndpoint`,payload) 
//   } catch (error) {
//     console.log(error)
//   }
// }

