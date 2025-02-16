import { Link } from "react-router-dom";
import Form from "./Form";

export default function RightContainer() {
  return (
    <div className="right-container min-w-[40%] bg-[#66bf95] p-8 flex flex-col gap-8 justify-center items-center">
      {/*Login details Container */}
      <div className="top-login-details bg-slate-50 w-[60%] p-12 rounded-xl flex flex-col justify-center">
        {/* Spread name */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 animate-heading">
            Spread
          </h1>
        </div>

        {/* Form Starts Here */}
        <Form />
      </div>

      {/* Sign Up Section */}
      <div className="bottom-signup-detail bg-slate-50 w-[60%] p-5 rounded-xl flex flex-col justify-center">
        <div className="text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
