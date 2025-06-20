import React, { useState, useEffect, useRef } from "react";
import * as AuthService from "../services/auth.service";
import * as UserService from "../services/user.service";
import { User } from "../types/types";

const ProfilePage: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const fetchUserProfile = () => {
    const currentUser = AuthService.getCurrentUser();
    if (currentUser && typeof currentUser.id === "number") {
      setIsLoading(true);
      UserService.getUserById(currentUser.id)
        .then((response) => {
          setUser(response.data);
          setPreview(response.data.profile_photo_url);
          setIsLoading(false);
        })
        .catch((err) => {
          const resMessage =
            (err.response && err.response.data && err.response.data.message) ||
            err.message ||
            err.toString();
          setError(resMessage);
          setIsLoading(false);
        });
    } else {
      setError("Could not retrieve user information. Please log in again.");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = () => {
    if (!selectedFile) {
      setError("Please select a file first.");
      return;
    }
    const currentUser = AuthService.getCurrentUser();
    if (currentUser && typeof currentUser.id === "number") {
      setIsLoading(true);
      setError("");
      setSuccess("");
      UserService.updateUserProfile(currentUser.id, selectedFile)
        .then((response) => {
          setSuccess("Profile picture updated successfully!");
          // We need to update the user in localStorage as the token might be new
          const updatedUser = AuthService.getCurrentUser();
          if (updatedUser) {
            updatedUser.token = response.data.token;
            localStorage.setItem("user", JSON.stringify(updatedUser));
          }
          fetchUserProfile(); // Refetch to get the latest URL from DB
        })
        .catch((err) => {
          const resMessage =
            (err.response && err.response.data && err.response.data.message) ||
            err.message ||
            err.toString();
          setError(resMessage);
        })
        .finally(() => {
          setIsLoading(false);
          setSelectedFile(null);
          if (fileInputRef.current) {
            fileInputRef.current.value = "";
          }
        });
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6">Your Profile</h1>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Profile Picture</h2>
        <div className="flex items-center space-x-6">
          <div className="shrink-0">
            <img
              className="h-24 w-24 object-cover rounded-full"
              src={preview || "https://placehold.co/150"}
              alt="Current profile photo"
            />
          </div>
          <label className="block">
            <span className="sr-only">Choose profile photo</span>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/png, image/jpeg, image/gif"
              className="block w-full text-sm text-slate-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-violet-50 file:text-violet-700
                hover:file:bg-violet-100"
            />
          </label>
        </div>
        {preview && selectedFile && (
          <button
            onClick={handleUpload}
            disabled={isLoading}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-400"
          >
            {isLoading ? "Uploading..." : "Upload and Save"}
          </button>
        )}
      </div>

      {error && (
        <div className="mt-4 p-3 text-red-700 bg-red-100 border border-red-400 rounded-md">
          {error}
        </div>
      )}
      {success && (
        <div className="mt-4 p-3 text-green-700 bg-green-100 border border-green-400 rounded-md">
          {success}
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
