import { AddressCard } from '@/app/_components/cards/address-card';
import { repeatedComponents } from '@/app/_components/common/repeatComp';

export default function AddressesPage() {
  return (
    <main>
      <div className="flex flex-col  bg-white p-5 rounded-lg shadow-md  gap-4  ">
        <div className="flex items-center justify-between border-b pb-4 ">
          <h1 className="font-bold text-xl">Shipping Addresses</h1>
          <button className="bg-primaryOrange hover:bg-defaultOrangeHover text-white px-4 py-2 rounded-lg">
            Add Address
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {repeatedComponents(
            9,
            <AddressCard
              details={{
                full_name: 'John Doe',
                phone: '+234 123 4567',
                location:
                  'Nwaniba Road, University of Uyo, Permanent Site, Uyo, Akwa Ibom State, Nigeria, 520211',
              }}
            />
          )}
        </div>
      </div>
    </main>
  );
}
