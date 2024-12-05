import { del, get, post, put } from "./axios"
import { ValidationSchema } from "@src/pages/(dashboard)/_dashboardLayout/userManagement/-components/CreateUser"
import {  UsersInfoSchema } from "@src/schemas/user.schema"

export const fetchUsers = async () => {
   return ((await get<UsersInfoSchema>('/users',undefined,{schemaKey:'users'})))
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