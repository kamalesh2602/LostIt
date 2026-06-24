const sendPushNotification =
    async (
        pushToken,
        title,
        body
    ) => {
        await fetch(
            "https://exp.host/--/api/v2/push/send",
            {
                method: "POST",
                headers: {
                    Accept:
                        "application/json",
                    "Content-Type":
                        "application/json",
                },
                body: JSON.stringify({
                    to: pushToken,
                    sound: "default",
                    title,
                    body,
                }),
            }
        );
    };

    module.exports = {
    sendPushNotification,
};