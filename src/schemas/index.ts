import { z, ZodSchema } from "zod";
import { userInfoSchema, usersDataSchema } from "./user.schema";

  // 创建响应模式的工厂函数
  export const createApiResponseSchema = (dataSchema:z.ZodType) => {
    return z.object({
      code: z.number(),
      msg: z.string(),
      data: dataSchema.optional(),
    });
  };
// 使用 Map 来管理 schema
const schemaMap: Map<string, ZodSchema<any>> = new Map();
schemaMap.set('user', createApiResponseSchema(userInfoSchema));
schemaMap.set('users', createApiResponseSchema(usersDataSchema));

export default schemaMap;