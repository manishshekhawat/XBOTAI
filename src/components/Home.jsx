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

  useEffect(() => {
    console.log(chat);
  }, [chat]);

  const handleChatHistoryButton = () => {
    console.log("Chat History Button Clicked");
  };

  return (
    <div className="grid grid-cols-12 w-full h-full ">
      <div className=" hidden md:block md:col-span-2 ">
        <SideBar handleChatHistoryButton={handleChatHistoryButton} />
      </div>

      <div className="md:col-span-10 col-span-12 w-full h-full bg-[#F6F2FC] relative pb-28">
        {showFeedback && (
          <div className="flex justify-center items-center h-screen z-1000">
            <FeedBack
              feedback={feedback}
              setFeedback={setFeedback}
              setShowFeedback={setShowFeedback}
            />
          </div>
        )}

        {showHistory ? (
          <History chat={chat} />
        ) : chat.userChat.length > 0 ? (
          <DisplayChat chat={chat} />
        ) : (
          <MainSection />
        )}

        <div className="fixed left-0 bottom-0 w-full">
          <SearchSection
            search={search}
            setSearch={setSearch}
            setChat={setChat}
            setShowFeedback={setShowFeedback}
          />
        </div>
      </div>
    </div>
  );
};
