import React, { useEffect } from 'react';
import {
    View,
    Text, 
    Image, 
    TouchableOpacity, 
    StyleSheet,
    Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GoogleSigninButton } from '@react-native-google-signin/google-signin';
import { Feather } from '@expo/vector-icons';

import wateringImg from '../assets/watering.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

import { useNavigation } from '@react-navigation/native';

export function Login(){
    const navigation  = useNavigation<any>();

    function handleStart(){
       navigation.navigate("UserIdentification");
    }
    
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={styles.title}>
                    Apenas o amor {'\n'}  
                    pode salavar vidas 
                </Text>

                <Image 
                    source={wateringImg}
                    style={styles.image} 
                    resizeMode='contain'
                />
                
                <Text style={styles.subtitle}>
                    49% das famílias recusam 
                    doar os órgãos de seus 
                    entes queridos falecidos
                </Text>

                <TouchableOpacity 
                    style={styles.button} 
                    activeOpacity={0.7}
                    onPress={handleStart}
                >
                    <Feather 
                            name='chevron-right'
                            style={styles.buttonIcon}
                    />
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 20
    },
    title:{
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        marginTop: 38,
        fontFamily: fonts.heading,
        lineHeight: 34

    },
    subtitle:{
        fontSize: 18,
        textAlign: 'center',
        paddingHorizontal: 20,
        color: colors.heading,
        fontFamily: fonts.text
    },
    image: {
        
        height: Dimensions.get('window').width*0.7
    },
    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        width: 56
    },
    buttonIcon: {
        color: colors.white,
        fontSize: 32
    }
    
})