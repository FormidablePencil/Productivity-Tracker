import { useRef, useEffect } from "react";

export const calculateTotalTime = (onArr, offArr) => {
   let timeAddedUpArr = []
   for (let i = 0; i < offArr.length; i++) {
      let calculatedMili = offArr[i] - onArr[i];
      let calculatedSec = calculatedMili / 1000
      timeAddedUpArr.push(calculatedSec)
   }
   const reducer = (accumulator, currentValue) => accumulator + currentValue;
   const calculatedTotal = timeAddedUpArr.reduce(reducer)
   return calculatedTotal
}

export const usePrevious = (value) => {
   const ref = useRef();
   useEffect(() => {
      ref.current = value;
   });
   return ref.current;
}
