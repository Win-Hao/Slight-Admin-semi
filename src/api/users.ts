
import { UserInfoType } from "@src/types/users"
import { del, get, post, put } from "./axios"
import { ValidationSchema } from "@src/pages/(dashboard)/_dashboardLayout/userManagement/-components/CreateUser"

export const fetchUsers = async () => {
   return ((await get<{user:UserInfoType[]}>('/userInfo')))
}

export const createUser=async (data:ValidationSchema)=>{
   return await post<null>('/user',data)
}
export const editUser=async (data:ValidationSchema&{id:number})=>{
   return await put<null>('/user',data)
}
export const deleteUser=async (id:number)=>{
   return await del<null>('/user',{id})
}