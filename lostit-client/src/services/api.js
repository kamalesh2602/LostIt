
const API_URL =
    process.env.EXPO_PUBLIC_API_URL;

export const getItems = async () => {
    const response = await fetch(
        `${API_URL}/items`
    );

    return response.json();
};

export const createItem = async (
    item
) => {
    const response = await fetch(
        `${API_URL}/items`,
        {
            method: "POST",
            headers: {
                "Content-Type":
                    "application/json",
            },
            body: JSON.stringify(item),
        }
    );

    return response.json();
};

export const claimItem = async (
    id,
    ownerToken
) => {
    const response = await fetch(
        `${API_URL}/items/${id}/claim`,
        {
            method: "PATCH",
            headers: {
                "Content-Type":
                    "application/json",
            },
            body: JSON.stringify({
                ownerToken,
            }),
        }
    );

    return response.json();
};

export const deleteItemApi =
    async (id, ownerToken) => {
        const response = await fetch(
            `${API_URL}/items/${id}`,
            {
                method: "DELETE",
                headers: {
                    "Content-Type":
                        "application/json",
                },
                body: JSON.stringify({
                    ownerToken,
                }),
            }
        );

        return response.json();
    };


export const getMatches =
    async (id) => {
        const response =
            await fetch(
                `${API_URL}/items/${id}/matches`
            );

        return response.json();
    };

export const getMatchCount =
  async (id) => {
    const response =
      await fetch(
        `${API_URL}/items/${id}/match-count`
      );

    return response.json();
  };