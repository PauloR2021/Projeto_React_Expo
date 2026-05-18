import { Dimensions, StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({

    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20

    },

    boxTop:{
        width: '100%',
        height: Dimensions.get('window').height / 3,
        alignItems: 'center',
        justifyContent: 'center',
       

    },

    boxMid:{
        width: '100%',
        height: Dimensions.get('window').height / 4,
        paddingHorizontal: 36,
     

    },

    boxBottom:{
        height: Dimensions.get('window').height / 3,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center', 
    
    },

    logo:{
        width: 80,
        height: 80,

    },

    text:{
        fontWeight: 'bold',
        marginTop: 40,
        fontSize: 18,
    },

    titleInput:{
        marginLeft:5,
        color:themes.colors.gray,
        marginTop: 20,
    },

    boxInput:{
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderRadius: 40,
        marginTop:10,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:5,
        backgroundColor: themes.colors.lightGray,
        borderColor: themes.colors.lightGray

    },

    input:{
        height: '100%',
        width: '90%',
        borderRadius: 40,
    
    },

    button:{

        width: 250,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: themes.colors.primary,
        borderRadius: 40,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,

    },

    buttonText:{
        color: themes.colors.white,
        fontWeight: 'bold',
        fontSize: 16,
    },

    textBottom:{
        fontSize: 16,
        marginTop: 1,
        color: themes.colors.gray,  
    },
  

});

