const TopCards = () => {
  return (
    <div className="grid lg:grid-cols-5 gap-4 p-4">
      <div className="lg:col-span-2 bg-white flex justify-between w-full border p-4 rounded-lg col-span-1">
        <div className="flex flex-col pb-4 w-full">
          <p className="text-2xl font-bold">$7,434</p>
          <p className="text-gray-600">Daily</p>
        </div>
        <p className="flex justify-center items-center bg-green-200 p-2 rounded-lg">
          <span className="text-green-700 text-lg">+18%</span>
        </p>
      </div>
      <div className="lg:col-span-2 bg-white flex justify-between w-full border p-4 rounded-lg col-span-1">
        <div className="flex flex-col pb-4 w-full">
          <p className="text-2xl font-bold">$7,434</p>
          <p className="text-gray-600">Daily</p>
        </div>
        <p className="flex justify-center items-center bg-green-200 p-2 rounded-lg">
          <span className="text-green-700 text-lg">+18%</span>
        </p>
      </div>
      <div className=" bg-white flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col pb-4 w-full">
          <p className="text-2xl font-bold">$7,434</p>
          <p className="text-gray-600">Daily</p>
        </div>
        <p className="flex justify-center items-center bg-green-200 p-2 rounded-lg">
          <span className="text-green-700 text-lg">+18%</span>
        </p>
      </div>
    </div>
  );
};

export default TopCards;
