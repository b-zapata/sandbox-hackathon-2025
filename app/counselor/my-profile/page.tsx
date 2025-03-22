"use client";
import { Authenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import awsmobile from "@/src/aws-exports";
import { useEffect, useState } from "react";

Amplify.configure(awsmobile);

const currentClients = [
  {
    id: 1,
    name: "Steve Jobs",
    email: "steve@jobs.com",
    phone: "+1 (123) 345-6789",
    location: "New York City, NY, USA",
    image: "/path-to-image", // Replace with actual image path
  },
  {
    id: 2,
    name: "Lionel Messi",
    email: "lionel@messi.com",
    phone: "+52 (123) 345-6789",
    location: "Buenos Aires, BA, Argentina",
    image: "/path-to-image", // Replace with actual image path
  },
];

const pastClients = [
  {
    id: 3,
    name: "Albert Einstein",
    email: "albert@einstein.com",
    phone: "+49 (123) 456-7890",
    location: "Berlin, Germany",
    image: "/path-to-image", // Replace with actual image path
  },
];

export default function MyClients() {
  const [activeTab, setActiveTab] = useState<"Current" | "Past">("Current");
  const [clients, setClients] = useState(currentClients);

  useEffect(() => {
    setClients(activeTab === "Current" ? currentClients : pastClients);
  }, [activeTab]);

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
          <header className="w-full flex items-center justify-between p-4">
            {/* Left Section - Navigation Links */}
            <nav className="flex w-3/4 space-x-16">
              <a
                href="/counselor/my-clients"
                className="text-gray-700 hover:text-black"
              >
                My Clients
              </a>
              <a
                href="/counselor/new-clients"
                className="text-gray-700 hover:text-black"
              >
                Take New Clients
              </a>
              <a href="#" className="text-gray-700 hover:text-black">
                My Profile
              </a>
            </nav>

            {/* Right Section - Sign Out Button */}
            <button
              onClick={signOut}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Sign out
            </button>
          </header>

          <main>
            <h1 className="text-3xl font-bold text-center mb-6">My Profile</h1>

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
                <h1 className="text-2xl font-bold">Jane Doe</h1>
                <p>
                  <i>johndoe@gmail.com</i>
                </p>
                <p>
                  <i>+1 (234) 456-7890</i>
                </p>
                <br></br>
                <p className="text-lg text-gray-700">
                  I am an experienced college admissions counselor. I’ve helped
                  300+ students get into their dream school. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. 
                </p>
              </div>
            </div>
          </main>
        </div>
      )}
    </Authenticator>
  );
}
