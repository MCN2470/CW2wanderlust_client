import React, { useState, useEffect } from "react";
import { Message } from "../types/message.types";
import * as MessageService from "../services/message.service";

const OperatorMessagesPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [replyingTo, setReplyingTo] = useState<number | null>(null);
  const [replyMessage, setReplyMessage] = useState("");

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

  const handleReply = async (originalMessageId: number) => {
    if (!replyMessage.trim()) return;

    try {
      setLoading(true);
      setError(null);
      setSuccess(null);

      await MessageService.replyToMessage(
        originalMessageId,
        replyMessage.trim()
      );
      setReplyMessage("");
      setReplyingTo(null);
      setSuccess("Reply sent successfully!");

      // Refresh messages
      await fetchMessages();
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to send reply");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (messageId: number) => {
    if (!window.confirm("Are you sure you want to delete this message?")) {
      return;
    }

    try {
      setLoading(true);
      setError(null);
      setSuccess(null);

      await MessageService.deleteMessage(messageId);
      setSuccess("Message deleted successfully!");

      // Refresh messages
      await fetchMessages();
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to delete message");
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  const groupMessagesByUser = (messages: Message[]) => {
    const grouped: { [key: string]: Message[] } = {};

    messages.forEach((message) => {
      // Group by the user who is NOT an operator
      const userKey =
        message.sender_username === "admin" ||
        message.sender_username.includes("operator")
          ? message.receiver_username
          : message.sender_username;

      if (!grouped[userKey]) {
        grouped[userKey] = [];
      }
      grouped[userKey].push(message);
    });

    return grouped;
  };

  if (loading && messages.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">Loading messages...</div>
      </div>
    );
  }

  const groupedMessages = groupMessagesByUser(messages);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Operator Message Management</h1>

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

      {Object.keys(groupedMessages).length === 0 ? (
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-500 text-center py-8">
            No messages from users yet.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {Object.entries(groupedMessages).map(([username, userMessages]) => (
            <div key={username} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4 text-blue-600">
                Conversation with {username}
              </h2>

              <div className="space-y-4 mb-4">
                {userMessages
                  .sort(
                    (a, b) =>
                      new Date(a.created_at).getTime() -
                      new Date(b.created_at).getTime()
                  )
                  .map((message) => (
                    <div
                      key={message.id}
                      className={`p-4 rounded-lg ${
                        message.sender_username === username
                          ? "bg-gray-50 mr-8"
                          : "bg-blue-50 ml-8"
                      }`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div className="font-medium">
                          {message.sender_username === username
                            ? username
                            : "You (Operator)"}
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-500">
                            {formatDate(message.created_at)}
                          </span>
                          <button
                            onClick={() => handleDelete(message.id)}
                            className="text-red-600 hover:text-red-800 text-sm"
                            disabled={loading}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                      <p className="text-gray-700">{message.message}</p>
                    </div>
                  ))}
              </div>

              {/* Reply Form */}
              <div className="border-t pt-4">
                <div className="flex space-x-2">
                  <textarea
                    value={
                      replyingTo === userMessages[0].id ? replyMessage : ""
                    }
                    onChange={(e) => {
                      setReplyMessage(e.target.value);
                      setReplyingTo(userMessages[0].id);
                    }}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    rows={3}
                    placeholder={`Reply to ${username}...`}
                  />
                  <button
                    onClick={() => handleReply(userMessages[0].id)}
                    disabled={
                      loading ||
                      !replyMessage.trim() ||
                      replyingTo !== userMessages[0].id
                    }
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed self-end"
                  >
                    {loading ? "Sending..." : "Reply"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OperatorMessagesPage;
