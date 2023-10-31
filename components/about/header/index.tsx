const Header = () => {
  return (
    <header className="lg:pt-10">
      <p className="text-section font-medium text-sm">About</p>
      <h1 className="pt-2 lg:text-5xl xl:text-6xl md:text-4xl text-3xl font-medium text-text">
        Who We Are
      </h1>
      <div className="text-texts lg:text-xl text-base text-justify max-w-xl md:max-w-3xl font-light">
        <p className="pt-5">
          Innovotio specializes in merchandise curation, recognizing its vital
          role in boosting brand visibility and leaving a lasting impact. Our
          dedicated team passionately curates high-quality, customized
          merchandise tailored to your brand identity and goals.
        </p>
        <p className="py-5">
          Additionally, we offer up-to-date training programs for tech beginners
          looking to upskill, as well as services for organizations, including
          connecting tech talent at all experience levels, business consultancy,
          and tech event management.
        </p>
      </div>
      <div className="lg:pt-20 pt-14 flex justify-center items-center">
        <img
          src="../../../clients.svg"
          alt="brands"
          className="w-full h-10 sm:block hidden"
        />
        <img
          src="../../../clients-mobile.svg"
          alt="brands"
          className="w-96 h-36 sm:hidden block"
        />
      </div>
      <hr className="lg:mt-24 mt-14 opacity-10" />
    </header>
  );
};

export default Header;
