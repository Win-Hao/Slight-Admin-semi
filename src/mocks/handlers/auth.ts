import { faker } from '@faker-js/faker';
import {delay, http, HttpResponse} from 'msw'
type SignInRequestBody = {
    username: string;
    password: string;
};
const users=[
    {
    id:faker.number.int(),
    userName: 'admin',
    password:'123456',
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    },
    {
    id:faker.number.int(),
    userName: 'editor',
    password:'123456',
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    }
]
const signIn=http.post<never,SignInRequestBody,never,`/api/signIn`>('/api/signIn',async({request})=>{
    await delay(2*1000)
    const {username,password}= await request.json();
    const userIndex=users.findIndex(user=>user.userName===username);
    if(userIndex===-1){
        return HttpResponse.json({code:401,msg:'用户名不存在',data:null});
    }
    if(users[userIndex].password!==password){
        return HttpResponse.json({code:401,msg:'密码错误',data:null});
    }
    return HttpResponse.json({code:200,msg:'success',data:{token:'token'}});
})
export default [signIn]