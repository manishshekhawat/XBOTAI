import userImage from "../assets/userImage.png";
import botLogo from "../assets/botAi-logo.png";
import thumb from "../assets/thumb.png";

export const History = () => {
  const chatHistory=JSON.parse(localStorage.getItem("chatHistory"));

  if (
    !chatHistory ||
    !Array.isArray(chatHistory.userChatHistory) ||
    !Array.isArray(chatHistory.botChatHistory)
  ) {
    return <p className="text-center mt-10">No chat history found.</p>;
  }

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold text-center">Conversation History</h1>
      {chatHistory.userChatHistory.map((_, i) => {
        return (
          <div>
            <div className="bg-[#D7C7F421] w-[90%] h-auto mx-10 my-3 rounded-xl shadow-xl flex flex-col justify-center items-start gap-5 p-5">
              <div className="flex justify-start items-center gap-5">
                <div className="w-16 h-16 overflow-hidden rounded-full border border-gray-300">
                  <img
                    src={userImage}
                    alt="user"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center gap-0.5">
                  <p className="font-semibold text-md">You</p>
                  <p className="text-md">{chatHistory.userChatHistory[i]}</p>
                  <p className="text-xs mt-3">21:23</p>
                </div>
              </div>

              <div className="flex justify-start items-center gap-5">
                <div className="w-16 h-16 overflow-hidden rounded-full border border-gray-300 flex-shrink-0">
                  <img
                    src={botLogo}
                    alt="user"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center gap-0.5 ">
                  <span className="font-semibold text-md">Soul AI</span>
                  <p className="text-md">{chatHistory.botChatHistory[i]}</p>
                  <div className="flex justify-start items-center gap-2 mt-3">
                    <p className="text-xs">21:00</p>
                    <button
                      type="button"
                      className="w-3 h-3 overflow-hidden ml-2"
                    >
                      <img
                        src={thumb}
                        alt="like"
                        className="w-full h-full object-cover"
                      />
                    </button>
                    <button type="button" className="w-3 h-3 overflow-hidden">
                      <img
                        src={thumb}
                        alt="like"
                        className="w-full h-full object-cover rotate-180"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
