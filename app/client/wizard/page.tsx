"use client";
import { Authenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import awsmobile from "@/src/aws-exports";

Amplify.configure(awsmobile);

export default function WizardPage() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
          <header className="w-full flex justify-between p-4">
            <p>My Progress</p>
            <p>Contact</p>
            <button
              onClick={signOut}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Sign out
            </button>
          </header>

          <main>
            {/* ==== Bio section ==== */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 row-start-2 items-center w-full max-w-4xl">
              <div className="flex justify-center">
                <img
                  src="/profile.jpg"
                  alt="Profile"
                  className="w-72 h-72 rounded-full shadow-lg"
                />
              </div>
              <div className="text-center sm:text-left">
                <h1 className="text-2xl font-bold">John Doe</h1>
                <p>
                  <i>johndoe@gmail.com</i>
                </p>
                <p>
                  <i>+1 (234) 456-7890</i>
                </p>
                <br></br>
                <p className="text-lg text-gray-700">
                  I am a MMHS senior, incoming graduating class of 2025. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>

            {/* ==== Wizard section ==== */}

            {/* Start wizard button */}
            <div className="flex justify-center pt-10">
              <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Click here to get into college!
              </button>
            </div>
            {/* Actual wizard */}
            <div className="w-full max-w-3xl pt-10">
              {/* Step Indicator */}
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center">
                  <div className="w-15 h-15 flex items-center justify-center bg-blue-600 text-white font-bold rounded-full">
                    1
                  </div>
                  <span className="ml-2 font-medium">Initial AI Interview</span>
                </div>
                <div className="h-1 w-16 bg-gray-300"></div>
                <div className="flex items-center">
                  <div className="w-15 h-15 flex items-center justify-center bg-gray-300 text-gray-600 font-bold rounded-full">
                    2
                  </div>
                  <span className="ml-2 text-gray-500">Brainstorming Hub</span>
                </div>
                <div className="h-1 w-16 bg-gray-300"></div>
                <div className="flex items-center">
                  <div className="w-15 h-15 flex items-center justify-center bg-gray-300 text-gray-600 font-bold rounded-full">
                    3
                  </div>
                  <span className="ml-2 text-gray-500">
                    Meet with Counselor
                  </span>
                </div>
              </div>

              {/* Step Content */}
              <div className="p-6 bg-white shadow-md rounded-lg">
                <h2 className="text-xl font-bold mb-4">Step 1: User Info</h2>
                <p className="text-gray-700 mb-4">
                  Enter your details to continue.
                </p>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-2 border rounded mb-4"
                />
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Next
                </button>
              </div>
            </div>
          </main>
        </div>
      )}
    </Authenticator>
  );
}
