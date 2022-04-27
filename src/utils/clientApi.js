class Api {
    constructor() {}

    async get(url, body) {
        return await fetch(url, body);
    }

    async post(url, body) {
        return await fetch(url, {
            method: "POST",
            ...body,
        });
    }
}

const api = new Api();

export default api;
