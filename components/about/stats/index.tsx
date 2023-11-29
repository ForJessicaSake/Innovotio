const Stats = () => {
  return (
    <div className="pt-14 lg:pt-24">
      <div className="flex xl:flex-row flex-col justify-between">
        <div className="xl:max-w-[40%]">
          <div>
            <p className="text-section font-medium text-sm">Stats</p>
            <h1 className="pt-2 lg:text-4xl md:text-3xl text-2xl xl:text-[44px] xl:max-w-lg max-w-sm font-medium text-text mb-7">
              We ensure that all our services offer value.
            </h1>
          </div>
        </div>
        <div className="xl:max-w-[60%] pt-5 xl:pt-0 grid md:grid-cols-2 grid-cols-1 gap-y-16 md:gap-y-0 md:gap-x-10">
        <div className="space-y-16">
              <div className="space-y-3 max-w-xs">
                <h2 className="lg:text-4xl text-2xl text-text">50+</h2>
                <p className="text-lg text-texts">
                  Merchandise successfully delivered to clients
                </p>
              </div>
              <div className="space-y-3 max-w-xs">
                <h2 className="lg:text-4xl text-2xl text-text">6%</h2>
                <p className="text-lg text-texts">
                  Average revenue growth within few months of operation
                </p>
              </div>
              <div className="space-y-3 max-w-xs">
                <h2 className="lg:text-4xl text-2xl text-text">10+</h2>
                <p className="text-lg text-texts">
                  Companies successfully registered through us
                </p>
              </div>
            </div>
            <div className="space-y-16">
            <div className="space-y-3 max-w-[250px]">
                <h2 className="lg:text-4xl text-2xl text-text">100</h2>
                <p className="text-lg text-texts">
                  Soft skills alumni from our programme
                </p>
              </div>
              <div className="space-y-3 max-w-xs">
                <h2 className="lg:text-4xl text-2xl font-normal text-text">8+</h2>
                <p className="text-lg font-normal text-texts">
                  Tech events managed since we began
                </p>
              </div>
              <div className="space-y-3 max-w-xs">
                <h2 className="lg:text-4xl text-2xl  font-normal text-text">20+</h2>
                <p className="text-lg font-normal text-texts">
                  Brands have trusted us to deliver quality
                </p>
              </div>
            </div>
        </div>
      </div>
      <hr className="lg:mt-24 mt-14 opacity-10" />
    </div>
  );
};

export default Stats;
