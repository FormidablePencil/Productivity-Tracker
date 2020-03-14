import React, { useState, useEffect, useContext } from 'react'
import { Button } from 'react-native'
import { TimerContainer } from '../styles/stylesGlobal'
import { AppContext } from '../App'
import { calculateTotalTime, usePrevious } from '../logic/logicTimeScreen'
import TimerComp from '../TimerComp'

const TimerPage = () => {
   const timerSchema = { green: [], yellow: [], red: [] }
   const [timerStartArr, settimerStartArr] = useState(timerSchema)
   const [timerEndArr, settimerEndArr] = useState(timerSchema)
   const toggleTimersSchema = { green: false, yellow: false, red: false }
   const [toggleTimers, settoggleTimers] = useState(toggleTimersSchema)
   const { calculatedTime, setcalculatedTime } = useContext(AppContext)
   const displayTimersSchema = { productivityGreen: '', breakYellow: '', notWorkedRed: '', timeOffWorkTotal: '' }
   const [displayTimers, setdisplayTimers] = useState(displayTimersSchema)

   const reset = () => {
      settimerEndArr(timerSchema)
      settimerStartArr(timerSchema)
      settoggleTimers(toggleTimersSchema)
      setcalculatedTime(timerSchema)
   }
   const productiveTimer = ({ colorAssociatedToBtn }) => {
      if (toggleTimers[colorAssociatedToBtn] === false) { //if the previously toggled color was not the current one, or another awords if same color was not tapped twice
         if (Object.entries(toggleTimers).filter(item => item[1] === false).length !== 3) { //if not all colors where toogled false
            Object.entries(toggleTimers).map(item => {
               if (item[1] === true) {
                  pushDateNowToEndArr(item[0])
                  toggleTheTimerOnOrOff(item[0], colorAssociatedToBtn) //toggles off prev and toggles on new
                  pushDateNowToStartArr(colorAssociatedToBtn)
               }
            })
         } else {  //if all colors were toggled false
            settoggleTimers({ ...toggleTimers, [colorAssociatedToBtn]: !toggleTimers[colorAssociatedToBtn] })
            pushDateNowToStartArr(colorAssociatedToBtn)
         }
      } else if (toggleTimers[colorAssociatedToBtn] === true) { //if the toggle of the new color is true then that means we've press on one color 2 times 
         pushDateNowToEndArr(colorAssociatedToBtn)
         settoggleTimers({ ...toggleTimers, [colorAssociatedToBtn]: !toggleTimers[colorAssociatedToBtn] })
      }
   }
   const pushDateNowToStartArr = (colorAssociatedToBtn) => {
      settimerStartArr({ ...timerStartArr, [colorAssociatedToBtn]: [...timerStartArr[colorAssociatedToBtn], Date.now()] }) //pushed to array in obj react state //* seperate into funciton
   }
   const pushDateNowToEndArr = (colorAssociatedToBtn) => {
      settimerEndArr({ ...timerEndArr, [colorAssociatedToBtn]: [...timerEndArr[colorAssociatedToBtn], Date.now()] }) //pushed to array in obj react state but to offTimer array this time
   }
   const toggleTheTimerOnOrOff = (prevToggledColor, colorAssociatedToBtn) => {
      settoggleTimers({ ...toggleTimers, [colorAssociatedToBtn]: true, [prevToggledColor]: false }) //toggle the timer to false and true
   }

   const prevToggleTimerState = usePrevious(toggleTimers)

   useEffect(() => { //when another btn is pressed the calculating function getTime() is run for the previous btn
      if (prevToggleTimerState !== toggleTimers && prevToggleTimerState !== undefined) {
         const entries = Object.entries(prevToggleTimerState)
         const filterdPreviouslySecetedTimers = entries.filter(item => item[1] === true).map(item => {
            getTime([item[0]])
         })
      } else {
      }
   }, [toggleTimers])

   const getTime = (colorAssociatedToBtn) => {
      let resultCalc = ''
      if (typeof timerEndArr[colorAssociatedToBtn][0] === 'number') { //inssures that the calculate funciton doesn't run if there's now values to calculate with 
         resultCalc = calculateTotalTime(timerStartArr[colorAssociatedToBtn], timerEndArr[colorAssociatedToBtn])
         setcalculatedTime({ ...calculatedTime, ...{ [colorAssociatedToBtn]: resultCalc } })
      }
      return resultCalc
   }

   return (
      <TimerContainer>
         <TimerComp toggleTimers={toggleTimers} productiveTimer={productiveTimer} calculatedTime={calculatedTime} />
         <Button onPress={() => reset()} title={'reset'} />
      </TimerContainer>
   )
}

export default TimerPage

//NOTES:
// settimer123([...timer123, 'timer123']) //how you push within react state
// settoggleTimers({ ...toggleTimers, ...{ ['green']: true } }) //how you edit an iten

//const [timerEndArr, settimerEndArr] = useState({ green: [], yellow: [], red: [] }) //adding to an array that's nested in an object
// settimerStartArr({...timerStartArr, green: [...timerStartArr.green, 'sdd']})