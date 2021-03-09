//react
import React, { useEffect } from 'react';
import {View, Text, TouchableOpacity, StatusBar, TextInput} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
//styles
import LinearGradient from 'react-native-linear-gradient';
import {globalStyles} from '../../global-styles/general';
import {appColors} from '../../global-styles/colors';
import {size} from '../../global-styles/sizing';
import {numberPad} from './styles/numberPad'
//components
import NavTitle from '../../components/NavTitle';
//icons
import Icon from '../../assets/icons/Icons.js'
//nav
import { useIsFocused } from '@react-navigation/native';

const NumberPadScreen = (props) => {
    const [number, onChangeNumber] = React.useState(props.route.params.amount);
    //actual number pad logic
    const updateNumber = (newNumber) => {
        if(number == '0' && newNumber != '.' && newNumber){
        //update the first number
            onChangeNumber(newNumber);
        }else if(number == '0' && newNumber == '.'){
        //don't do anything if they try to hit the decimal before a number
            null;
        }else if(!newNumber){
        //for the delete or backspace button
            let updatedNumber;
            if(number.length == 1){
                updatedNumber = '0';
                onChangeNumber(updatedNumber)
            }else if(number.indexOf('.') !== -1){
                updatedNumber = number.slice(0, -1)
                onChangeNumber(updatedNumber)
            }else if(number.length == 5){
                //logic for the commas
                updatedNumber = [...number];
                updatedNumber.splice(number.indexOf(','), 1);
                updatedNumber.pop();
                onChangeNumber(updatedNumber.join(''))
            }else if(number.length == 6){
                //logic for the commas
                updatedNumber = [...number];
                updatedNumber.pop();
                updatedNumber.splice(number.indexOf(','), 1);
                updatedNumber.splice(1, 0, ',');
                onChangeNumber(updatedNumber.join(''))
            }else{
                updatedNumber = number.slice(0, -1)
                onChangeNumber(updatedNumber)
            }
        }else if(newNumber == '.'){
        //don't allow more than one decimal
            if(number.indexOf('.') !== -1){
                null;
            }else{
                onChangeNumber(number + newNumber);
            }
        }else{
        //prevent more than two numbers behind the decimal && prevent more than 5 digits before the decimal && add commas correctly
            var numArray = [...number];
            numArray.splice(0, numArray.indexOf('.'));
            if(numArray.length == 3 && number.indexOf('.') !== -1){
                null;
            }else if(numArray.length == 3){
                numArray.splice(1, 0, ',');
                numArray.push(newNumber);
                onChangeNumber(numArray.join(''))
            }else if(numArray.length == 5){
                numArray.splice(1, 1);
                numArray.splice(2, 0, ',');
                numArray.push(newNumber);
                onChangeNumber(numArray.join(''))
            }else if(numArray.length == 6){
                null;
            }else{
                onChangeNumber(number + newNumber);
            }
        }
    }

    const isFocused = useIsFocused();

    const goBack = () => {
        props.navigation.goBack();
    }

    const sendAmount = () => {
        let numArray = [...number];

        if(numArray.indexOf('.') !== -1){
            let decimalNum = numArray.splice(numArray.indexOf('.'), numArray.length - 1);
            //if there is only one number after the decimal add a 0 to the end
            if(decimalNum.length == 2){
                onChangeNumber(number + '0');
                props.navigation.navigate(props.route.params.screen, { amount: number + '0' })
            //if there are no numbers after the decimal remove it
            }else if(decimalNum.length == 1){
                onChangeNumber(number.slice(0, -1))
                props.navigation.navigate(props.route.params.screen, { amount: number.slice(0, -1) })
            }else{
                props.navigation.navigate(props.route.params.screen, { amount: number })
            }
        }else{
            props.navigation.navigate(props.route.params.screen, { amount: number })
        }
    }

    return (
	<LinearGradient colors={[appColors.black, appColors.black]} style={globalStyles.centerMax}>
        {isFocused ? <StatusBar barStyle="light-content" /> : null}
        <View style={[globalStyles.spreadColumn, globalStyles.w100, globalStyles.h100, globalStyles.ptb60]}>
            {/* money amount */}
            <View style={[globalStyles.mt30]}>
                <Text style={[numberPad.amount]}>${number}</Text>
            </View>
            {/* number pad area */}
            <View style={[globalStyles.w100, globalStyles.centerColumn]}>
                {/* top */}
                <View style={[globalStyles.w100, globalStyles.spreadRow]}>
                    <TouchableOpacity onPress={() => updateNumber('1')} style={[{width: size(100), height: size(75)}, globalStyles.centerColumn]}>
                        <Text style={numberPad.numbers}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => updateNumber('2')} style={[{width: size(100), height: size(75)}, globalStyles.centerColumn]}>
                        <Text style={numberPad.numbers}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => updateNumber('3')} style={[{width: size(100), height: size(75)}, globalStyles.centerColumn]}>
                        <Text style={numberPad.numbers}>3</Text>
                    </TouchableOpacity>
                </View>
                {/* middle 1*/}
                <View style={[globalStyles.w100, globalStyles.spreadRow]}>
                    <TouchableOpacity onPress={() => updateNumber('4')} style={[{width: size(100), height: size(75)}, globalStyles.centerColumn]}>
                        <Text style={numberPad.numbers}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => updateNumber('5')} style={[{width: size(100), height: size(75)}, globalStyles.centerColumn]}>
                        <Text style={numberPad.numbers}>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => updateNumber('6')} style={[{width: size(100), height: size(75)}, globalStyles.centerColumn]}>
                        <Text style={numberPad.numbers}>6</Text>
                    </TouchableOpacity>
                </View>
                {/* middle 2*/}
                <View style={[globalStyles.w100, globalStyles.spreadRow]}>
                    <TouchableOpacity onPress={() => updateNumber('7')} style={[{width: size(100), height: size(75)}, globalStyles.centerColumn]}>
                        <Text style={numberPad.numbers}>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => updateNumber('8')} style={[{width: size(100), height: size(75)}, globalStyles.centerColumn]}>
                        <Text style={numberPad.numbers}>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => updateNumber('9')} style={[{width: size(100), height: size(75)}, globalStyles.centerColumn]}>
                        <Text style={numberPad.numbers}>9</Text>
                    </TouchableOpacity>
                </View>
                {/* bottom */}
                <View style={[globalStyles.w100, globalStyles.spreadRow]}>
                    <TouchableOpacity onPress={() => updateNumber()} style={[{width: size(100), height: size(75)}, globalStyles.centerColumn]}>
                        <Text style={numberPad.numbers}><Icon name={'back-icon'} size={size(20)} color={'white'}/></Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => updateNumber('0')} style={[{width: size(100), height: size(75)}, globalStyles.centerColumn]}>
                        <Text style={numberPad.numbers}>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => updateNumber('.')} style={[{width: size(100), height: size(75)}, globalStyles.centerColumn]}>
                        <Text style={numberPad.numbers}>.</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {/* button area */}
            <View style={[globalStyles.w100, globalStyles.plr20, globalStyles.centerRow]}>
                <TouchableOpacity onPress={() => goBack()} style={[{flex: 1}, globalStyles.centerColumn, numberPad.backBtn]}>
                    <Icon name={'arrow-left-icon'} size={size(22)} color={appColors.gray}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => sendAmount()} style={[{flex: 2}, globalStyles.centerColumn, numberPad.finishedBtn]}>
                    <Icon name={'arrow-right-icon'} size={size(22)} color={'white'}/>
                </TouchableOpacity>
            </View>
        </View>
	</LinearGradient>
    );
};

export default NumberPadScreen;