import axios from "axios";
import authHeader from "./auth-header";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3001/api";

// Send a message to operators
export const sendMessage = async (message: string) => {
  const response = await axios.post(
    `${API_URL}/messages`,
    { message },
    { headers: authHeader() }
  );
  return response.data;
};

// Get all messages for the current user
export const getMessages = async () => {
  const response = await axios.get(`${API_URL}/messages`, {
    headers: authHeader(),
  });
  return response.data;
};

// Reply to a message (operators only)
export const replyToMessage = async (
  originalMessageId: number,
  message: string
) => {
  const response = await axios.post(
    `${API_URL}/messages/reply`,
    { originalMessageId, message },
    { headers: authHeader() }
  );
  return response.data;
};

// Delete a message (operators only)
export const deleteMessage = async (messageId: number) => {
  const response = await axios.delete(`${API_URL}/messages/${messageId}`, {
    headers: authHeader(),
  });
  return response.data;
};
