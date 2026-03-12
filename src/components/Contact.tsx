const contactEmail = 'franciscoarenastorres@outlook.com'

export const Contact = () => {
	return (
		<section className="w-[min(580px,calc(100%-2rem))] mx-auto animate-[intro-fade_360ms_ease-out]" aria-label="Contact form">
			<h1 className="mx-auto text-center font-[family-name:var(--font-display)] text-[clamp(2.3rem,4.6vw,3.1rem)] leading-none text-accent">Get in touch</h1>
			<p className="mt-4 mx-auto max-w-[48ch] text-center text-muted text-lg leading-relaxed">
				Have a project in mind? Let's work together to bring your vision to life.
			</p>

			<form
				className="mt-8 grid gap-5 p-6 sm:p-8 border border-line rounded-2xl bg-white/[0.34] shadow-[0_8px_24px_rgba(66,50,36,0.06)]"
				action={`mailto:${contactEmail}`}
				method="post"
				encType="text/plain"
			>
				<label className="grid gap-2">
					<span className="text-xs font-semibold text-muted uppercase tracking-wider">Name</span>
					<input 
						type="text" 
						name="name" 
						placeholder="Your name" 
						required 
						className="w-full border border-[#d8cfc1] rounded-xl bg-white/[0.72] text-ink p-4 transition-all duration-200 focus:outline-none focus:border-accent focus:shadow-[0_0_0_3px_rgba(191,123,47,0.14)]" 
					/>
				</label>

				<label className="grid gap-2">
					<span className="text-xs font-semibold text-muted uppercase tracking-wider">Email</span>
					<input 
						type="email" 
						name="email" 
						placeholder="you@example.com" 
						required 
						className="w-full border border-[#d8cfc1] rounded-xl bg-white/[0.72] text-ink p-4 transition-all duration-200 focus:outline-none focus:border-accent focus:shadow-[0_0_0_3px_rgba(191,123,47,0.14)]" 
					/>
				</label>

				<label className="grid gap-2">
					<span className="text-xs font-semibold text-muted uppercase tracking-wider">Message</span>
					<textarea
						name="message"
						rows={5}
						placeholder="Tell me about your project, timeline, and goals."
						required
						className="w-full border border-[#d8cfc1] rounded-xl bg-white/[0.72] text-ink p-4 transition-all duration-200 resize-y min-h-[140px] focus:outline-none focus:border-accent focus:shadow-[0_0_0_3px_rgba(191,123,47,0.14)]"
					/>
				</label>

				<button 
					type="submit" 
					className="justify-self-center flex items-center gap-2 border-0 rounded-full bg-accent text-white font-semibold px-8 py-3 cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_18px_rgba(80,52,24,0.25)] active:translate-y-0"
				>
					Send Message
					<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
					</svg>
				</button>
			</form>
		</section>
	)
}
