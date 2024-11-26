import { faker } from '@faker-js/faker';
import {delay, http, HttpResponse} from 'msw'
type SignInRequestBody = {
    username: string;
    password: string;
};
export const USER_LIST=[
    {
    id:faker.number.int({min:1,max:100}),
    username: 'admin',
    password:'123456',
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    role:'admin',
    description:'该用户是管理员'
    },
    {
    id:faker.number.int({min:1,max:100}),
    username: 'editor',
    password:'123456',
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    role:'editor',
    description:'该用户是编辑'
    },
    {
    id:faker.number.int({min:1,max:100}),
    username: 'guest',
    password:'123456',
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    role:'guest',
    description:'该用户是访客'
    }
]
const signIn=http.post<never,SignInRequestBody,never,`/api/signIn`>('/api/signIn',async({request})=>{
    await delay(2*1000)
    const {username,password}= await request.json();
    const userIndex=USER_LIST.findIndex(user=>user.username===username);
    if(userIndex===-1){
        return HttpResponse.json({code:401,msg:'用户名不存在',data:null});
    }
    if(USER_LIST[userIndex].password!==password){
        return HttpResponse.json({code:401,msg:'密码错误',data:null});
    }
    return HttpResponse.json({code:200,msg:'success',data:{token:'token'}});
})
export default [signIn]