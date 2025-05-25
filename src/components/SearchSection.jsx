import { useState } from "react";
import data from "../sampleData.json";

export const SearchSection = ({ search, setSearch, chat, setChat, setShowFeedback,chatHistory,setChatHistory }) => {
  const [lastResponse, setLastResponse] = useState(null); 

  const defaultResponse = "Sorry, Did not understand your query!";

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const setTime = () => {
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  const handleForm = (e) => {
    e.preventDefault();

    const chatResp = data.find((value) => value.question === search);
    const time = setTime();

    setLastResponse(chatResp); // <-- Save the response for later

    setChat((prev) => ({
      botChat: [...prev.botChat, chatResp ? chatResp.response : defaultResponse],
      userChat: [...prev.userChat, search],
      botChatTime: [...prev.botChatTime, time],
      userChatTime: [...prev.userChatTime, time],
    }));

    setSearch("");
  };

  const handleSave = () => {
  const newBotMsg = chat.botChat.at(-1);
const newUserMsg = chat.userChat.at(-1);

if (!newBotMsg || !newUserMsg) {
  alert("No conversation to save!");
  return;
}

  const existingHistory=JSON.parse(localStorage.getItem("chatHistory")) || {
    botChatHistory: [],
    userChatHistory: [],
  }

  const updatedHistory = {
    botChatHistory: [...existingHistory.botChatHistory, newBotMsg],
    userChatHistory: [...existingHistory.userChatHistory, newUserMsg],
  };

  setChatHistory(updatedHistory);
  localStorage.setItem("chatHistory", JSON.stringify(updatedHistory));
  setShowFeedback(true);
};


  return (
    <form
      onSubmit={handleForm}
      className="flex justify-center items-center w-full px-2 py-2 shadow-md"
    >
      <input
        type="text"
        placeholder='Message Bot AI...'
        className="w-[848px] h-10 bg-white p-2"
        value={search}
        onChange={handleInput}
      />

      <button
        type="submit"
        className="w-[72px] h-10 bg-[#D7C7F4] rounded-lg ml-4"
      >
        Ask
      </button>

      <button
        type="button"
        className="w-[72px] h-10 bg-[#D7C7F4] rounded-lg ml-4"
        onClick={handleSave}
      >
        Save
      </button>
    </form>
  );
};
