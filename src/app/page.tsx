import HomeBanner from "./HomeBanner";

export default function Home() {
  return (
    <>
      {/* ===== BANNER ===== */}
      <HomeBanner />

      {/* ===== WELCOME SECTION ===== */}
      <section className="bg-white py-16">
  <div className="max-w-6xl mx-auto px-4 text-center">

    {/* MAIN HEADING */}
    <h2
      className="
        uppercase
        font-bold
        text-[46px]
        leading-[50px]
        tracking-[0px]
        text-[#161222]
        font-[Roboto]
      "
    >
      WELCOME TO{" "}
      <span className="text-[#63a8b4]">
        LUCKYS PHARMA LAB PVT. LTD.
      </span>
    </h2>

    {/* SUB HEADING */}
    <p
      className="
        uppercase
        mt-2
        font-normal
        text-[40px]
        leading-[46px]
        tracking-[0px]
        text-[#161222]
      "
    >
      (PHARMA COMPANY IN INDORE)
    </p>

    {/* DESCRIPTION */}
    <p className="mt-6 max-w-4xl mx-auto text-[15px] leading-[26px] text-gray-600">
      <span className="text-[#63a8b4] font-medium">
        Luckys Pharma
      </span>{" "}
      has been catering to the requirements of the healthcare sector,
      since its formation in the year 2001. The firm has established
      itself as a reliable partner of several doctors and medical
      practitioners by serving quality pharmaceuticals.
    </p>

    {/* BUTTON */}
    <div className="mt-8">
      <a
        href="/about"
        className="
          inline-block
          bg-[#63a8b4]
          text-white
          px-8 py-3
          rounded-md
          text-[15px]
          font-medium
          hover:bg-[#549aa6]
          transition
        "
      >
        Read More !
      </a>
    </div>

  </div>
</section>

    </>
  );
}

