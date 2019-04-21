//Imports with Destructuring
import { Text, View } from 'react-native';
import React from 'react';

//Prepare the contents
const Content = (props) => {
    //Destructuring the styles
    const { headingStyle, textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={headingStyle}>{props.contentHeading}</Text>
            <View style={viewStyle}>
                <Text style={textStyle}>{props.text}</Text>
            </View>
        </View>
    );
};

//Style the contents
const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyConents: 'center',
        alignItems: 'center',
        height: 150,
        paddingTop: 10,
        position: 'relative'
    },
    headingStyle: {
        fontSize: 30,
        backgroundColor: 'white'
    },
    textStyle: {
        fontSize: 20
    }
};

//Make them available to the app
export default Content;