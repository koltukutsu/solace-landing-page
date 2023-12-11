import Image from "next/image";

const InformationCard = ({ image, title, description }) => {
  return (
    <div className="grid max-w-sm flex-col rounded-3xl bg-white shadow-sm  dark:bg-gray-dark">
      <img
        src={image}
        width="390"
        height="200"
        className="grid h-80 justify-center rounded-t-3xl object-cover"
        alt="movie.title"
      />

      <div className="group z-10 grid p-6">
        {/* <a
              href="<---somelink--->"
              className="line-clamp-2 font-bold group-hover:text-cyan-700 sm:text-2xl"
            > */}
        <h3 className="price mb-2 text-3xl font-bold text-black dark:text-white">
          {title}
        </h3>
        {/* </a> */}
        <div className="h-28">
          <span className="line-clamp-4 py-2 text-base font-light leading-relaxed text-body-color">
            {description}
          </span>
        </div>
        {/* <div className=" group flex grid-cols-2 justify-between">
              <div className="flex flex-col font-black">
                <span className="text-yellow-500 text-xl">IMDB SCORE</span>
                <span className="group-hover:text-yellow-600 flex items-center gap-x-1 text-3xl">
                  8.8
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0" />

                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />

                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z"
                        fill="#eab308"
                      />{" "}
                    </g>
                  </svg>
                </span>
              </div>
              <div className="flex flex-col items-end">
                <div className="h-7" />
                <span className="gap-x-2  text-3xl  font-bold text-slate-300">
                  # 8
                </span>
              </div>
            </div> */}
      </div>
    </div>
  );
};

const InformationCardOnlyTitle = ({ image, title }) => {
  return (
    <div className="flex h-screen items-center justify-center bg-[#0d1829] ">
      <div className=" mx-auto rounded-3xl bg-white shadow-xl">
        <div className="grid max-w-sm flex-col rounded-3xl bg-slate-100  shadow-sm">
          <Image
            src={image}
            fill
            className="grid h-80 justify-center rounded-t-3xl object-cover"
            alt="movie.title"
          />

          <div className="group z-10 grid p-6">
            <span className="line-clamp-2 font-bold group-hover:text-cyan-700 sm:text-2xl"
            >
              {title}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export { InformationCard, InformationCardOnlyTitle };
