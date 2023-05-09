const COUNTRY_FLAG = {
    BASE_URL: `https://flagsapi.com`,
    size: {
        16: '16',
        24: '24',
        32: '32',
        48: '48',
        64: '16',
    },
    style: {FLAT: 'flat', SHINY: 'shiny'}
}

const API_URL = {
    // BASE_URL: 'http://127.0.0.1:3000/api/v1/',
    BASE_URL: 'https://7135-2402-3a80-1e1c-6e4d-44ba-3a63-3048-6342.ngrok-free.app/api/v1/',
    LOGIN: 'auth/login',
    REGISTER: 'auth/signup',
    USER_EXIST: 'auth/user-exist/',
}

export default {
    COUNTRY_FLAG,
    API_URL,
}
