
import { UserInfoType } from "@src/types/users"
import { get } from "./axios"

export const fetchUsers = async () => {
   return ((await get<{user:UserInfoType[]}>('/userInfo')))
}