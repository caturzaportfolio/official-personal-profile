import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, CheckCircle2, Mail, Linkedin, ArrowUpRight } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    communityType: "Business",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setLoading(true);
    // Simulate real API dispatch delay
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      // Reset form state
      setFormState({
        name: "",
        email: "",
        communityType: "Business",
        message: "",
      });
    }, 1200);
  };

  const communityTypes = ["LGU / Local Government", "Business", "School", "Civic Project"];

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="flex items-baseline space-x-1 mb-16" id="contact-heading">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0A0A0A]">
            Get in touch
          </h2>
          <span className="w-2.5 h-2.5 rounded-full bg-[#7C3AED]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start" id="contact-grid">
          
          {/* Left Side: Contact Information */}
          <div className="lg:col-span-5 space-y-8" id="contact-info">
            <h3 className="text-2xl font-extrabold text-[#0A0A0A] leading-tight">
              Let's build something meaningful together.
            </h3>
            
            <p className="text-gray-600 font-medium leading-relaxed">
              If you represent an LGU, business, or school in the Philippines and want to digitalize your operations, or simply want to collaborate on open-source civic tech, drop a line!
            </p>

            <div className="space-y-4 pt-4" id="contact-channels">
              {/* Email Address */}
              <a
                href="mailto:caturzajr4@gmail.com"
                className="flex items-center space-x-4 p-4 rounded-2xl border border-gray-100 hover:border-[#7C3AED]/30 hover:shadow-sm hover:bg-violet-50/20 transition-all group cursor-pointer"
              >
                <div className="w-11 h-11 rounded-xl bg-violet-50 text-[#7C3AED] flex items-center justify-center group-hover:bg-[#7C3AED] group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Email Me</p>
                  <p className="text-sm font-extrabold text-[#0A0A0A] group-hover:text-[#7C3AED] transition-colors">caturzajr4@gmail.com</p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/felicito-jr-caturza-b51b6538b/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 rounded-2xl border border-gray-100 hover:border-[#7C3AED]/30 hover:shadow-sm hover:bg-violet-50/20 transition-all group cursor-pointer"
              >
                <div className="w-11 h-11 rounded-xl bg-violet-50 text-[#7C3AED] flex items-center justify-center group-hover:bg-[#7C3AED] group-hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="flex-1 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">LinkedIn Connect</p>
                    <p className="text-sm font-extrabold text-[#0A0A0A] group-hover:text-[#7C3AED] transition-colors">Felicito Jr. Caturza</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover:text-[#7C3AED] transition-colors" />
                </div>
              </a>
            </div>
          </div>

          {/* Right Side: Interactive Form Card */}
          <div 
            className="lg:col-span-7 bg-[#FAFAFA] border border-gray-100 rounded-3xl p-8 md:p-10 shadow-sm relative overflow-hidden"
            id="contact-form-card"
          >
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label htmlFor="form-name" className="text-xs font-bold text-gray-700 uppercase tracking-wide">
                        Your Name
                      </label>
                      <input
                        id="form-name"
                        type="text"
                        required
                        placeholder="Juan Dela Cruz"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full bg-white border border-gray-200 focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED] rounded-xl px-4 py-3 text-sm text-[#0A0A0A] font-medium outline-none transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label htmlFor="form-email" className="text-xs font-bold text-gray-700 uppercase tracking-wide">
                        Email Address
                      </label>
                      <input
                        id="form-email"
                        type="email"
                        required
                        placeholder="juan@example.ph"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full bg-white border border-gray-200 focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED] rounded-xl px-4 py-3 text-sm text-[#0A0A0A] font-medium outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Project Type Select */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">
                      What best describes your community?
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {communityTypes.map((type) => {
                        const isSelected = formState.communityType === type;
                        return (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setFormState({ ...formState, communityType: type })}
                            className={`px-4 py-3 rounded-xl border text-xs font-bold transition-all text-center cursor-pointer ${
                              isSelected
                                ? "bg-[#1A1A1A] border-[#1A1A1A] text-white shadow-sm"
                                : "bg-white border-gray-200 text-gray-600 hover:border-[#7C3AED] hover:text-[#7C3AED]"
                            }`}
                          >
                            {type.split(" / ")[0]}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="form-message" className="text-xs font-bold text-gray-700 uppercase tracking-wide">
                      Your Message
                    </label>
                    <textarea
                      id="form-message"
                      required
                      rows={4}
                      placeholder="Tell me about what you are building, the challenges you face, and how I can help..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full bg-white border border-gray-200 focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED] rounded-xl px-4 py-3 text-sm text-[#0A0A0A] font-medium outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#1A1A1A] hover:bg-[#0A0A0A] text-white font-semibold py-4 rounded-full transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:transform-none shadow-md flex items-center justify-center space-x-2 cursor-pointer"
                    id="submit-contact-btn"
                  >
                    <span>{loading ? "Sending Message..." : "Send Message"}</span>
                    {!loading && <Send className="w-4 h-4" />}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="contact-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-12"
                  id="contact-success-state"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                  >
                    <CheckCircle2 className="w-16 h-16 text-[#7C3AED] mb-6 stroke-[1.5]" />
                  </motion.div>
                  <h3 className="text-2xl font-extrabold text-[#0A0A0A] tracking-tight mb-3">
                    Thank you, message sent!
                  </h3>
                  <p className="text-gray-500 font-medium max-w-sm mb-8 text-sm leading-relaxed">
                    I appreciate you reaching out. I will review your message and get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="bg-white border border-gray-200 hover:border-[#7C3AED] hover:text-[#7C3AED] text-gray-700 font-bold px-6 py-2.5 rounded-full text-xs shadow-sm transition-all cursor-pointer"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
