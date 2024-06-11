import { AuthPage } from "@refinedev/mui";

export const Login = () => {
  return (
    <AuthPage
      type="login"
      formProps={{
        defaultValues: { email: "admin@gmail.com", password: "admin#123" },
      }}
      rememberMe={false}
      forgotPasswordLink={false}
      registerLink={false}
      title=""
      providers={[]}
    />
  );
};
