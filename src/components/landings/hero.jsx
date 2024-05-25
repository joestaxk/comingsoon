import { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
    const animate = document.querySelector("#animate");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animate.addEventListener("load", () => {
            animate.animate(
              [
                { opacity: 0, transform: "translateY(5rem)" },
                { opacity: 1, transform: "translateY(0rem)" },
              ],
              { duration: 1000 }
            );
          });

        observer.unobserve(animate)
        }
      });
    });
    observer.observe(animate)
  }, []);
  return (
    <div className="flex justify-center relative">
      <div className="light_yellow xl:w-[1150px] lg:w-[1000px] w-full sm:px-5 px-2 relative lg:flex py-3 justify-around items-center">
        <img
          src="/eth.svg"
          alt="ethereum"
          className="absolute top-10 right-10"
        />
        <img
          src="/eth.svg"
          alt="ethereum"
          className="absolute bottom-[-7rem] right-[40rem]"
        />
        <img src="/bitc.svg" alt="btc" className="absolute left-[-7rem]" />
        <svg
          width="2"
          height="723"
          viewBox="0 0 2 723"
          className="absolute left-0 top-[0px] hidden lg:block"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.2"
            d="M1 -1.52588e-05L0.999968 723"
            stroke="url(#paint0_linear_11_6436)"
          ></path>
          <defs>
            <linearGradient
              id="paint0_linear_11_6436"
              x1="1"
              y1="-1.06648e-05"
              x2="0.999984"
              y2="633.439"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white"></stop>
              <stop offset="1" stop-color="white" stop-opacity="0"></stop>
            </linearGradient>
          </defs>
        </svg>

        <div className="w-full lg:flex items-start xl:justify-around lg:gap-[3rem] lg:space-y-0 space-y-10 pt-[4rem]">
          <div className="space-y-5 lg:w-1/2 w-full lg:pl-10">
            <div
              className="xl:text-[57px] lg:text-[50px] sm:text-[50px] xs:text-[47px] text-[39px] font- lg:leading-[73px] xs:leading-[60px] leading-[45px] font-semibold"
              style={{
                background:
                  "linear-gradient(180deg, #FFFFFF 14.46%, rgba(255, 255, 255, 0.42) 100%)",
                backgroundClip: "text",
                "-webkit-background-clip": "text",
                color: "rgba(0,0,0,0)",
              }}
            >
              <h1 className="lg:block hidden">Your lightning</h1>
              <h1 className="lg:block hidden">non-custodial</h1>
              <h1 className="lg:block hidden">exchange</h1>
              <h1 className="lg:hidden block">Your lightning</h1>
              <h1 className="lg:hidden block">non-custodial exchange</h1>
            </div>

            <div className="text-[#ffff] font-[400] sm:text-[18px] text-[16px] leading-[22px] xl:w-[500px]">
              Exchange Bitcoin and 100+ altcoins in a fast, simple, and secure
              way
            </div>

            <div className="flex gap-8 min-h-[100px] items-center justify-between md:w-fit w-full py-3 sm:px-8 px-4 border border-[#595758] rounded-[15px] bg-[rgba(255,255,255,0.05)]">
              <div className="space-y-4">
                <p className="text-[#f5f5f5]">Buy crypto with</p>
                <div className="flex gap-5">
                  <img
                    src="/visa.svg"
                    className="lg:w-auto w-[100px]"
                    alt="visa"
                  />
                  <img
                    src="/mas_card.svg"
                    className="lg:w-auto w-[100px]"
                    alt="mas_card"
                  />
                </div>
              </div>

              <div className="">
                <img
                  src="/soon.svg"
                  className="lg:w-auto w-[150px]"
                  alt="coming soon"
                />
              </div>
            </div>
          </div>

          <div className="lg:w-[500px] h-[400px] overflow-hidden rounded-lg">
            <img
              id="animate"
              src="/mask-phone.png"
              alt="coin"
              className="w-full h-[500px] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
