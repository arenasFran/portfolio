import { useState, type FormEvent } from 'react'
import emailjs from '@emailjs/browser'

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

type SubmitStatus = 'idle' | 'sending' | 'success' | 'error'

export const Contact = () => {
	const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle')
	const [feedbackMessage, setFeedbackMessage] = useState('')

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
			setSubmitStatus('error')
			setFeedbackMessage('Email service is not configured yet. Add your EmailJS keys in .env.local.')
			return
		}

		const form = event.currentTarget
		const formData = new FormData(form)
		const name = String(formData.get('name') ?? '')
		const email = String(formData.get('email') ?? '')
		const message = String(formData.get('message') ?? '')

		setSubmitStatus('sending')
		setFeedbackMessage('Sending your message...')

		try {
			await emailjs.send(
				EMAILJS_SERVICE_ID,
				EMAILJS_TEMPLATE_ID,
				{
					from_name: name,
					from_email: email,
					message,
				},
				{
					publicKey: EMAILJS_PUBLIC_KEY,
				},
			)

			setSubmitStatus('success')
			setFeedbackMessage('Message sent successfully. I will get back to you soon.')
			form.reset()
		} catch {
			setSubmitStatus('error')
			setFeedbackMessage('Something went wrong while sending. Please try again in a moment.')
		}
	}

	return (
		<section className="w-[min(580px,calc(100%-2rem))] mx-auto animate-[intro-fade_360ms_ease-out]" aria-label="Contact form">
			<h1 className="mx-auto text-center font-[family-name:var(--font-display)] text-[clamp(2.3rem,4.6vw,3.1rem)] leading-none text-accent">Get in touch</h1>
			<p className="mt-4 mx-auto max-w-[48ch] text-center text-muted text-lg leading-relaxed">
				Have a project in mind? Let's work together to bring your vision to life.
			</p>

			<form
				className="mt-8 grid gap-5 p-6 sm:p-8 border border-line rounded-2xl bg-white/[0.34] shadow-[0_8px_24px_rgba(66,50,36,0.06)]"
				onSubmit={handleSubmit}
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
					disabled={submitStatus === 'sending'}
					className="justify-self-center flex items-center gap-2 border-0 rounded-full bg-accent text-white font-semibold px-8 py-3 cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_18px_rgba(80,52,24,0.25)] active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
				>
					{submitStatus === 'sending' ? 'Sending...' : 'Send Message'}
					<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
					</svg>
				</button>

				{submitStatus !== 'idle' && (
					<p className={`text-center text-sm ${submitStatus === 'success' ? 'text-[#3f6256]' : submitStatus === 'error' ? 'text-[#9b3f2f]' : 'text-muted'}`}>
						{feedbackMessage}
					</p>
				)}
			</form>
		</section>
	)
}
