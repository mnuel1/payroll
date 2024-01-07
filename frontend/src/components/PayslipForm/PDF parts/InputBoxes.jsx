import React from 'react';
import { Text, View, } from '@react-pdf/renderer';
import moment from 'moment';


import styles from '../style'

const formattedDate = moment().format('MM/DD');


export const Box1 = ({style, text}) => {

    return (
        <View style={style}>                                 
                <Text style={styles.inputText}>
                {text}
                </Text>                                    
        </View>
    );
};

export const Checkbox = ({ style, checked }) => {
    return (
        checked ? (
            <View style={style}>
               
            </View>
        ) : (
            null
        )
    );
};

  

export const RDObox = ({style}) => {

    return (
        <View style={style}>
            <View style={styles.box}>
                <View style={styles.lineContainer}>                                    
                <View style={styles.transparentLine} />
                    <Text style={{fontSize:10,marginTop:15}}> {1}</Text>
                    <View style={styles.vline} />
                    <Text style={{fontSize:10,marginTop:15}}> {1}</Text>       
                    <View style={styles.vline} />
                    <Text style={{fontSize:10,marginTop:15}}> {1}</Text>
                    <View style={styles.transparentLine} />
                </View>
            </View>
        </View>
    );
};

export const ZipCode = ({style}) => {

    return (
        <View style={style}>
            <View style={styles.box}>
                <View style={styles.lineContainer}>                                    
                <View style={styles.transparentLine} />
                    <Text style={{fontSize:10,marginTop:15}}> {1}</Text>
                    <View style={styles.vline} />
                    <Text style={{fontSize:10,marginTop:15}}> {1}</Text>       
                    <View style={styles.vline} />
                    <Text style={{fontSize:10,marginTop:15}}> {1}</Text>
                    <View style={styles.vline} />
                    <Text style={{fontSize:10,marginTop:15}}> {1}</Text>
                    <View style={styles.transparentLine} />
                </View>
            </View>
        </View>
    );
};

export const Contact = ({style}) => {

    return (
        <View style={style}>
            <View style={styles.box}>
                <View style={styles.lineContainer}>                                    
                <View style={styles.transparentLine} />
                    <Text style={{fontSize:10,marginTop:15}}> {1}</Text>
                    <View style={styles.vline} />
                    <Text style={{fontSize:10,marginTop:15}}> {1}</Text>       
                    <View style={styles.vline} />
                    <Text style={{fontSize:10,marginTop:15}}> {1}</Text>
                    <View style={styles.vline} />
                    <Text style={{fontSize:10,marginTop:15}}> {1}</Text>
                    <View style={styles.vline} />
                    <Text style={{fontSize:10,marginTop:15}}> {1}</Text>
                    <View style={styles.vline} />
                    <Text style={{fontSize:10,marginTop:15}}> {1}</Text>
                    <View style={styles.vline} />
                    <Text style={{fontSize:10,marginTop:15}}> {1}</Text>
                    <View style={styles.vline} />
                    <Text style={{fontSize:10,marginTop:15}}> {1}</Text>
                    <View style={styles.vline} />
                    <Text style={{fontSize:10,marginTop:15}}> {1}</Text>
                    <View style={styles.vline} />
                    <Text style={{fontSize:10,marginTop:15}}> {1}</Text>
                    <View style={styles.vline} />
                    <Text style={{fontSize:10,marginTop:15}}> {1}</Text>
                    
                    <View style={styles.transparentLine} />
                </View>
            </View>
        </View>
    );
};

export const MonthDay = ({style}) => {

    return (          
        <View style={style}>
            <View style={styles.box}>
                <View style={styles.lineContainer}>                                    
                <View style={styles.transparentLine} />
                    <Text style={{fontSize:10,marginTop:15}}> {formattedDate[0]}</Text>
                    <View style={styles.vline} />
                    <Text style={{fontSize:10,marginTop:15}}> {formattedDate[1]}</Text>                           
                    <View style={styles.transparentLine} />
                </View>
            </View>
            <View style={styles.box}>
                <View style={styles.lineContainer}>                                    
                <View style={styles.transparentLine} />
                    <Text style={{fontSize:10,marginTop:15}}> {formattedDate[3]}</Text>
                    <View style={styles.vline} />
                    <Text style={{fontSize:10,marginTop:15}}> {formattedDate[4]}</Text>                           
                    <View style={styles.transparentLine} />
                </View>
            </View>
        </View>
    );
};

