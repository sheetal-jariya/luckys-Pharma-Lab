
export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-28">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-5xl font-extrabold text-[#67bed9] leading-tight animate-fadeIn">
            Quality Medicines, <br /> Trusted Care
          </h1>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
            Lucky’s Pharma delivers high-quality pharmaceutical products with
            safety, trust, and innovation.
          </p>

          <div className="mt-10 flex justify-center gap-6">
            <a
              href="/products"
              className="rounded-lg bg-[#67bed9] px-7 py-3 text-white shadow-md hover:bg-[#56aac3] hover:shadow-xl hover:-translate-y-1 transition"
            >
              View Products
            </a>

            <a
              href="/contact"
              className="rounded-lg border border-[#67bed9] px-7 py-3 text-[#67bed9] hover:bg-blue-50 hover:-translate-y-1 transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            About Lucky’s Pharma
          </h2>

          <p className="text-gray-600 max-w-3xl leading-relaxed">
            We manufacture and supply high-quality medicines across multiple
            therapeutic segments, ensuring affordability and compliance with
            global standards.
          </p>
        </div>
      </section>

      {/* PRODUCT CATEGORIES */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">
            Product Categories
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {["Tablets", "Capsules", "Syrups", "Injections"].map((cat) => (
              <div
                key={cat}
                className="rounded-xl bg-white p-8 text-center shadow hover:shadow-xl hover:-translate-y-2 transition"
              >
                <p className="text-lg font-semibold text-[#67bed9]">{cat}</p>
                <p className="mt-2 text-sm text-gray-500">
                  High quality & reliable
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality Assurance",
                desc: "Strict GMP-certified quality checks",
              },
              {
                title: "Wide Product Range",
                desc: "Multiple therapeutic segments covered",
              },
              {
                title: "Trusted Partner",
                desc: "Reliable pharma partner nationwide",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border bg-white p-8 shadow hover:shadow-xl hover:-translate-y-2 transition"
              >
                <h3 className="text-xl font-semibold text-[#67bed9]">
                  {item.title}
                </h3>
                <p className="mt-3 text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
