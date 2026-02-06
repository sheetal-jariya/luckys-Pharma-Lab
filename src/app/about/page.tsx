import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="w-full ">
      <Image
        src="/abutus.png"
        alt="About Us"
        width={1920}
        height={600}
        className="w-full h-auto object-cover "
        priority
      />

      <section className="max-w-7xl mx-auto px-4 py-10">
        <h3 className="text-2xl font-bold mb-4">Our Team</h3>
        <p className="text-gray-700 leading-7">
          In pursuit of having excellence in all the business works, we have employed a specialized workforce. The hired team comprises intelligent personnel of several fields, working with passion and punctuality to attain the business goals, on-time. Our processing experts and researchers work in unity to launch effective medicines for several health diseases & aliments. A team of packers uses finest quality material to do the packing of the range. Further, all the employees of our organization work in harmony to attain the business objectives within the decided time period. The hired team includes following experts:
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Image src="/a1.jpg" alt="" width={500} height={350} />
          <Image src="/a2.jpg" alt="" width={500} height={350} />
          <Image src="/a3.jpg" alt="" width={500} height={350} />
        </div>
      </section>
    </div>
  );
}
