import { delay } from 'redux-saga';

export default {
    async getNotifications() {
        console.warn("Real notification calling the API");
        await delay(10);
        return { count: 42 };
    }
}
