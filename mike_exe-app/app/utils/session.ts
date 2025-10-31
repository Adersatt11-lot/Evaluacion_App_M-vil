import AsyncStorage from "@react-native-async-storage/async-storage";

export const setUserEmail = async (email: string) => {
    try {
        await AsyncStorage.setItem("userEmail", email);
    } catch (error) {
        console.error("Error guardando el email:", error);
    }
};

export const getUserEmail = async (): Promise<string | null> => {
    try {
        const email = await AsyncStorage.getItem("userEmail");
        return email;
    } catch (error) {
        console.error("Error obteniendo el email:", error);
        return null;
    }
};
