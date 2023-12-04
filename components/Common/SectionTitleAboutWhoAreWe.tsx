const SectionTitleAboutWhoAreWe = ({
  titleFirst,
  titleSecond,
  paragraph,
  width = "570px",
  center,
  mb = "100px",
}: {
  titleFirst: string;
  titleSecond: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <div
        className={`wow fadeInUp w-full ${center ? "mx-auto text-center" : ""}`}
        data-wow-delay=".1s"
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <div className = "flex flex-row mx-4">
        <h2 className="mb-4 mr-4 text-3xl font-bold !leading-tight text-primary dark:text-white sm:text-4xl md:text-[45px]">
          {titleFirst}
        </h2>
        <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
          {titleSecond}
        </h2>
        </div>
        
        <p className="text-base !leading-relaxed text-primary md:text-2xl mx-4">
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitleAboutWhoAreWe;