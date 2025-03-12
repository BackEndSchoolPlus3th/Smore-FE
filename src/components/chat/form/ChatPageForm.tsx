import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';

const ChatPageForm: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const handleToggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
    };
    
        return (
            <div className="flex flex-row w-full h-screen">
                {/* 사이드바 */}
                {isSidebarOpen && (
                    <div className="h-full">
                        <Sidebar />
                    </div>
                )}
                <div className="">
                    <button
                        className="bg-blue-500 text-white p-2 cursor-pointer"
                        onClick={handleToggleSidebar}
                    >
                        =
                    </button>
                </div>
                <div className="flex-1 h-full overflow-hidden">
                    {/* 보드 영역 */}
                    <div>
                        <Outlet />
                    </div>
                </div>
            </div>
        );
}
export default ChatPageForm;