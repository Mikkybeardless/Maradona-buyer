import Image from "next/image";

interface ChatContainerProps {
  messages: Array<{
    id: string;
    text: string;
    senderId: string;
    timestamp: string;
    avatar?: string;
    isCurrentUser: boolean;
  }>;
  currentUserId: string;
}

export function ChatContainer({ messages, currentUserId }: ChatContainerProps) {
  return (
    <div className="">
      {messages.map((message) => {
        const isCurrentUser = message.senderId === currentUserId;
        return (
          <div
            key={message.id}
            className={`flex w-full mb-4 ${
              isCurrentUser ? "justify-end" : "gap-3 justify-start"
            }`}
          >
            {message.avatar ? (
              <div className="relative w-14 h-14">
                <Image
                  src={message.avatar}
                  alt="friend image"
                  fill
                  className="w-full h-full object-contain"
                />
              </div>
            ) : null}
            <div
              className={`max-w-[70%] p-4 px-8 rounded-[2rem] ${
                isCurrentUser
                  ? "bg-[#E4E7EC] text-black rounded-bl-sm"
                  : "bg-gray-200 text-black rounded-br-sm"
              }`}
            >
              <p>{message.text}</p>
              <p
                className={`text-xs ${
                  isCurrentUser ? "text-gray-500" : "text-gray-500"
                } text-right mt-1`}
              >
                {new Date(message.timestamp).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
