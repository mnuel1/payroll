import React from 'react';
import { Document, Page, View, Image, Text } from '@react-pdf/renderer';
import TINDisplay from './PDF parts/TIN';
import { DateBox } from './PDF parts/DateViewBoxes';
import { SignatureView } from './PDF parts/SignatureView';
import { Box1, RDObox, ZipCode, Contact, Checkbox, MonthDay } from './PDF parts/InputBoxes';
import DateView from './PDF parts/DateView';
import bir from '../../assets/form.jpg'

import { payeeStyle, payorStyle, payorStyle1, signature1, signature2, signature3, signature4, bday, date2,
    date3, date4, zipcode1, zipcode2, zipcode3, zipcode4, 
    Name, RegisteredAddress, LocalAddress, RDO, contact, minwageday, minwagemonth,
    checkedbox, checkedbox1, checkedbox2, EmployerName , EmployerAddress, 
    EmployerName1 , EmployerAddress1, sumbox1, sumbox2, sumbox3,
    sumbox4, sumbox5, sumbox6, sumbox7, sumbox8, sumbox9, sumbox10,
    sumbox11, monthday, monthday1,
    bbox1, bbox2, bbox3, bbox4, bbox5, bbox6, bbox7, 
    bbox8, bbox9, bbox10, bbox11, bbox12, bbox13, bbox14, 
    bbox15, bbox16, bbox17, bbox18, bbox19, bbox20, bbox21, 
    bbox22, bbox23, bbox24, bbox25, bbox26
    
 } from './PDF parts/customStyles';
import styles from '../FormPreview/style'

export const Payslip = ({}) => {
  
    const MyDoc = () => (
        <Document pageMode='fullScreen'>
            <Page size="A4" style={styles.page}>        
                <Image src={bir}/>            
                <TINDisplay sourceType={1} style={payeeStyle}/> 
                <DateView/>
                <Box1 style={Name} text={'Marin, Manuel Armentano'}/>
                <RDObox style={RDO}/>
                <ZipCode style={zipcode1}/>
                <ZipCode style={zipcode2}/>
                <Box1 style={RegisteredAddress} text={'Marin, Manuel Armentano'}/>
                <Box1 style={LocalAddress} text={'Marin, Manuel Armentano'}/>
                <DateBox style={bday}/>
                <Contact style={contact}/>
                <Box1 style={minwageday} text={'100'}/>
                <Box1 style={minwagemonth} text={'1000'}/>
                <Checkbox style={checkedbox} checked={true}/>

                <TINDisplay sourceType={1} style={payorStyle}/> 
                <Box1 style={EmployerName} text={'Marin, Manuel Armentano'}/>
                <Box1 style={EmployerAddress} text={'Marin, Manuel Armentano'}/>
                <ZipCode style={zipcode3}/>

                <Checkbox style={checkedbox1} checked={true}/>
                <Checkbox style={checkedbox2} checked={true}/>

                <TINDisplay sourceType={1} style={payorStyle1}/> 
                <Box1 style={EmployerName1} text={'Marin, Manuel Armentano'}/>
                <Box1 style={EmployerAddress1} text={'Marin, Manuel Armentano'}/>
                <ZipCode style={zipcode4}/>
                
                <Box1 style={sumbox1} text={'100'}/>
                <Box1 style={sumbox2} text={'100'}/>
                <Box1 style={sumbox3} text={'100'}/>
                <Box1 style={sumbox4} text={'100'}/>
                <Box1 style={sumbox5} text={'100'}/>
                <Box1 style={sumbox6} text={'100'}/>
                <Box1 style={sumbox7} text={'100'}/>
                <Box1 style={sumbox8} text={'100'}/>
                <Box1 style={sumbox9} text={'100'}/>
                <Box1 style={sumbox10} text={'100'}/>
                <Box1 style={sumbox11} text={'100'}/>

                <MonthDay style={monthday}/>
                <MonthDay style={monthday1}/>

                <Box1 style={bbox1} text={'100'}/>
                <Box1 style={bbox2} text={'100'}/>
                <Box1 style={bbox3} text={'100'}/>
                <Box1 style={bbox4} text={'100'}/>
                <Box1 style={bbox5} text={'100'}/>
                <Box1 style={bbox6} text={'100'}/>
                <Box1 style={bbox7} text={'100'}/>
                <Box1 style={bbox8} text={'100'}/>
                <Box1 style={bbox9} text={'100'}/>
                <Box1 style={bbox10} text={'100'}/>
                <Box1 style={bbox11} text={'100'}/>
                <Box1 style={bbox12} text={'100'}/>
                <Box1 style={bbox13} text={'100'}/>
                <Box1 style={bbox14} text={'100'}/>
                <Box1 style={bbox15} text={'100'}/>
                <Box1 style={bbox16} text={'100'}/>
                <Box1 style={bbox17} text={'100'}/>
                <Box1 style={bbox18} text={'100'}/>
                <Box1 style={bbox19} text={'100'}/>
                <Box1 style={bbox20} text={'100'}/>
                <Box1 style={bbox21} text={'100'}/>
                <Box1 style={bbox22} text={'100'}/>
                <Box1 style={bbox23} text={'100'}/>
                <Box1 style={bbox24} text={'100'}/>
                <Box1 style={bbox25} text={'100'}/>
                <Box1 style={bbox26} text={'100'}/>
                <DateBox style={date2}/>
                <DateBox style={date3}/>
                <DateBox style={date4}/>

                <SignatureView style={signature1}/>
                <SignatureView style={signature2}/>

                <SignatureView style={signature3}/>
                <SignatureView style={signature4}/>
            </Page>
        </Document>
    );


    return (
        <>
            <MyDoc />
        
        </>
    );
};

