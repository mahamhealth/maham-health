{/* Top Bar Navigation */}
<header className="sticky top-0 z-40 border-b border-slate-800/80 bg-[#08111d]/90 backdrop-blur-md">
  <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 text-xl font-black text-slate-950 shadow-lg shadow-amber-500/20">
        M
      </div>

      <div>
        <span className="block text-xl font-bold tracking-tight text-white">
          MAHAM HEALTH
        </span>
        <span className="block text-[10px] font-medium uppercase tracking-widest text-amber-400/90">
          Soorin Maham Group • Medical Concierge
        </span>
      </div>
    </div>

    <div className="flex items-center gap-3">
      <div className="relative flex items-center rounded-lg border border-slate-700/80 bg-slate-900 px-2 py-1.5 shadow-inner">
        <Globe2 className="mr-1.5 ml-1 h-4 w-4 text-amber-400" />

        <select
          value={lang}
          onChange={(e) => setLang(e.target.value as Language)}
          aria-label="Select Language"
          className="cursor-pointer bg-transparent pr-4 text-xs font-semibold text-slate-200 outline-none"
        >
          <option value="en" className="bg-slate-900 text-white">
            English
          </option>
          <option value="fa" className="bg-slate-900 text-white">
            فارسی
          </option>
          <option value="ar" className="bg-slate-900 text-white">
            العربية
          </option>
          <option value="sw" className="bg-slate-900 text-white">
            Kiswahili
          </option>
          <option value="hi" className="bg-slate-900 text-white">
            हिन्दी
          </option>
          <option value="ur" className="bg-slate-900 text-white">
            اردو
          </option>
        </select>
      </div>

      <button
        type="button"
        onClick={() => {
          setStep(1);
          setModal(true);
        }}
        className="hidden items-center justify-center rounded-lg bg-gradient-to-r from-amber-400 to-amber-500 px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-950 sm:inline-flex"
      >
        Get Free Assessment
      </button>
    </div>
  </div>
</header>
