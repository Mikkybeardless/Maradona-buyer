"use client";

import Breadcrumb from "@/app/_components/breadcrumb";
import { ChatContainer } from "@/app/_components/cards/chat";
import StreamlinedChatInput from "@/app/_components/chatInput";
import { useState } from "react";

export default function Page() {
  const [messages, setMessages] = useState([]);

  interface Message {
    id: string;
    text: string;
    timestamp: string;
    senderId: string;
    avatar?: string;
    isCurrentUser: boolean;
  }

  interface MessageData {
    id: string;
    text: string;
    timestamp: string;
    senderId: string;
    avatar?: string;
  }

  const handleSendMessage = (messageData: MessageData): void => {
    // Add the new message to your messages array
    setMessages((prevMessages: Message[]) => [
      ...prevMessages,
      {
        ...messageData,
        id: Date.now().toString(), // Generate a simple ID
        isCurrentUser: true, // Assuming sent messages are from current user
      },
    ]);

    // Here you would typically also send the message to your backend API
    // sendMessageToApi(messageData);
  };
  //   const messages = [
  //     {
  //       id: "msg1",
  //       text: "hello",
  //       timestamp: "2025-04-09T10:05:00",
  //       senderId: "friend123",
  //       avatar: "/messages/Avatars.png",
  //       isCurrentUser: false, // or you could use a comparison with the current user's ID
  //     },
  //     {
  //       id: "msg2",
  //       text: "Yo mandem",
  //       timestamp: "2025-04-09T10:05:40",
  //       senderId: "friend123",
  //       avatar: "/messages/Avatars.png",
  //       isCurrentUser: false, // or you could use a comparison with the current user's ID
  //     },

  //     {
  //       id: "msg3",
  //       text: "how far",
  //       timestamp: "2025-04-09T10:06:00",
  //       senderId: "currentUser",
  //       isCurrentUser: true,
  //     },
  //     {
  //       id: "msg4",
  //       text: "Kwasia 😂😂",
  //       timestamp: "2025-04-09T10:05:40",
  //       senderId: "currentUser",
  //       isCurrentUser: false, // or you could use a comparison with the current user's ID
  //     },
  //   ];
  return (
    <div className="p-8">
      <Breadcrumb />

      <main className="mt-20 space-y-4 relative  w-full">
        <p className="text-center text-secondaryTextColor">
          Thursday,Jan 4. 6:21 PM
        </p>

        <ChatContainer messages={messages} currentUserId="currentUser" />
        <div className="fixed bottom-2 left-[40%]">
          <StreamlinedChatInput onSendMessage={handleSendMessage} />
        </div>
      </main>
    </div>
  );
}
