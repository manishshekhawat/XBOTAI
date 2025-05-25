import idea from "../assets/idea.png";

export const FeedBack = ({feedback,setFeedback,setShowFeedback}) => {
  
  const handleInput = (e) => {
    setFeedback(e.target.value);
  };

  const handleForm = (e) => {
    e.preventDefault();
    console.log(feedback);
    setShowFeedback(false)
  };

  return (
    <form
      onSubmit={handleForm}
      className="w-[600px] bg-white border-2 border-blue-400 flex flex-col gap-4 p-5 rounded-xl shadow-md"
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 overflow-hidden">
            <img src={idea} className="w-full h-full object-cover" alt="idea" />
          </div>
          <p className="text-lg font-semibold">Provide Additional Feedback</p>
        </div>
        <button type="button" className="text-lg font-bold text-black hover:text-red-500" onClick={()=>setShowFeedback(false)}>
          X
        </button>
      </div>

      <textarea
        placeholder="Your feedback..."
        value={feedback}
        onChange={handleInput}
        rows={5}
        className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 resize-none"
      />

      <button
        type="submit"
        className="self-end px-6 py-2 bg-[#D7C7F4] text-black font-semibold rounded-md hover:bg-[#c1aceb]"
      >
        Submit
      </button>
    </form>
  );
};
