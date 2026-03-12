const contactEmail = 'franciscoarenastorres@outlook.com'

export const Contact = () => {
	return (
		<section className="contact-panel" aria-label="Contact form">
			<p className="kicker">Let's work together</p>
			<h1 className="projects-title">Contact me</h1>
			<p className="contact-copy">
				Share a quick message and your project idea. Your email app will open with the message ready to send.
			</p>

			<form
				className="contact-form"
				action={`mailto:${contactEmail}`}
				method="post"
				encType="text/plain"
			>
				<label className="contact-field">
					<span>Name</span>
					<input type="text" name="name" placeholder="Your name" required />
				</label>

				<label className="contact-field">
					<span>Email</span>
					<input type="email" name="email" placeholder="you@example.com" required />
				</label>

				<label className="contact-field">
					<span>Message</span>
					<textarea
						name="message"
						rows={6}
						placeholder="Tell me about your project, timeline, and goals."
						required
					/>
				</label>

				<button type="submit" className="contact-submit">
					Send Message
				</button>
			</form>
		</section>
	)
}
