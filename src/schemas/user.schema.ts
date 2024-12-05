import { z } from "zod"

export const userInfoSchema=z.object({
        id:z.number(),
        username: z.string(),
        password:z.string(),
        email: z.string().email(),
        avatar: z.string(),
        role:z.string(),
        description:z.string()
})

export const usersDataSchema=z.object({
    user:z.array(userInfoSchema)
})

export type UsersInfoSchema=z.infer<typeof usersDataSchema>