import { useAuth0 } from '@auth0/auth0-react';

function Login() {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="h-[100vh] w-full  bg-purple-100 flex items-center justify-center">
      <div className="flex gap-4">
        <button
          className="bg-purple-300 py-2 px-4 rounded-xl font-medium"
          onClick={loginWithRedirect}
        >
          Login
        </button>
        <button className="bg-purple-400 py-2 px-4 rounded-xl font-medium">Sign up</button>
      </div>
    </div>
  );
}

export default Login;
