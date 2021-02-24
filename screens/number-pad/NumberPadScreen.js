//react
import React from 'react';
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
    const isFocused = useIsFocused();

    const goBack = () => {
        props.navigation.goBack();
    }

    return (
	<LinearGradient colors={[appColors.black, appColors.black]} style={globalStyles.centerMax}>
        {isFocused ? <StatusBar barStyle="light-content" /> : null}
        <View style={[globalStyles.spreadColumn, globalStyles.w100, globalStyles.h100, globalStyles.ptb60]}>
            {/* money amount */}
            <View style={[globalStyles.mt30]}>
                <Text style={[numberPad.amount]}>$0</Text>
            </View>
            {/* number pad area */}
            <View style={[globalStyles.w100, globalStyles.centerColumn]}>
                {/* top */}
                <View style={[globalStyles.w100, globalStyles.spreadRow]}>
                    <TouchableOpacity style={[{width: size(100), height: size(75)}, globalStyles.centerColumn]}>
                        <Text style={numberPad.numbers}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[{width: size(100), height: size(75)}, globalStyles.centerColumn]}>
                        <Text style={numberPad.numbers}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[{width: size(100), height: size(75)}, globalStyles.centerColumn]}>
                        <Text style={numberPad.numbers}>3</Text>
                    </TouchableOpacity>
                </View>
                {/* middle 1*/}
                <View style={[globalStyles.w100, globalStyles.spreadRow]}>
                    <TouchableOpacity style={[{width: size(100), height: size(75)}, globalStyles.centerColumn]}>
                        <Text style={numberPad.numbers}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[{width: size(100), height: size(75)}, globalStyles.centerColumn]}>
                        <Text style={numberPad.numbers}>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[{width: size(100), height: size(75)}, globalStyles.centerColumn]}>
                        <Text style={numberPad.numbers}>6</Text>
                    </TouchableOpacity>
                </View>
                {/* middle 2*/}
                <View style={[globalStyles.w100, globalStyles.spreadRow]}>
                    <TouchableOpacity style={[{width: size(100), height: size(75)}, globalStyles.centerColumn]}>
                        <Text style={numberPad.numbers}>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[{width: size(100), height: size(75)}, globalStyles.centerColumn]}>
                        <Text style={numberPad.numbers}>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[{width: size(100), height: size(75)}, globalStyles.centerColumn]}>
                        <Text style={numberPad.numbers}>9</Text>
                    </TouchableOpacity>
                </View>
                {/* bottom */}
                <View style={[globalStyles.w100, globalStyles.spreadRow]}>
                    <TouchableOpacity style={[{width: size(100), height: size(75)}, globalStyles.centerColumn]}>
                        <Text style={numberPad.numbers}><Icon name={'back-icon'} size={size(20)} color={'white'}/></Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[{width: size(100), height: size(75)}, globalStyles.centerColumn]}>
                        <Text style={numberPad.numbers}>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[{width: size(100), height: size(75)}, globalStyles.centerColumn]}>
                        <Text style={numberPad.numbers}>.</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {/* button area */}
            <View style={[globalStyles.w100, globalStyles.plr20, globalStyles.centerRow]}>
                <TouchableOpacity onPress={() => goBack()} style={[{flex: 1}, globalStyles.centerColumn, numberPad.backBtn]}>
                    <Icon name={'arrow-left-icon'} size={size(22)} color={appColors.gray}/>
                </TouchableOpacity>
                <TouchableOpacity style={[{flex: 2}, globalStyles.centerColumn, numberPad.finishedBtn]}>
                    <Icon name={'arrow-right-icon'} size={size(22)} color={'white'}/>
                </TouchableOpacity>
            </View>
        </View>
	</LinearGradient>
    );
};

export default NumberPadScreen;