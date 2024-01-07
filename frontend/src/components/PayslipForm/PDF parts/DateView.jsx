import React from 'react';
import { Text, View, } from '@react-pdf/renderer';

import styles from '../style'

const DateView = () => {
    const currentYear = new Date().getFullYear();
    const year = currentYear.toString().split('');
  
    return (
      <View style={{width: 60,
        height: 12,
        backgroundColor: 'white',
        position:'absolute',
        top:93.8,
        left:139}}>
        <View style={styles.box}>
          <View style={styles.lineContainer}>
            <View style={styles.transparentLine} />
            {year.map((digit, index) => (
              <React.Fragment key={index}>
                <Text style={{fontSize:10,marginTop:15}}>{digit}</Text>
                {index !== 3 && <View style={styles.vline} />}
              </React.Fragment>
            ))}
            <View style={styles.transparentLine} />
          </View>
        </View>
      </View>
    );
};
  

  export default DateView;