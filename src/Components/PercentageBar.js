import React, {useState, memo} from 'react';

import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const PercentageBar =memo(
  function({
   navigation,
   percentage= 56,
   height =15,
   backgroundColor,
   completedColor,
   targetedValue = 40,
   completedActivity = 12
 }) {
   return (
     
       <View style={{justifyContent: 'center', width: '100%',paddingHorizontal:10}}>
         <View
           style={{
             height: height+2,
             marginVertical: 5,
             borderRadius: 50,
             borderColor: 'gray',
             borderWidth: 1,
             flexDirection:'row',
             position:'relative',
   
           }}
         >
         <LinearGradient
           colors={percentage < 10 ?  ['#ff4d6d','#ff4d6d'] : percentage < 20 ? ['#ff4d6d', '#ef233c'] : percentage < 50 ? ['#ff4d6d','#ef233c', '#f49f0a'] : percentage < 70 ? ['#ff4d6d','#ef233c', '#f49f0a','#52b788'] : ['#ff4d6d','#ef233c', '#f49f0a','#52b788','#40916c'] }
           start={
             {
                 x:0,
                 y:1
             }
           }
           end={{
             x:1,
             y:0
           }}
           style={{
             width: percentage ? percentage > 200 ? `10%` : percentage > 100 ? `${100 - (percentage - 100)}%` : percentage == 100 ? "97%" :  `${percentage}%` : 0,
 // width:'70%',
             height: height,
             // marginVertical: 10,
             // borderRadius:50,
             borderTopLeftRadius: 50,
             borderBottomLeftRadius:50,
             // backgroundColor: getCompletedColor,
             // position: 'absolute',
             // bottom:20
           }}
         />
         <View
          style={{
             width: 15,
             height: 40,
             // marginVertical: 10,
             borderRadius: 5,
             borderWidth:2,
             borderColor:'#264653',
             backgroundColor: '#edf754',
             position: 'relative',
             bottom:3,
             zIndex:1
             // bottom:20
           }}
         />
          { percentage > 100 && <LinearGradient
           colors={['rgb(64, 145, 108)',' rgb(64, 145, 108)']}
           start={
             {
                 x:0,
                 y:1
             }
           }
           style={{
             width: percentage ? percentage > 200 ? `90%` : `${percentage - 100}%` : 0,
             height: height,
             // marginVertical: 10,
             borderTopRightRadius: 50,
             borderBottomRightRadius:50,
             backgroundColor: 'green',
             position: 'relative',
             right:15
             // position: 'absolute',
             // bottom:20
           }}
         />}
         </View>
         <View style={{flexDirection:'row',}}>
 
         <View
           style={{
             width: percentage ? percentage > 100 ? `${100 - (percentage - 100)}%` :'auto': '50%',
             height: height,
             // borderWidth:1
           }}>
           <Text style={{textAlign: percentage == 0 ? 'left' : 'right', fontSize:16, color:'#a52a2a', fontWeight:'600' }}>{percentage ? percentage > 100 ? targetedValue : `${percentage}% Completed` : '0% Completed'}</Text>
         </View>
         <View
           style={{
             width: percentage ? percentage > 100 ? `${percentage - 100}%` : 'auto' : 0,
             height: height,
             flex:1,
             // borderWidth:1
           }}>
           <Text style={{textAlign: 'right',fontSize:16, color:'#a52a2a',  fontWeight:'600'}}>{percentage > 100 ? completedActivity : targetedValue}</Text>
         </View>
         </View>
       </View>
   
   );
 })
export default PercentageBar;