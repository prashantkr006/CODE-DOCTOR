import React, { useState } from "react";
import { apiUrl } from "../config";
import axios from "axios";

export default function CustomInput() {
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(true);

  function customAlert(message: string, type = "success") {
    const alertBox = document.createElement("div");
    alertBox.classList.add(
      "fixed",
      "top-1/4",
      "left-1/2",
      "transform",
      "-translate-x-1/2",
      "-translate-y-1/2",
      "p-4",
      "rounded-lg",
      "flex",
      "items-center",
      "font-normal", // Set font weight to normal
      "shadow-md",
      type === "success" ? "bg-green-500" : "bg-red-500", // Set background color based on the alert type
      "text-white",
      "text-sm", // Set default font size for xs and sm screens
      "sm:text-base", // Set font size for md and lg screens
      "sx:text-base" // Set font size for sx (350px) screens
    );

    const icon = document.createElement("span");
    icon.classList.add("text-lg", "mr-2"); // Adjust icon size for different screens
    icon.innerHTML = type === "success" ? "&#x2714;" : "&#x2718;"; // Checkmark or X icon based on the alert type

    const messageText = document.createElement("span");
    messageText.innerText = message;

    alertBox.appendChild(icon);
    alertBox.appendChild(messageText);

    document.body.appendChild(alertBox);

    // Automatically remove the alert after 3 seconds (adjust as needed)
    setTimeout(() => {
      document.body.removeChild(alertBox);
    }, 3000);
  }

  const handleJoinWaitlist = () => {
    if (!email) {
      alert("Please enter your email.");
      return;
    }

    if (!isValidEmail(email)) {
      setValidEmail(false);
      return;
    }

    const name = extractNameFromEmail(email);

    if (name.trim() === "") {
      alert("Please provide a valid email address");
      return;
    }

    const data = { email, name };

    axios
      .post(`${apiUrl}/waitlist`, data)
      .then((response) => {
        customAlert(response.data.message); // You can handle the server response here
      })
      .catch((error) => {
        console.log(error);
        console.error("Error joining waitlist:", error);
        customAlert(error.response.data.error, "error");
      });

    setEmail("");
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const extractNameFromEmail = (email: string) => {
    // Use regex to get the username before the @ symbol
    const usernameRegex = /^([^@]*)@/;
    const match = email.match(usernameRegex);
    return match ? match[1] : "";
  };

  const handleEmailChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setEmail(e.target.value);
    setValidEmail(true);
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="flex m-4 sx:my-2 p-0.5 w-9/12 rounded-full max-w-sm bg-gradient-to-r from-pink-500 via-rose-500 to-indigo-500">
          <div className="relative flex flex-grow">
            <input
              className={`p-4 sm:h-16 sx:h-14 sx:text-sm md:text-normal w-full rounded-full text-white focus:outline-none bg-black ${
                !validEmail ? "border-red-500" : ""
              }`}
              type="text"
              id="name"
              placeholder="Your Email"
              value={email}
              onChange={handleEmailChange}
            />
            <button
              className="absolute sm:h-10 sx:h-8 top-1/2 right-0 transform -translate-y-1/2 border-white sm:border-2 sx:border rounded-full px-4 text-white sm:text-lg sx:text-xs sm:mr-4 sx:mr-3"
              onClick={handleJoinWaitlist}
            >
              Join Waitlist
            </button>
          </div>
        </div>
      </div>
      {!validEmail && (
        <p className="bottom-0 text-center text-red-500 sm:text-lg sx:text-xs px-4">
          Please enter a valid email address.
        </p>
      )}
    </>
  );
}
