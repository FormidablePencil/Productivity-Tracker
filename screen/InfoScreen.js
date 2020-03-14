import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { InfoContainer, StandardText, TimerGreenBtn, Timers, Timers2, Timers3 } from '../styles/stylesGlobal'
import { AppContext } from '../App'

const InfoScreen = () => {
   const obj = {
      green: 'green',
      yellow: 'break',
      red: 'off work',
      pink: 'overall productivity',
      white: ''
   }

   const calculatedTime = useContext(AppContext)
   return (
      <InfoContainer>
         {Object.entries(calculatedTime.calculatedTime).map(item => {
            item[0]
            return (
               <Timers
                  key={obj[item[0]]}
                  height={typeof calculatedTime.calculatedTime[item[0]] === 'number' ? calculatedTime.calculatedTime[item[0]] : '0'}
                  bgColor={item[0]}>
                  <StandardText>{Math.floor(item[1])}s</StandardText>
                  <StandardText>{obj[item[0]]}</StandardText>
               </Timers>
            )
         })}
         <Timers
            height={typeof calculatedTime.calculatedTime.green === 'number'
               && typeof calculatedTime.calculatedTime.yellow === 'number' ?
               calculatedTime.calculatedTime.green / calculatedTime.calculatedTime.yellow : '0'}
            bgColor={'#FF6767'}
         >
            <StandardText>{obj.pink}</StandardText>
         </Timers>
      </InfoContainer>
   )
}

export default InfoScreen
