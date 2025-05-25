import userImage from "../assets/userImage.png";
import botLogo from "../assets/botAi-logo.png";
import thumb from "../assets/thumb.png";

export const DisplayChat = ({ chat }) => {
  return (
    <>
      {chat.userChat.map((_, i) => {
        return (
          <>
            <div className="bg-[#D7C7F421] w-[90%] h-25 mx-10 my-3 rounded-xl shadow-xl flex justify-start items-center gap-5 p-5">
              <div className="w-16 h-16 overflow-hidden rounded-full border border-gray-300">
                <img
                  src={userImage}
                  alt="user"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center gap-0.5">
                <p className="font-semibold text-md">You</p>
                <p className="text-md">{chat.userChat[i]}</p>
                <p className="text-xs mt-3">{chat.userChatTime[i]}</p>
              </div>
            </div>

            <div className="bg-[#D7C7F421] w-[90%] h-auto mx-10 my-3 rounded-xl shadow-xl flex justify-start items-center gap-5 p-5">
              <div className="w-16 h-16 overflow-hidden rounded-full border border-gray-300 flex-shrink-0">
                <img
                  src={botLogo}
                  alt="user"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center gap-0.5 ">
                <span className="font-semibold text-md">Soul AI</span>
                <p className="text-md">{chat.botChat[i]}</p>
                <div className="flex justify-start items-center gap-2 mt-3">
                  <p className="text-xs">{chat.botChatTime[i]}</p>
                  <button type="button" className="w-3 h-3 overflow-hidden ml-2">
                    <img src={thumb} alt="like" className="w-full h-full object-cover"/>
                  </button>
                  <button type="button" className="w-3 h-3 overflow-hidden">
                    <img src={thumb} alt="like" className="w-full h-full object-cover rotate-180"/>
                  </button>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};
