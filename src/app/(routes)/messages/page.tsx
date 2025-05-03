'use client';
import Breadcrumb from '@/app/_components/breadcrumb';
import { ChatContainer } from '@/app/_components/cards/chat';
import StreamlinedChatInput from '@/app/_components/chatInput';
import { useState } from 'react';

export default function Page() {
  const [messages, setMessages] = useState<Message[]>([]);

  interface Message {
    id: string;
    type: 'image' | 'text';
    content: string;
    timestamp: string;
    senderId: string;
    fileObject?: File;
    avatar?: string;
    isCurrentUser: boolean;
  }

  interface MessageData {
    timestamp: string;
    fileObject?: File;
    type: 'image' | 'text';
    content: string;
  }

  const handleSendMessage = (messageData: MessageData): void => {
    // Add the new message to your messages array
    setMessages((prevMessages: Message[]) => [
      ...prevMessages,
      {
        ...messageData,
        id: Date.now().toString(), // Generate a simple ID
        senderId: 'currentUser', // Replace with actual sender ID
        isCurrentUser: true, // Assuming sent messages are from current user
      },
    ]);
  };

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
