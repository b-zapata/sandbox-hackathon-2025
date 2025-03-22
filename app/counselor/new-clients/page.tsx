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
              <a href="#" className="text-gray-700 hover:text-black">
                Take New Clients
              </a>
              <a
                href="/counselor/my-profile"
                className="text-gray-700 hover:text-black"
              >
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
            <h1 className="text-3xl font-bold text-center mb-6">New Clients</h1>
            <p>
              These applicants have reached the threshold confidence score in
              their essays and are ready to meet with a counselor.
            </p>
          </main>
        </div>
      )}
    </Authenticator>
  );
}
