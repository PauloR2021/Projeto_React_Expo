import { Stack } from 'expo-router';

export default function Layout() {
    return(
        <Stack initialRouteName="pages/login/index">
            <Stack.Screen
                name="pages/login/index"
                options={{
                    headerShown:false
                }}
            />

            <Stack.Screen
                name="pages/criar/index"
                options={{
                    headerShown:false
                }}
            />

            <Stack.Screen
                name="pages/home/index"
                options={{
                    headerShown:false
                }}
            />
        </Stack>
    )
}