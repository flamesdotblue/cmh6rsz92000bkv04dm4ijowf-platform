import { Calculator, Atom, BookOpen, GraduationCap, CheckCircle } from 'lucide-react';

function ServiceCard({ icon: Icon, title, description, points }) {
  return (
    <div className="group rounded-2xl border border-[#CBCBCB] bg-white p-6 shadow-sm transition-transform hover:-translate-y-1">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#174D38]/10 text-[#174D38]">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-lg font-semibold text-[#121212]">{title}</h3>
      </div>
      <p className="mt-3 text-sm text-[#121212]/80">{description}</p>
      <ul className="mt-4 space-y-2">
        {points.map((p, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-[#121212]/90">
            <CheckCircle className="mt-0.5 h-4 w-4 text-[#4D1717]" />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Services() {
  const items = [
    {
      icon: Calculator,
      title: 'Mathematics',
      description: 'Foundations to advanced topics: arithmetic, algebra, functions, calculus, data management.',
      points: ['Curriculum-aligned lessons', 'Step-by-step problem solving', 'Exam strategies and practice']
    },
    {
      icon: Atom,
      title: 'Sciences',
      description: 'Physics, chemistry, biology with emphasis on conceptual clarity, labs, and applications.',
      points: ['Visual explanations', 'Lab prep and reports', 'Inquiry-based learning']
    },
    {
      icon: BookOpen,
      title: 'English & Writing',
      description: 'Reading comprehension, literary analysis, grammar, and structured writing skills.',
      points: ['Essay planning frameworks', 'Clear feedback loops', 'Confidence in communication']
    },
    {
      icon: GraduationCap,
      title: 'Test Preparation',
      description: 'OSSLT, EQAO, SAT/ACT with diagnostic assessments and targeted drills.',
      points: ['Personalized study plans', 'Time management tactics', 'Simulated practice tests']
    }
  ];

  return (
    <section id="services" className="relative py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-[#F2F2F2] to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#121212]">Services</h2>
            <p className="mt-2 max-w-2xl text-[#121212]/80">
              Expert tutors, thoughtful curricula, and measurable progress. We meet students where they are and guide them forward with precision.
            </p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex h-10 items-center rounded-md border border-[#CBCBCB] bg-white px-4 text-sm hover:bg-[#F2F2F2]">Get matched with a tutor</a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, idx) => (
            <ServiceCard key={idx} {...item} />
          ))}
        </div>

        <div id="approach" className="mt-16 grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-[#CBCBCB] bg-white p-6">
            <div className="text-xs uppercase tracking-wider text-[#4D1717]">Our Approach</div>
            <h3 className="mt-2 text-xl font-semibold">Personalized and holistic</h3>
            <p className="mt-2 text-sm text-[#121212]/80">We tailor each plan using a brief diagnostic, goal setting with families, and ongoing progress tracking.</p>
          </div>
          <div className="rounded-2xl border border-[#CBCBCB] bg-white p-6">
            <div className="text-xs uppercase tracking-wider text-[#4D1717]">Quality Tutors</div>
            <h3 className="mt-2 text-xl font-semibold">Subject experts who care</h3>
            <p className="mt-2 text-sm text-[#121212]/80">Handpicked educators with proven results, strong communication, and a growth mindset.</p>
          </div>
          <div className="rounded-2xl border border-[#CBCBCB] bg-white p-6">
            <div className="text-xs uppercase tracking-wider text-[#4D1717]">Flexible Delivery</div>
            <h3 className="mt-2 text-xl font-semibold">In‑person or online</h3>
            <p className="mt-2 text-sm text-[#121212]/80">Serving the GTA with convenient scheduling for one‑to‑one and small group sessions.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
