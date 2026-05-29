import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

export const style = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#0F1117",
        paddingHorizontal: 20,
        paddingTop: 60,
        paddingBottom: 20,
    },

    // ── Header ──────────────────────────────
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 28,
    },

    title: {
        fontSize: 28,
        fontWeight: "800",
        color: "#FFFFFF",
        letterSpacing: -0.5,
    },

    titleAccent: {
        color: "#6C63FF",
    },

    login: {
        fontSize: 13,
        color: "#6C63FF",
        fontWeight: "700",
        backgroundColor: "#1E1B2E",
        paddingHorizontal: 14,
        paddingVertical: 7,
        borderRadius: 20,
        overflow: "hidden",
    },

    // ── Box formulário ───────────────────────
    boxMid: {
        backgroundColor: "#1A1D27",
        padding: 18,
        borderRadius: 20,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: "#2A2D3A",
    },

    text: {
        fontWeight: "700",
        marginBottom: 8,
        color: "#9CA3AF",
        fontSize: 11,
        letterSpacing: 1.2,
        textTransform: "uppercase",
    },

    input: {
        backgroundColor: "#0F1117",
        borderWidth: 1.5,
        borderColor: "#2A2D3A",
        borderRadius: 12,
        padding: 14,
        marginBottom: 16,
        color: "#FFFFFF",
        fontSize: 15,
    },

    // ── Status buttons ────────────────────────
    boxStatusButton: {
        flexDirection: "row",
        gap: 8,
    },

    buttonStatus: {
        flex: 1,
        paddingVertical: 10,
        borderRadius: 10,
        alignItems: "center",
        borderWidth: 1.5,
        borderColor: "#2A2D3A",
    },

    // ── Botão adicionar ───────────────────────
    buttonAdicionar: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#6C63FF",
        height: 54,
        borderRadius: 14,
        marginBottom: 24,
        shadowColor: "#6C63FF",
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.4,
        shadowRadius: 12,
        elevation: 8,
    },

    textButtonAdicionar: {
        color: "#FFFFFF",
        fontWeight: "800",
        fontSize: 15,
        letterSpacing: 0.3,
    },

    // ── Lista de tarefas ──────────────────────
    sectionTitle: {
        fontSize: 13,
        fontWeight: "700",
        color: "#9CA3AF",
        letterSpacing: 1.2,
        textTransform: "uppercase",
        marginBottom: 12,
    },

    viewList: {
        backgroundColor: "#1A1D27",
        padding: 16,
        borderRadius: 16,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: "#2A2D3A",
        flexDirection: "row",
        alignItems: "center",
        gap: 14,
    },

    statusDot: {
        width: 4,
        borderRadius: 4,
        alignSelf: "stretch",
        minHeight: 40,
    },

    textList: {
        fontSize: 15,
        fontWeight: "700",
        color: "#FFFFFF",
        marginBottom: 4,
    },

    statusBadge: {
        alignSelf: "flex-start",
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 6,
    },

    statusBadgeText: {
        fontSize: 11,
        fontWeight: "700",
        letterSpacing: 0.5,
    },

    emptyText: {
        textAlign: "center",
        marginTop: 40,
        color: "#4B5563",
        fontSize: 14,
    },
});