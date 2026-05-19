import { Dimensions,StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({

    container:{
        flex:1,
        alignContent:'center',
        justifyContent:'center',
        padding: 10,
        alignItems:'center',
        marginTop: 30,
        color: themes.colors.bgScreen,
    },

    title:{
        fontSize: 24,
        fontWeight: 'bold',
        color: themes.colors.gray,
        marginTop:10,
        marginBottom:50,
        textAlign:'center',

    },

    form:{

        width: '100%',
        backgroundColor:"#fff",
        padding: 20,
        borderRadius: 12,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 10,
        
    },

    text:{
        fontWeight: 'bold',
        marginTop: 20,
        fontSize: 14,
        marginBottom: 10,
       

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
        backgroundColor: themes.colors.white,
        width:350,
        borderWidth: 1,
        borderColor:'#ccc',
        borderRadius: 8,
        padding: 14,
        marginBottom: 14,
        fontSize: 16,

    },

    boxBottom:{
        width: '100%',
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },

    button:{
        width: 250,
        height: 60,
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

        elevation: 10,
    },

    buttonText:{
        color: themes.colors.white,
        fontWeight: 'bold',
        fontSize: 20,

    },

    textLogin:{
        color: themes.colors.primary,
        fontWeight: 'bold',
        fontSize: 18,
        alignContent:'center',
        justifyContent:'center',
        marginTop: 40,

    }



})