import { StyleSheet } from "react-native";

export const style = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#0F1117",
        paddingHorizontal: 28,
        paddingTop: 60,
        paddingBottom: 40,
    },

    // ── Header ───────────────────────────────
    title: {
        fontSize: 28,
        fontWeight: "800",
        color: "#FFFFFF",
        letterSpacing: -0.5,
        marginBottom: 8,
    },

    subtitle: {
        fontSize: 14,
        color: "#6B7280",
        marginBottom: 32,
    },

    // ── Formulário ────────────────────────────
    form: {
        width: "100%",
        marginBottom: 24,
    },

    text: {
        fontSize: 11,
        fontWeight: "700",
        color: "#9CA3AF",
        letterSpacing: 1.2,
        textTransform: "uppercase",
        marginBottom: 8,
        marginLeft: 4,
    },

    input: {
        width: "100%",
        height: 52,
        backgroundColor: "#1A1D27",
        borderWidth: 1.5,
        borderColor: "#2A2D3A",
        borderRadius: 14,
        paddingHorizontal: 16,
        marginBottom: 16,
        fontSize: 15,
        color: "#FFFFFF",
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

    textLogin: {
        fontSize: 14,
        color: "#6B7280",
        textAlign: "center",
    },
});