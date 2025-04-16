"use client";

import React, { useState, useRef } from "react";
import { Smile, Image, Send } from "lucide-react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

const StreamlinedChatInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const fileInputRef = useRef(null);

  const handleSendMessage = () => {
    if (message.trim()) {
      onSendMessage({
        type: "text",
        content: message,
        timestamp: new Date().toISOString(),
      });
      setMessage("");
    }
  };

  interface FileUploadEvent extends React.ChangeEvent<HTMLInputElement> {
    target: HTMLInputElement & { files: FileList };
  }

  interface Message {
    type: "text" | "image";
    content: string;
    fileObject?: File;
    timestamp: string;
  }

  const handleFileUpload = (event: FileUploadEvent) => {
    const file = event.target.files[0];
    if (!file) return;

    // In a real app, you would handle file upload to your server here
    onSendMessage({
      type: "image",
      content: file.name,
      fileObject: file,
      timestamp: new Date().toISOString(),
    });

    // Reset file input
    event.target.value = "";
  };

  return (
    <div className="p-2 relative ">
      <div className="flex gap-3 items-center">
        <div className="flex items-center w-[35rem] bg-white rounded-full px-4 py-1">
          {/* Emoji button */}
          <button
            className="p-2 text-gray-700 hover:text-gray-900"
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
          >
            <Smile size={20} />
          </button>

          {/* Text input */}
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Text message form MTN"
            className="flex-1 py-2 px-2 bg-transparent border-none focus:outline-none text-gray-700"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSendMessage();
              }
            }}
          />

          {/* Hidden file input */}
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            accept="image/*"
            onChange={handleFileUpload}
          />

          {/* GIF button (placeholder) */}
          <button className="p-2 text-gray-700 hover:text-gray-900">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="2"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M7 12V7H12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17 12V17H12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Image upload button */}
          <button
            className="p-2 text-gray-500 hover:text-gray-700"
            onClick={() => fileInputRef.current.click()}
          >
            <Image size={20} />
          </button>
        </div>

        {/* Send button (outside the input container) */}
        <button
          className={` p-4 rounded-full ${
            message.trim() ? "bg-blue-500 text-white" : "bg-white text-gray-400"
          }`}
          onClick={handleSendMessage}
          disabled={!message.trim()}
        >
          <Send size={18} />
        </button>
      </div>

      {/* Emoji picker would be implemented here */}
      {showEmojiPicker && (
        <div className="absolute bottom-16 left-4 z-10">
          <Picker
            data={data}
            onEmojiSelect={(emoji: { native: string }) =>
              setMessage((prev: string) => prev + emoji.native)
            }
            theme="light"
            set="apple"
          />
        </div>
      )}
    </div>
  );
};

export default StreamlinedChatInput;
