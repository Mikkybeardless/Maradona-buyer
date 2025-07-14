import Image from 'next/image';

interface LayoutProps {
  children: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  const messages = [
    {
      id: 1,
      imgSrc: '/notifications/image1.png',
      title: 'James Joseph',
      detail: 'Details here',
      time: '12:36 PM',
    },
    {
      id: 2,
      imgSrc: '/notifications/image2.png',
      title: 'Price drop alert',
      detail: 'The price of the item.',
      time: '12:36 PM',
    },
    {
      id: 3,
      imgSrc: '/notifications/image3.png',
      title: 'New item added',
      detail: 'hello',
      time: '12:36 PM',
    },
    {
      id: 4,
      imgSrc: '/notifications/image1.png',
      title: 'Reminder',
      detail: 'Hello',
      time: '12:36 PM',
    },
  ];
  return (
    <div className="w-full h-screen overflow-y-auto overflow-x-hidden custom-scrollbar flex flex-col bg-[#F7F7F7]">
      <div className=" flex justify-between">
        {/* side bar */}
        <div className="bg-white w-[30%] min-h-screen space-y-2">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex  gap-2 items-center justify-between cursor-pointer hover:bg-gray-100  px-8   py-4`}
            >
              <div className="flex gap-4 items-center">
                <div className="relative rounded-full w-12 h-12 md:w-16 md:h-16 flex-shrink-0">
                  <Image
                    src={message.imgSrc}
                    alt="message image"
                    fill
                    className="w-full h-full object-cover mr-4"
                  />
                </div>

                <div className="flex flex-col">
                  <h3 className="text-lg font-semibold text-[#3D3D3D]">
                    {message.title}
                  </h3>
                  <p className="font-semibold">{message.detail}</p>
                </div>
              </div>
              <span className="text-gray-400 text-sm">{message.time}</span>
            </div>
          ))}
        </div>
        <div className="w-[70%]">{children}</div>
      </div>
    </div>
  );
}
