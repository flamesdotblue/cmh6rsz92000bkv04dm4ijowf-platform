import { useState } from 'react';

function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-[#CBCBCB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#hero" className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-sm bg-[#174D38]" />
            <div className="leading-tight">
              <div className="text-sm tracking-widest uppercase text-[#4D1717]">Toronto</div>
              <div className="-mt-1 text-lg font-semibold text-[#121212]">Academic Tutors</div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#services" className="hover:text-[#174D38] transition-colors">Services</a>
            <a href="#approach" className="hover:text-[#174D38] transition-colors">Approach</a>
            <a href="#results" className="hover:text-[#174D38] transition-colors">Results</a>
            <a href="#contact" className="hover:text-[#174D38] transition-colors">Contact</a>
            <a href="#contact" className="inline-flex items-center rounded-md bg-[#174D38] px-4 py-2 text-white shadow-sm hover:bg-[#4D1717] transition-colors">Book a Free Consultation</a>
          </nav>

          <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-[#121212] hover:bg-[#F2F2F2]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-[#CBCBCB] bg-white">
          <div className="space-y-1 px-4 py-3">
            <a href="#services" onClick={() => setOpen(false)} className="block rounded px-3 py-2 hover:bg-[#F2F2F2]">Services</a>
            <a href="#approach" onClick={() => setOpen(false)} className="block rounded px-3 py-2 hover:bg-[#F2F2F2]">Approach</a>
            <a href="#results" onClick={() => setOpen(false)} className="block rounded px-3 py-2 hover:bg-[#F2F2F2]">Results</a>
            <a href="#contact" onClick={() => setOpen(false)} className="block rounded px-3 py-2 hover:bg-[#F2F2F2]">Contact</a>
            <a href="#contact" onClick={() => setOpen(false)} className="mt-2 block rounded-md bg-[#174D38] px-3 py-2 text-center text-white hover:bg-[#4D1717]">Book a Free Consultation</a>
          </div>
        </div>
      )}
    </header>
  );
}

export default NavBar;
