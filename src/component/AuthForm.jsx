import { Link } from "react-router-dom";
import CommonButton from "./common/CommonButton";

const AuthForm = (props) => {
  const isSignup = props?.mode === "signup";

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <main className="flex flex-1 items-center justify-center px-4 py-8">
        <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6 sm:p-8">

          {/* Heading */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">
              {isSignup ? "Create Account" : "Welcome Back"}
            </h1>
            <p className="text-gray-500 mt-2 text-sm">
              {isSignup ? "Sign up to get started" : "Login to your account"}
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5">

            {/* Email */}
            <div>
              {isSignup && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>
              )}
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>



            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>

                {!isSignup && (
                  <Link
                    to="/forgot"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Forgot Password?
                  </Link>
                )}
              </div>

              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>

            {/* Login Button */}
            <CommonButton

                className="bg-red-500"
              name={isSignup ? "Sign Up" : "Login"}
              onClick={() => alert("Hii")}
            />
          </form>

          {/* Signup Text */}
          <p className="text-center text-sm text-gray-600 mt-6">
            {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
            <Link
              to={isSignup ? "/login" : "/signup"}
              className="text-blue-600 font-medium cursor-pointer hover:underline"
            >
              {isSignup ? "Login" : "Sign Up"}
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default AuthForm;
