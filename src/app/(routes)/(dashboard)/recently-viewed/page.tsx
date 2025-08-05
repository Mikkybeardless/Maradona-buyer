import {
  RecentlyViewedCard,
  RecentlyViewedCard2,
} from '@/app/_components/cards/recentlyViewed';
import { repeatedComponents } from '@/app/_components/common/repeatComp';

export default function RecentPage() {
  return (
    <div className="flex flex-col gap-y-3 px-4 md:px-10">
      <h1>Recently Viewed</h1>

      <div className="grid grid-cols-1   md:grid-cols-3 gap-y-4">
        {repeatedComponents(6, <RecentlyViewedCard />)}
      </div>
      <div className="flex flex-col gap-y-2 ">
        {repeatedComponents(2, <RecentlyViewedCard2 />)}
      </div>
    </div>
  );
}
