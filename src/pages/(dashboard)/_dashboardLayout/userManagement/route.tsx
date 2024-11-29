import { Card } from "@douyinfe/semi-ui";
import { createFileRoute } from "@tanstack/react-router";
import { userInfoQueryOptions } from "./-service/userQueryOptions";
import { UserInfo } from "./-components/UserInfo";
import { CreateUser } from "./-components/CreateUser";

export const Route = createFileRoute(
  "/(dashboard)/_dashboardLayout/userManagement"
)({
  loader: ({ context: { queryClient } }) =>
    queryClient.ensureQueryData(userInfoQueryOptions),
  component: UserManagement,
});

function UserManagement() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <Card title="用户管理">
          用户管理，在此你可以查看用户信息，修改用户信息，删除用户信息等等。
        </Card>
        <Card title={<CreateUser />}>
          <UserInfo />
        </Card>
      </div>
    </>
  );
}
