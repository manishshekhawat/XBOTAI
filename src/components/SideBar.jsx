import { Link, useNavigate } from "react-router-dom";
import botLogo from "../assets/botAi-logo.png";
import edit from "../assets/edit.png";

export const SideBar = ({ setSearch,setChat }) => {
  const navigate = useNavigate();

  const handleButton = () => {
    navigate("/");
    setSearch("");
    setChat({
      botChat: [],
    userChat: [],
    botChatTime: [],
    userChatTime: [],
    })
  };
  return (
    <>
      <div
        className="flex justify-center items-center gap-3 p-3  w-full h-[50px]"
        style={{ backgroundColor: "#D7C7F4" }}
      >
        <div className="h-9 w-9 overflow-hidden rounded-full flex-shrink-0">
          <img
            src={botLogo}
            alt="botAi"
            className="h-full w-full object-cover"
          />
        </div>

        <button
          type="button"
          className="font-semibold texr-sm sm:text-base cursor-pointer"
          onClick={handleButton}
        >
          New Chat
        </button>
        
          <div className="h-6 w-6 overflow-hidden rounded-full flex-shrink-0">
            <img src={edit} alt="new" className="w-full h-full object-cover" />
          </div>
        
      </div>

      <Link to="/history">
        <div className="p-3 m-2 rounded-xl text-center font-semibold w-[90%] bg-[#D7C7F4]">
          Past Conversations
        </div>
      </Link>
    </>
  );
};
