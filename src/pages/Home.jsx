import { FaRocket } from 'react-icons/fa';
import ChartDemo from '../components/test.jsx';
import MainLayout from '../components/MainLayout.jsx';

function Home() {
  return (
    // <div className="flex-grow flex p-6  gap-4 overflow-auto bg-gray-100 text-gray-700">
    //   <div className="h-[420px] w-[600px] bg-white rounded-3xl p-6 border-1">
    //     <div className="h-[30%] ">
    //       <div className="flex items-center justify-between px-2">
    //         <div className="text-3xl font-semibold">Subscriptions</div>
    //         <div className="text-4xl font-bold ">54,234,131</div>
    //       </div>
    //     </div>
    //     <div className="h-[70%]">
    //       <ChartDemo />
    //     </div>
    //   </div>

    //   <div className="flex flex-col gap-2">
    //     <div className="h-[100px] w-[300px] bg-white rounded-3xl flex items-center justify-start px-4">
    //       <div className="flex items-center gap-4">
    //         <div className="bg-green-100 p-2 rounded-xl w-[60px] h-[60px] flex items-center justify-center">
    //           <FaRocket className="text-2xl text-green-500" />
    //         </div>
    //         <div>
    //           <div className="text-sm font-bold">Twitter Followers</div>
    //           <div className="text-3xl font-bold">51</div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="h-[100px] w-[300px] bg-white rounded-3xl flex items-center justify-start px-4">
    //       <div className="flex items-center gap-4">
    //         <div className="bg-green-100 p-2 rounded-xl w-[60px] h-[60px] flex items-center justify-center">
    //           <FaRocket className="text-2xl text-green-500" />
    //         </div>
    //         <div>
    //           <div className="text-sm font-bold">Twitter Followers</div>
    //           <div className="text-3xl font-bold">51</div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="h-[100px] w-[300px] bg-white rounded-3xl flex items-center justify-start px-4">
    //       <div className="flex items-center gap-4">
    //         <div className="bg-green-100 p-2 rounded-xl w-[60px] h-[60px] flex items-center justify-center">
    //           <FaRocket className="text-2xl text-green-500" />
    //         </div>
    //         <div>
    //           <div className="text-sm font-bold">Twitter Followers</div>
    //           <div className="text-3xl font-bold">51</div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="h-[100px] w-[300px] bg-white rounded-3xl flex items-center justify-start px-4">
    //       <div className="flex items-center gap-4">
    //         <div className="bg-green-100 p-2 rounded-xl w-[60px] h-[60px] flex items-center justify-center">
    //           <FaRocket className="text-2xl text-green-500" />
    //         </div>
    //         <div>
    //           <div className="text-sm font-bold">Twitter Followers</div>
    //           <div className="text-3xl font-bold">51</div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="flex-grow  p-6  gap-4 overflow-auto bg-gray-100 text-gray-700">
      <MainLayout />
    </div>
  );
}

export default Home;
