const API_URL = process.env.EXPO_PUBLIC_API_URL;

export const getAppInfo =
  async () => {
    const response =
      await fetch(
        `${API_URL}/app/info`
      );

    return response.json();
  };