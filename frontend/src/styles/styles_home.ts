import { Dimensions,StyleSheet } from "react-native";
import { themes } from "../global/themes";


export const style = StyleSheet.create({

    container:{
        flex:1,
        marginTop: 50,
        marginBottom: 10,
        padding:20,
        backgroundColor: themes.colors.bgScreen,
    },

    login:{
        flexDirection: "row",
        textAlign: "right",
        justifyContent: "center",
        marginTop: 10,
        marginBottom: 20,
        marginRight: 20,
        fontSize: 16,
        color: themes.colors.primary,
        fontWeight: "bold",
                  

    },

    title:{
        fontSize:26,
        fontWeight:"bold",
        marginBottom:20,
        color: themes.colors.primary
    },

    boxMid:{
        backgroundColor: themes.colors.secondary,
        padding:15,
        borderRadius:12,
        marginBottom:20,
    },

    text:{
        fontWeight:"bold",
        marginBottom: 10

    },

    input:{
        borderWidth:1,
        borderColor: themes.colors.primary,
        borderRadius:10,
        padding:12,
        marginBottom:12
    },

    boxStatusButton:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,

    },
    buttonStatus:{
        padding: 10,
        borderRadius: 10,
        flex: 1,
        marginRight: 5,
        alignItems: "center",
    },


    buttonAdicionar:{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#2563EB",
        height: 50,
        padding: 12,
        borderRadius: 10,
       
    },

    textButtonAdicionar:{
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
        marginBottom: 8,
    },

    viewList:{
        backgroundColor: "#fff",
        padding: 18,
        borderRadius: 14,
        marginBottom: 14,
        elevation: 3,
    },
    textList:{
        fontSize: 17,
        fontWeight: "bold",
        marginBottom: 10,

    }
    
})