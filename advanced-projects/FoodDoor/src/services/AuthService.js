import axios from "axios"
import { ApiConstants } from "../contants"


const AuthRequest = axios.create({
    baseURL: ApiConstants.API_URL.BASE_URL
})

const registerUser = async (user) => {
    const url = ApiConstants.API_URL.REGISTER

    if(!user?.username || !user?.email || !user?.password){
        return {
            status: false,
            message: "All fields are required"
        }
    }

    try {
        const userData = {
            username: user?.username,
            email: user?.email,
            password: user?.password
        } 

        const response = await AuthRequest.post(
            url,
            userData,
        )
        
        return response?.data
    } catch (error) {
        console.log(error)
        return {
            status: false,
            message: "Oops! Something went wrong."
        }
    }
}


const loginUser = async (user) => {
    const url = ApiConstants.API_URL.LOGIN

    if(!user?.username || !user?.password){
        return {
            status: false,
            message: "All fields are required",
        }
    }

    try {
        const userData = {
            username: user?.username,
            password: user?.password
        }

        const response = await AuthRequest.post(
            url,
            userData
        )

        return response?.data
    } catch (error) {
        console.log(error)   
        return {
            status: false,
            message: "Oops! something went wrong."
        }
    }
}

// for the form validation 
const checkUserExist = async (type, value) => {
    const url = ApiConstants.API_URL.USER_EXIST

    try {
        const params = {
            [type]: value
        }

        const response = await AuthRequest.get(
            url,
            {params}
        )

        console.log(response?.data)
        return response?.data
    } catch (error) {
        console.log(error)
        return {
            status: false,
            message: "Oops! Something went wrong"
        }
    }
}

export default {
    registerUser,
    checkUserExist,
    loginUser,
}