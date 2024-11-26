import { fetchUsers } from "@src/api/users";
import { queryOptions } from "@tanstack/react-query";

export const userInfoQueryOptions = queryOptions({
      queryKey: ['users'],
      queryFn: ()=>fetchUsers(),
    })