import { ReviewCard } from '@/app/_components/cards/review';

export default function PendingReviewsPage() {
  const review = {
    imageSrc: '/categories/car.png',
    product: 'Toyota Camry',
    date: 'March 15, 2023',
    id: ' Distresssale23456',
  };
  const loopArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const reviews = () => {
    return loopArray.map((item) => {
      return (
        <div key={item}>
          <ReviewCard review={review} />
        </div>
      );
    });
  };
  return (
    <main>
      <div className="flex flex-col  bg-white p-5 rounded-lg shadow-md md:pb-8 gap-4 md:gap-8 px-4 md:px-0">
        <h1 className="text-xl font-bold ml-5">Pending reviews</h1>
        <hr />
        {reviews()}
      </div>
    </main>
  );
}
