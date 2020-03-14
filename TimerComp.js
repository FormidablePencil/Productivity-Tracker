import React from 'react'
import { View, Text } from 'react-native'
import { TimerGreenBtn, TimerYellowBtn, TimerRedBtn, StandardText, StandardTextBlack } from './styles/stylesGlobal'

const TimerComp = ({toggleTimers, productiveTimer, calculatedTime}) => {
   return (
      <View>
         <TimerGreenBtn conditionalColors={toggleTimers.green} onPress={() => productiveTimer({ colorAssociatedToBtn: 'green' })} >
            <StandardText>Time: {Math.floor(calculatedTime.green)}s</StandardText>
            {toggleTimers.green ?
               <StandardTextBlack>right now on</StandardTextBlack>
               : <StandardText>right now off</StandardText>
            }
         </TimerGreenBtn>
         <TimerYellowBtn conditionalColors={toggleTimers.yellow} onPress={() => productiveTimer({ colorAssociatedToBtn: 'yellow' })}>
            <StandardText>Time: {Math.floor(calculatedTime.yellow)}s</StandardText>
            {toggleTimers.yellow ?
               <StandardTextBlack>right now on</StandardTextBlack>
               : <StandardText>right now off</StandardText>
            }
         </TimerYellowBtn>
         <TimerRedBtn conditionalColors={toggleTimers.red} onPress={() => productiveTimer({ colorAssociatedToBtn: 'red' })}>
            <StandardText>Time: {Math.floor(calculatedTime.red)}s</StandardText>
            {toggleTimers.red ?
               <StandardTextBlack>right now on</StandardTextBlack>
               : <StandardText>right now off</StandardText>
            }
         </TimerRedBtn>
      </View>
   )
}

export default TimerComp
