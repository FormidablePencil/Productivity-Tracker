import styled from 'styled-components';
//exsc
export const StrandardTimerBtn = styled.TouchableOpacity`
  width: 120px;
  height: 120px;
  margin: 10px;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
`;
export const TimerGreenBtn = styled(StrandardTimerBtn)`
  background-color: ${props => props.conditionalColors == true ? '#8cff66' : '#467a32'};
`;
export const TimerYellowBtn = styled(StrandardTimerBtn)`
  background-color: ${props => props.conditionalColors == true ? '#f7ff00' : '#a6a22a'};
`;
export const TimerRedBtn = styled(StrandardTimerBtn)`
  background-color: ${props => props.conditionalColors == true ? '#ff510c' : '#8c3429'};
`;
export const TimerContainer = styled.View`
  background-color: rgb(53,	52,	51);
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
export const StandardText = styled.Text`
  color: ${props => props.color == 'black' ? '#000' : '#d1d1d1'};
  font-size: 20px;
`;
export const StandardTextBlack = styled.Text`
  color: black;
`;





//IngoScreen
export const Timers = styled.View`
  flex: 1;
  margin: 0px 5px 0px 5px;
  align-items: center;
  background-color: ${props => props.bgColor ? props.bgColor : '#fff'};
  justify-content: center;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  height: ${props => props.height ? props.height + 'px' : '20px'};
`;

export const Timers2 = styled(Timers)`
  background-color: rgba(255,	239,	48, .3);
`;
export const Timers3 = styled(Timers)`
  background-color: rgba(255,	81,	12, .3);
`;

export const InfoContainer = styled.View`
    flex-direction: row;
    background-color: rgb(53,	52,	51);
    flex: 1;
    width: 100%;
    justify-content: space-around;
    align-items: center;
`;