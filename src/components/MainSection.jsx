import botLogo from "../assets/botAi-logo.png";

export const MainSection = () => {
  const heading = [
    "Hi, what is the weather",
    "Hi, what is my location",
    "Hi, what is the temperature",
    "Hi, how are you",
  ];
  const subHeading = "Get immediate AI generated response";

  return (
    <>
      <header>
        <h1 className="font-bold text-xl m-4">
          <span className="md:hidden"></span>Bot AI
        </h1>
      </header>

      <div className="flex flex-col items-center gap-1 mt-20">
        <h1 className="font-bold text-xl">How Can I Help You Today?</h1>
        <div className="h-12 w-12 overflow-hidden rounded-full">
          <img
            src={botLogo}
            alt="botAi"
            className="object-cover h-full w-full"
          />
        </div>
      </div>

      <div className="flex flex-col items-center gap-3  mt-20 md:flex-row md:flex-wrap md:justify-center">
        {heading.map((item) => {
          return (
            <div className="flex flex-col items-start justify-equal gap-2 w-[90%]  p-4 h-25 bg-white rounded-lg shadow-xl   md:w-[48%]">
              <p className="font-bold font-lg">{item}</p>
              <p>{subHeading}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
