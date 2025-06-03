export const generateMockData = () => {
    const now = new Date();
    return {
        time: now.toISOString(),
        value: Math.floor(Math.random() * 100),
    }
}