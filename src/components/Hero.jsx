import { Star } from 'lucide-react';

function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#F2F2F2] to-white" />
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#174D38]/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-16 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[#4D1717]/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block rounded-full border border-[#CBCBCB] bg-white px-3 py-1 text-xs uppercase tracking-wider text-[#4D1717]">Toronto • 1:1 & Small Group Tutoring</span>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-[#121212]">
              Unlock top performance with tailored tutoring
            </h1>
            <p className="mt-5 text-lg text-[#121212]/80">
              Toronto Academic Tutors pairs students with expert educators for personalized, results‑driven support across math, science, English, and test prep. We focus on clarity, confidence, and mastery.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-[#174D38] px-6 py-3 text-white shadow-sm hover:bg-[#4D1717] transition-colors">
                Book a Free Consultation
              </a>
              <a href="#services" className="inline-flex items-center justify-center rounded-md border border-[#CBCBCB] bg-white px-6 py-3 text-[#121212] hover:bg-[#F2F2F2]">
                Explore Services
              </a>
            </div>

            <div className="mt-10 flex items-center gap-6">
              <div className="flex -space-x-2">
                <span className="h-9 w-9 rounded-full bg-[#174D38]/20 border border-white" />
                <span className="h-9 w-9 rounded-full bg-[#4D1717]/20 border border-white" />
                <span className="h-9 w-9 rounded-full bg-[#121212]/20 border border-white" />
              </div>
              <div className="text-sm text-[#121212]/80">
                Trusted by families across the GTA • 4.9/5 average rating
                <Star className="inline ml-1 h-4 w-4 text-[#4D1717]" />
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl border border-[#CBCBCB] bg-white p-6 shadow-sm">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-[#CBCBCB] p-4">
                  <div className="text-xs uppercase tracking-wider text-[#4D1717]">Math</div>
                  <div className="mt-1 text-2xl font-semibold">Grade 7–12</div>
                  <div className="mt-3 h-2 rounded bg-[#F2F2F2]"><div className="h-2 rounded bg-[#174D38] w-3/4" /></div>
                </div>
                <div className="rounded-xl border border-[#CBCBCB] p-4">
                  <div className="text-xs uppercase tracking-wider text-[#4D1717]">Science</div>
                  <div className="mt-1 text-2xl font-semibold">Grade 9–12</div>
                  <div className="mt-3 h-2 rounded bg-[#F2F2F2]"><div className="h-2 rounded bg-[#174D38] w-2/3" /></div>
                </div>
                <div className="rounded-xl border border-[#CBCBCB] p-4">
                  <div className="text-xs uppercase tracking-wider text-[#4D1717]">English</div>
                  <div className="mt-1 text-2xl font-semibold">Writing & Lit</div>
                  <div className="mt-3 h-2 rounded bg-[#F2F2F2]"><div className="h-2 rounded bg-[#174D38] w-4/5" /></div>
                </div>
                <div className="rounded-xl border border-[#CBCBCB] p-4">
                  <div className="text-xs uppercase tracking-wider text-[#4D1717]">Test Prep</div>
                  <div className="mt-1 text-2xl font-semibold">SAT • ACT • OSSLT</div>
                  <div className="mt-3 h-2 rounded bg-[#F2F2F2]"><div className="h-2 rounded bg-[#174D38] w-3/5" /></div>
                </div>
              </div>
              <div className="mt-4 rounded-lg bg-[#F2F2F2] p-4 text-sm text-[#121212]/80">
                Our structured progress tracking keeps families informed and students motivated.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
