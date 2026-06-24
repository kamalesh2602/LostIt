import * as Device from "expo-device";
import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowBanner: true,
        shouldShowList: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
    }),
});

export async function registerForPushNotifications() {
    console.log(
        "Registering notifications..."
    );
    if (!Device.isDevice) {
        alert(
            "Must use a physical device"
        );
        return null;
    }

    const { status: existingStatus } =
        await Notifications.getPermissionsAsync();

    let finalStatus =
        existingStatus;

    if (
        existingStatus !== "granted"
    ) {
        const { status } =
            await Notifications.requestPermissionsAsync();

        finalStatus = status;
    }

    if (
        finalStatus !== "granted"
    ) {
        alert(
            "Notification permission denied"
        );
        return null;
    }
    console.log(
        "Permission:",
        finalStatus
    );
    try {
        const token = (
            await Notifications.getExpoPushTokenAsync({
                projectId: "c4a02de5-05a4-42c2-925b-53e675ad2812",
            })
        ).data;

        Alert.alert(
            "Push Token Generated",
            token
        );

        return token;
    } catch (err) {
        Alert.alert(
            "Push Token Error",
            JSON.stringify(err)
        );

        console.log(err);
        return null;
    }

    if (__DEV__) {
        console.log(
            "Expo Push Token:",
            token
        );
    }

    return token;
}