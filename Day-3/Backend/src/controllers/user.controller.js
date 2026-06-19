import {asyncHandler} from '../utils/asyncHandler.js'
import {ApiError} from '../utils/apiError.js'

const registerUser = asyncHandler(async (req,res)=>{
    //get user details from frontend
    //validation - not empty
    //check if user already exists - username,email
    //check for images, check for avatar
    //upload them to cloudinary, avatar
    //create user object - create entry in db
    //remove password and refresh token from response
    //check user creation
    //return res
    // res.status(200).json({
    //     message:"ok"
    // })

    const {fullName,email,username,password}=req.body;
    console.log("email : ",email)


    const isInvalid =  [fullName,email,username,password].some((field)=>
        field?.trim()==="")
    if(isInvalid){
        throw new ApiError(400,'All fields are required')
    }
})

export {registerUser};