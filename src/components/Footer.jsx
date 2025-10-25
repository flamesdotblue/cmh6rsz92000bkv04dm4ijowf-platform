import { Phone, Mail, MapPin } from 'lucide-react';

function Footer() {
  return (
    <footer id="contact" className="mt-20 border-t border-[#CBCBCB] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-sm bg-[#4D1717]" />
              <div className="text-lg font-semibold">Toronto Academic Tutors</div>
            </div>
            <p className="mt-3 text-sm text-[#121212]/80">
              Personalized tutoring that builds confidence and delivers results. Serving families across the Greater Toronto Area.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold text-[#121212]">Contact</div>
            <ul className="mt-3 space-y-2 text-sm text-[#121212]/90">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#174D38]" />
                <a href="tel:+16470000000" className="hover:text-[#174D38]">(647) 000‑0000</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#174D38]" />
                <a href="mailto:hello@torontoacademictutors.ca" className="hover:text-[#174D38]">hello@torontoacademictutors.ca</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#174D38]" />
                <span>Toronto, ON</span>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold text-[#121212]">Get started</div>
            <form className="mt-3 flex flex-col sm:flex-row gap-2">
              <input type="email" required placeholder="Your email" className="w-full rounded-md border border-[#CBCBCB] bg-white px-3 py-2 text-sm placeholder:text-[#121212]/50 focus:outline-none focus:ring-2 focus:ring-[#174D38]/30" />
              <button type="submit" className="whitespace-nowrap rounded-md bg-[#174D38] px-4 py-2 text-sm text-white hover:bg-[#4D1717]">Request info</button>
            </form>
            <p className="mt-2 text-xs text-[#121212]/60">Well reach out within 24 hours. No spam.</p>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#CBCBCB] pt-6 text-xs text-[#121212]/70">
          <p>© {new Date().getFullYear()} Toronto Academic Tutors. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-[#174D38]">Privacy</a>
            <a href="#" className="hover:text-[#174D38]">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
