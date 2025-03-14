import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Video } from 'lucide-react';
import { useParams } from 'react-router-dom';
import Chat from '../Chat';

type ChatRoom = {
    roomId: string; // 백엔드에서 roomId(Long)을 받아오면 문자열로 변환
    roomName: string; // studyName (스터디명)
    studyId?: number; // 그룹 채팅방이라면 studyId를 담아둠 (DM에는 필요없을 수도 있음)
};

interface ChatBoardProps {
    selectedRoom: ChatRoom | null;
}

const ChatBoard: React.FC<ChatBoardProps> = ({ selectedRoom }) => {
    const { study_id: studyId, chat_type: chatType } = useParams();
    const navigate = useNavigate();

    // 비디오 채팅 버튼 클릭 시
    const handleVideoChat = () => {
        console.log('현재 선택된 채팅방:', selectedRoom);
        navigate(`/chat/${selectedRoom?.studyId}/video`);
    };

    useEffect(() => {
        console.log('현재 선택된 채팅방:', selectedRoom);
    }, [selectedRoom]);

    if (!(chatType === 'dm' || chatType === 'group')) {
        return <div>잘못된 접근입니다.</div>;
    }

    return (
        <div className="h-full col-span-6 h-full border border-gray-200 rounded-xl shadow-md flex flex-col ">
            {/* 중앙 영역: 채팅창 및 비디오 채팅 */}
            <div className="flex flex-row m-4 justify-between items-center">
                <h1 className="col-span-5 text-xl font-bold">
                    {selectedRoom?.roomName}
                </h1>
                <button
                    className="p-2 rounded-full hover:bg-gray-200 transition col-span-1 h-fit"
                    onClick={handleVideoChat}
                >
                    <Video className="w-6 h-6 text-gray-700" />
                </button>
            </div>
            {selectedRoom && chatType ? (
                <Chat roomId={studyId} chatType={chatType} />
            ) : (
                <div className="p-4">채팅할 방을 선택해주세요.</div>
            )}
        </div>
    );
};

export default ChatBoard;
