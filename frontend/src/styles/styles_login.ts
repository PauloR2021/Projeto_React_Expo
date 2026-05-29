import { Dimensions, StyleSheet } from "react-native";

const { height } = Dimensions.get("window");

export const style = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#0F1117",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 28,
    },

    // ── Topo ─────────────────────────────────
    boxTop: {
        width: "100%",
        alignItems: "center",
        marginBottom: 40,
    },

    logoContainer: {
        width: 80,
        height: 80,
        borderRadius: 24,
        backgroundColor: "#1A1D27",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
        borderWidth: 1,
        borderColor: "#2A2D3A",
        shadowColor: "#6C63FF",
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.3,
        shadowRadius: 16,
        elevation: 10,
    },

    logo: {
        width: 44,
        height: 44,
    },

    text: {
        fontSize: 26,
        fontWeight: "800",
        color: "#FFFFFF",
        letterSpacing: -0.5,
        textAlign: "center",
    },

    textAccent: {
        color: "#6C63FF",
    },

    // ── Formulário ────────────────────────────
    boxMid: {
        width: "100%",
        marginBottom: 24,
    },

    titleInput: {
        fontSize: 11,
        fontWeight: "700",
        color: "#9CA3AF",
        letterSpacing: 1.2,
        textTransform: "uppercase",
        marginBottom: 8,
        marginLeft: 4,
    },

    boxInput: {
        width: "100%",
        height: 52,
        backgroundColor: "#1A1D27",
        borderWidth: 1.5,
        borderColor: "#2A2D3A",
        borderRadius: 14,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        marginBottom: 16,
    },

    input: {
        flex: 1,
        height: "100%",
        color: "#FFFFFF",
        fontSize: 15,
    },

    // ── Botão ─────────────────────────────────
    boxBottom: {
        width: "100%",
        alignItems: "center",
        gap: 20,
    },

    button: {
        width: "100%",
        height: 54,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#6C63FF",
        borderRadius: 14,
        shadowColor: "#6C63FF",
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.4,
        shadowRadius: 12,
        elevation: 8,
    },

    buttonText: {
        color: "#FFFFFF",
        fontWeight: "800",
        fontSize: 15,
        letterSpacing: 1,
    },

    textBottom: {
        fontSize: 14,
        color: "#6B7280",
    },
});