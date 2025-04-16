import { NoContent } from "@/app/_components/common/noContent";
import Image from "next/image";

export default function Page() {
  const notifications = [
    {
      id: 1,
      imgSrc: "/notifications/image1.png",
      title: "Order update #7890GH19200",
      detail: "Details here",
      time: "12:36 PM",
    },
    {
      id: 2,
      imgSrc: "/notifications/image2.png",
      title: "Price drop alert",
      detail: "The price of the item.",
      time: "12:36 PM",
    },
    {
      id: 3,
      imgSrc: "/notifications/image3.png",
      title: "New item added",
      detail: "hello",
      time: "12:36 PM",
    },
    {
      id: 4,
      imgSrc: "/notifications/image1.png",
      title: "Reminder",
      detail: "Hello",
      time: "12:36 PM",
    },
  ];

  // const notifications = [];
  return (
    <div className=" pt-5 md:p-12">
      <main className="  bg-white shadow-md rounded-lg p-5 space-y-2">
        {notifications.length > 0 ? (
          notifications.map((notification, index) => (
            <div
              key={notification.id}
              className={`flex  items-center justify-between cursor-pointer ${
                index === notifications.length - 1 ? "" : "border-b"
              }  py-4`}
            >
              <div className="flex gap-4 items-center">
                <div className="relative rounded-full w-12 h-12 md:w-16 md:h-16 flex-shrink-0">
                  <Image
                    src={notification.imgSrc}
                    alt="Notification image"
                    fill
                    className="w-full h-full object-cover mr-4"
                  />
                </div>

                <div className="flex flex-col">
                  <h3 className="text-lg font-semibold text-[#3D3D3D]">
                    {notification.title}
                  </h3>
                  <p className="font-semibold">{notification.detail}</p>
                </div>
              </div>
              <span className="text-gray-400 text-sm">{notification.time}</span>
            </div>
          ))
        ) : (
          // no notification
          <NoContent tittle="Notifications" />
        )}
      </main>
    </div>
  );
}
