
import { delay, http, HttpResponse } from "msw";
import { USER_LIST } from "./auth";
const getUsers=http.get<never, never, never, '/api/userInfo'>('/api/userInfo',async()=>{
    await delay(2*1000)
    return HttpResponse.json({code:200,msg:'success',data:{user:USER_LIST}});
})
export default [getUsers]