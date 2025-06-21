import React, { useState, useEffect } from "react";
import { Message } from "../types/message.types";
import * as MessageService from "../services/message.service";
import * as AuthService from "../services/auth.service";

const MessagesPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const currentUser = AuthService.getCurrentUser();

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      setLoading(true);
      const response = await MessageService.getMessages();
      setMessages(response.data);
    } catch (err: any) {
      setError("Failed to load messages");
      console.error("Error fetching messages:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    try {
      setLoading(true);
      setError(null);
      setSuccess(null);

      await MessageService.sendMessage(newMessage.trim());
      setNewMessage("");
      setSuccess("Message sent successfully!");

      // Refresh messages
      await fetchMessages();
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  if (loading && messages.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">Loading messages...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Messages</h1>

      {/* Send Message Form */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">
          Send a Message to Travel Agency
        </h2>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        {success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
            {success}
          </div>
        )}

        <form onSubmit={handleSendMessage}>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Your Message
            </label>
            <textarea
              id="message"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              rows={4}
              placeholder="Type your message here..."
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading || !newMessage.trim()}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      {/* Messages List */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Conversation History</h2>

        {messages.length === 0 ? (
          <p className="text-gray-500 text-center py-8">
            No messages yet. Send your first message above!
          </p>
        ) : (
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`p-4 rounded-lg ${
                  message.sender_id === currentUser?.id
                    ? "bg-blue-50 ml-8"
                    : "bg-gray-50 mr-8"
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="font-medium">
                    {message.sender_id === currentUser?.id
                      ? "You"
                      : message.sender_username}
                    {message.sender_username !== currentUser?.username &&
                      message.receiver_username !== currentUser?.username && (
                        <span className="text-sm text-gray-500 ml-2">
                          (to {message.receiver_username})
                        </span>
                      )}
                  </div>
                  <div className="text-sm text-gray-500">
                    {formatDate(message.created_at)}
                  </div>
                </div>
                <p className="text-gray-700">{message.message}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MessagesPage;
