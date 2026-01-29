import { useState } from "react";
import { motion } from "motion/react";
import emailjs from "emailjs-com";
import { Mail, MapPin, Phone, Send, Github, Linkedin, MessageCircle } from "lucide-react";

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.subject || !form.message) {
      setStatus("Please fill all fields.");
      return;
    }

    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailPattern.test(form.email)) {
      setStatus("Enter a valid email address.");
      return;
    }

    setSending(true);
    setStatus("Sending...");

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          user_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus("Message sent successfully!");
        setForm({ name: "", email: "", subject: "", message: "" });
        setSending(false);
      })
      .catch(() => {
        setStatus("Failed to send message. Please try again.");
        setSending(false);
      });
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "shse1502@colorado.edu" },
    { icon: Phone, label: "Phone", value: "(720)-260-6977" },
    { icon: MapPin, label: "Location", value: "Boulder, CO (Open to Relocate)" },
  ];

  const quickLinks = [
    { icon: Github, url: "https://github.com/Shiva250503ss" },
    { icon: Linkedin, url: "https://linkedin.com/in/shivaraj-senthil-rajan-2b8898227" },
    { icon: Mail, url: "mailto:shse1502@colorado.edu" },
  ];

  return (
    <section id="contact" className="relative min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl text-white text-right mb-12"
        >
          Get In{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Touch
          </span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl text-white mb-6">
              Let's Connect & Collaborate{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">

              </span>
            </h3>

            <p className="text-white/70 mb-8">
              Whether it's an AI project, data engineering challenge, or analytics opportunity — I'd love to hear from you!
              Open to full-time roles, internships, and collaborations.
            </p>

            {/* CONTACT INFO */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 bg-white/5
                             backdrop-blur-xl border border-white/10
                             rounded-xl p-4 hover:border-blue-500 hover:bg-white/10 transition-all mb-8"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">{item.label}</p>
                    <p className="text-white">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex flex-wrap justify-center gap-6 mb-20 w-full">
              {quickLinks.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  className="w-12 h-12 flex items-center justify-center rounded-xl
                    bg-white/5 backdrop-blur-md
                    border border-white/10 transition-shadow hover:shadow-lg hover:shadow-blue-500/40"
                >
                  <item.icon className="text-blue-400 w-6 h-6" />
                </motion.a>
              ))}
            </div>

            {/* CHATBOT LINK */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <a
                href="https://ai-native-chatbot.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 px-6 rounded-xl
                  bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold
                  hover:from-purple-700 hover:to-blue-700 transition-all"
              >
                <MessageCircle size={24} />
                Want to know more? Chat with my AI Assistant
              </a>
            </motion.div>

          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <label className="text-white/80 block">Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:border-blue-500 focus:outline-none"
                placeholder="Your Name"
              />

              <label className="text-white/80 block">Email</label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:border-blue-500 focus:outline-none"
                placeholder="Your Email"
              />

              <label className="text-white/80 block">Subject</label>
              <input
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:border-blue-500 focus:outline-none"
                placeholder="Job Opportunity / Project Discussion"
              />

              <label className="text-white/80 block">Message</label>
              <textarea
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:border-blue-500 focus:outline-none resize-none"
                placeholder="Tell me about the opportunity..."
              />

              <motion.button
                type="submit"
                disabled={sending}
                whileHover={{ scale: sending ? 1 : 1.05 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white flex justify-center gap-2 font-semibold"
              >
                {sending ? "Sending..." : "Send Message"} <Send size={20} />
              </motion.button>

              {status && (
                <p className="text-center text-white/80 mt-3">{status}</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
