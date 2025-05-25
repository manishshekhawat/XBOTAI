import { useEffect, useState } from "react";
import { SideBar } from "./SideBar";
import { MainSection } from "./MainSection";
import { SearchSection } from "./SearchSection";
import { DisplayChat } from "./DisplayChat";
import { History } from "./History";
import { FeedBack } from "./Feedback";

export const Home = ({ showHistory = false }) => {
  const [search, setSearch] = useState("");
  const [chat, setChat] = useState({
    botChat: [],
    userChat: [],
    botChatTime: [],
    userChatTime: [],
  });
  const [feedback, setFeedback] = useState("");
  const [showFeedback, setShowFeedback] = useState(false);
  const [chatHistory, setChatHistory] = useState({
    botChatHistory: [],
    userChatHistory: [],
  });

  useEffect(() => {
    console.log(chat);
  }, [chat]);

  const handleChatHistoryButton = () => {
    console.log("Chat History Button Clicked");
  };

  return (
    <div className="w-full h-full">
      {/* Sidebar (Fixed Left) */}
      <div className="hidden md:flex fixed top-0 left-0 h-full w-1/6 bg-white shadow-md z-50">
        <SideBar
          handleChatHistoryButton={handleChatHistoryButton}
          setSearch={setSearch}
          setChat={setChat}
        />
      </div>

      
      <div className="md:ml-[16.66%] md:w-5/6 w-full h-full bg-[#F6F2FC] relative pb-28 p-2">
        
        {showFeedback && (
          <div className="flex justify-center items-center h-screen z-50 fixed inset-0 bg-black bg-opacity-30">
            <FeedBack
              feedback={feedback}
              setFeedback={setFeedback}
              setShowFeedback={setShowFeedback}
            />
          </div>
        )}

        {/* Chat or Main Display */}
        {showHistory ? (
          <History chat={chat} />
        ) : chat.userChat.length > 0 ? (
          <DisplayChat chat={chat} />
        ) : (
          <MainSection />
        )}

        {/* Fixed Bottom Search Section */}
        <div className="fixed left-0 bottom-0 w-full z-50">
          <SearchSection
            search={search}
            setSearch={setSearch}
            chat={chat}
            setChat={setChat}
            setShowFeedback={setShowFeedback}
            chatHistory={chatHistory}
            setChatHistory={setChatHistory}
          />
        </div>
      </div>
    </div>
  );
};
