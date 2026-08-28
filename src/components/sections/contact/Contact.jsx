import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  FileText,
  Send,
  MapPin,
  User,
  MessageSquare,
  CheckCircle,
  Loader2,
  Copy,
  Check,
} from "lucide-react";
import Reveal from "../../../common/ui/Reveal";
import Eyebrow from "../../../common/ui/Eyebrow";
import PillButton from "../../../common/ui/PillButton";

const EMAIL = "aswini.pr.rath@gmail.com";

const info = [
  { icon: Mail, title: "Email", value: EMAIL },
  { icon: Phone, title: "Phone", value: "+91-6370706037" },
  { icon: MapPin, title: "Location", value: "Bengaluru, India" },
  {
    icon: FileText,
    title: "Resume",
    value: "View my resume",
    link: "https://drive.google.com/file/d/1XTNl8YvyWrBaLPFE-ySLmd676JKD0uO9/view?usp=drive_link",
  },
];

const fieldClass =
  "w-full bg-transparent border-b border-line focus:border-accent outline-none transition-colors py-3 pl-8 placeholder:text-faint";

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable — silently ignore
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!name) newErrors.name = "Full name is required";

    const phoneRegex = /^[0-9]{10}$/;
    if (!phone.match(phoneRegex)) newErrors.phone = "Enter a valid 10-digit phone number";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) newErrors.email = "Enter a valid email address";

    if (!message) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitStatus("");
    setIsLoading(true);

    if (validateForm()) {
      const serviceId = "service_bm9goxa";
      const templateIdContact = "template_zu73tvs";
      const templateIdReply = "template_j8ytkvd";
      const publicKey = "mBznRq9QCDoYPursH";

      const contactTemplateParams = { from_name: name, from_email: email, phone, message };
      const replyTemplateParams = { to_email: email, from_name: name, message };

      emailjs
        .send(serviceId, templateIdContact, contactTemplateParams, publicKey)
        .then(() => emailjs.send(serviceId, templateIdReply, replyTemplateParams, publicKey))
        .then(() => {
          setName("");
          setEmail("");
          setMessage("");
          setPhone("");
          setSubmitStatus("success");
          setIsLoading(false);
          setTimeout(() => setSubmitStatus(""), 3000);
        })
        .catch((error) => {
          console.error("Failed to send emails:", error);
          setSubmitStatus("error");
          setIsLoading(false);
          setTimeout(() => setSubmitStatus(""), 3000);
        });
    } else {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-28 md:py-36 border-t border-line">
      <div className="container-x">
        <Reveal className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <Eyebrow className="justify-center">Contact</Eyebrow>
          <h2 className="mt-4 font-sans font-medium uppercase tracking-tighter text-4xl md:text-6xl text-balance">
            Let&apos;s build something together
          </h2>
          <p className="mt-5 text-muted leading-relaxed">
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>
          <div className="mt-8 flex items-center justify-center">
            <PillButton onClick={copyEmail}>
              {copied ? <Check size={14} /> : <Copy size={14} />}
              {copied ? "Copied!" : EMAIL}
            </PillButton>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          <Reveal>
            <div className="h-full rounded-2xl border border-line bg-surface p-8 md:p-10">
              <h3 className="font-sans font-medium uppercase tracking-tighter text-2xl mb-8">
                Contact Information
              </h3>
              <div className="space-y-6">
                {info.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <item.icon size={18} className="text-accent mt-0.5 shrink-0" />
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-widish text-muted">
                        {item.title}
                      </p>
                      {item.link ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-accent transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p>{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="relative space-y-6">
              {isLoading && (
                <div className="absolute inset-0 bg-ink/70 z-20 flex items-center justify-center rounded-2xl">
                  <Loader2 className="w-8 h-8 animate-spin text-accent" />
                </div>
              )}
              {submitStatus === "success" && (
                <div className="absolute -top-4 inset-x-0 -translate-y-full bg-paper text-ink rounded-pill px-4 py-3 flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-widish">
                  <CheckCircle size={16} /> Message sent successfully!
                </div>
              )}
              {submitStatus === "error" && (
                <div className="absolute -top-4 inset-x-0 -translate-y-full bg-red-500 text-white rounded-pill px-4 py-3 flex items-center justify-center font-mono text-xs uppercase tracking-widish">
                  Failed to send. Please try again.
                </div>
              )}

              <div className="relative">
                <User size={16} className="absolute left-0 top-1/2 -translate-y-1/2 text-faint" />
                <input
                  type="text"
                  placeholder="Full Name"
                  className={fieldClass}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={isLoading}
                />
                {errors.name && <p className="text-red-400 mt-1 text-xs">{errors.name}</p>}
              </div>

              <div className="relative">
                <Phone size={16} className="absolute left-0 top-1/2 -translate-y-1/2 text-faint" />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className={fieldClass}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  disabled={isLoading}
                />
                {errors.phone && <p className="text-red-400 mt-1 text-xs">{errors.phone}</p>}
              </div>

              <div className="relative">
                <Mail size={16} className="absolute left-0 top-1/2 -translate-y-1/2 text-faint" />
                <input
                  type="email"
                  placeholder="Email Address"
                  className={fieldClass}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                />
                {errors.email && <p className="text-red-400 mt-1 text-xs">{errors.email}</p>}
              </div>

              <div className="relative">
                <MessageSquare size={16} className="absolute left-0 top-4 text-faint" />
                <textarea
                  placeholder="Your Message"
                  rows={3}
                  className={`${fieldClass} resize-none`}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  disabled={isLoading}
                />
                {errors.message && <p className="text-red-400 mt-1 text-xs">{errors.message}</p>}
              </div>

              <PillButton type="submit" variant="solid" className="w-full" onClick={undefined}>
                {isLoading ? <Loader2 size={14} className="animate-spin" /> : <Send size={14} />}
                {isLoading ? "Sending..." : "Send Message"}
              </PillButton>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
