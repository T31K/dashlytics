import { FaRocket } from 'react-icons/fa';

function New() {
  return (
    <div className="flex h-[90vh]">
      <div className="flex flex-col w-[40%] max-w-[40%] min-w-[40%] border-1 border-r border-gray-100">
        <div className="flex flex-col p-4  gap-2 h-[90%]">
          <div className="bg-gray-200 px-2 py-2 rounded-md font-medium ">Simple number</div>
          <div className="bg-gray-50 px-2 py-2 rounded-md font-medium ">Bar charts</div>
          <div className="bg-gray-50 px-2 py-2 rounded-md font-medium ">Goal gauge </div>
        </div>
        <div></div>
        <div className="h-[10%] flex items-center justify-center px-4">
          <button className="bg-gray-900 py-3 font-semibold text-white rounded-xl w-[100%]">Create card</button>
        </div>
      </div>
      <div className="flex flex-col flex-grow items-center justify-center">
        <div className="card w-[80%] h-[80%] bg-gray-50 border-2 border-gray-300 rounded-lg flex items-center justify-center">
          <div className="h-[100px] w-[300px] bg-white rounded-3xl flex items-center justify-start px-4 shadow">
            <div className="flex items-center gap-4">
              <div className="bg-green-100 p-2 rounded-xl w-[60px] h-[60px] flex items-center justify-center">
                <FaRocket className="text-2xl text-green-500" />
              </div>
              <div>
                <div className="text-sm font-bold">Twitter Followers</div>
                <div className="text-3xl font-bold">51</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default New;
