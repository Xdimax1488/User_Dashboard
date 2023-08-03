import { FaShoppingBag } from 'react-icons/fa';
import { data } from '../app/data/data';

const RecentOrders = () => {
  return (
    <div className="w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-scroll">
      <h1>RecentOrders</h1>
      <ul>
        {data.map((item, id) => (
          <li
            key={id}
            className="bg-gray-50 rounded-lg my-3 p-2 flex items-center cursor-pointer hover:bg-gray-100">
            <div className="bg-purple-100 p-3 rounded-lg">
              <FaShoppingBag  className='text-purple-800'/>
            </div>
            <div className="pl-4">
              <p className='text-gray-800 font-bold'>${item.total}</p>
              <p className='text-gray-400 text-sm'>{item.name.first}</p>
            </div>
            <p className='lg:flex md:hidden absolute right-6 text-sm '>{item.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentOrders;
