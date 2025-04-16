import Image from "next/image";

export const NoContent = ({ tittle }: { tittle: string }) => {
  return (
    <div>
      <h1 className=" text-xl text-darkBlue md:text-2xl font-bold">{tittle}</h1>
      <div className="flex justify-end items-center mt-4">
        <button className="text-secondaryTextColor">Mark all as read</button>
      </div>
      <hr />
      <div className="flex justify-center items-center">
        <div className="flex flex-col items-center">
          <div className="relative rounded-full w-16 h-16 md:w-[198px] md:h-[136px] flex-shrink-0">
            <Image
              src="/notifications/no-notification.png"
              alt="Notification image"
              fill
              className="w-full h-full object-cover mr-4"
            />
          </div>
          <p className="text-secondaryTextColor">
            You do not have any notification right now
          </p>
        </div>
      </div>
    </div>
  );
};
