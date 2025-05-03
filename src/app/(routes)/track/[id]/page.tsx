import ProgressBar from '@/app/_components/progressiveBar';

export default async function Track({ params }: { params: { id: string } }) {
  const id = params.id;
  return (
    <section className="flex  h-screen">
      {/* left side */}
      <div className="w-1/2  bg-white ">
        <div className="flex py-5 items-cente px-10 gap-x-20">
          <h1 className="text-2xl font-bold text-darkBlue">Order {id}</h1>
          <p className="rounded-3xl px-2 py-1 bg-blue-50 text-defaultOrange">
            In transit
          </p>
        </div>
        <hr className="mb-5" />
        {/* progress bar */}
        <ProgressBar />
      </div>

      {/* right side */}
      <div className="flex justify-center items-center mx-auto">Map</div>
    </section>
  );
}
