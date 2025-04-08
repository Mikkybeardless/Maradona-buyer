import EastRoundedIcon from "@mui/icons-material/EastRounded";

export const AuctionCard = () => {
  return (
    <div className="bg-primaryOrange p-4 rounded-xl text-white w-[305px] ">
      <h3 className="text-xl font-bold">Auction!</h3>
      <p>Toyota Tacoma Access Cab 2006 Blue</p>
      <div className="flex justify-between items-center">
        <p className="font-semibold">₦ 2,500,000</p>
        <button className="flex gap-1">
          click to view <EastRoundedIcon />
        </button>
      </div>
    </div>
  );
};
