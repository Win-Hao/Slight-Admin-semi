import { post } from "./axios";

export const signIn=async({username,password}:{username:string,password:string})=>{
return (await post<string>('/signIn',{username,password}))
}