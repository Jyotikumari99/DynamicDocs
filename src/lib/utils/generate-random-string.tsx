export const generateRandomString = () => {
    const char = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
    let result = "";
    for (let i = 0; i < 14; i++) {
        result += char.charAt(Math.floor(Math.random() * char.length));
    }
    return result;
};
