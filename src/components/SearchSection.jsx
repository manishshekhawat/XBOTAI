import { useState } from "react";
import data from "../sampleData.json";

export const SearchSection = ({ search, setSearch, chat, setChat, setShowFeedback,chatHistory,setChatHistory }) => {
  

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
  className="flex flex-wrap md:flex-nowrap justify-center items-center w-full px-4 py-3 gap-2 bg-white shadow-md"
>
  <input
    type="text"
    className="flex-1 min-w-0 h-10 bg-white p-2 border rounded-md"
    placeholder="Message Bot AI..."
    value={search}
    onChange={handleInput}
  />

  <button
    type="submit"
    className="px-4 h-10 bg-[#D7C7F4] rounded-lg"
  >
    Ask
  </button>

  <button
    type="button"
    className="px-4 h-10 bg-[#D7C7F4] rounded-lg"
    onClick={handleSave}
  >
    Save
  </button>
</form>

  );
};
