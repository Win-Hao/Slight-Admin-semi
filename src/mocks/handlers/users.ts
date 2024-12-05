
import { delay, http, HttpResponse } from "msw";
import { USER_LIST } from "./auth";
import { ValidationSchema } from "@src/pages/(dashboard)/_dashboardLayout/userManagement/-components/CreateUser";
import { faker } from "@faker-js/faker";

type CreateUserRequestBody  =ValidationSchema
type EditUserRequestBody  =ValidationSchema&{id:number}
const getUsers=http.get<never, never, never, '/api/users'>('/api/users',async()=>{
    await delay(1*1000)
    return HttpResponse.json({code:200,msg:'success',data:{user:USER_LIST}});
})

const createUser=http.post<never,CreateUserRequestBody,never,'/api/user'>('/api/user',async({request})=>{
    await delay(2*1000)
    const{username,email,description}=await request.json();
    if(USER_LIST.find(user=>user.username===username)){
        return HttpResponse.json({code:400,msg:"用户名已存在",data:null});
    }
    USER_LIST.push( {
        id:faker.number.int({min:1,max:100}),
        username,
        password:'123456',
        email,
        avatar: faker.image.avatar(),
        role:'admin',
        description
        },)
    return HttpResponse.json({code:200,msg:"创建成功",data:null});
})
const editUser=http.put<never,EditUserRequestBody,never,'/api/user'>('/api/user',async({request})=>{
    await delay(2*1000)
    const{id,username,email,description}=await request.json();
    const userIndex=USER_LIST.findIndex(user=>user.id===id);
    if(userIndex===-1){
        return HttpResponse.json({code:400,msg:"用户不存在",data:null});
    }
    USER_LIST[userIndex]={
        ...USER_LIST[userIndex],
        username,
        email,
        description
    }
    return HttpResponse.json({code:200,msg:"修改成功",data:null});
})

const deleteUser=http.delete<never,{id:number},never,'/api/user'>('/api/user',async({request})=>{
    await delay(2*1000)
    const{id}=await request.json();
    const userIndex=USER_LIST.findIndex(user=>user.id===id);
    if(userIndex===-1){
        return HttpResponse.json({code:400,msg:"用户不存在",data:null});
    }
    USER_LIST.splice(userIndex,1);
    return HttpResponse.json({code:200,msg:"删除成功",data:null});
})
export default [getUsers,createUser,editUser,deleteUser]