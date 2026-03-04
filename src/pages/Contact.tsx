import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-24 px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4">
              We'd Love to Hear From You
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-light text-cream">
              Get in <span className="italic text-gold-gradient">Touch</span>
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="space-y-10"
            >
              <div>
                <h3 className="font-display text-2xl text-cream mb-6">Reach Us</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-8">
                  Whether you're looking for a specific designer piece or need styling advice,
                  our team is here to help you find the perfect outfit.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { icon: Phone, label: "Phone", value: "+92 300 1234567" },
                  { icon: Mail, label: "Email", value: "hello@shaisnook.com" },
                  { icon: MapPin, label: "Location", value: "Lahore, Pakistan" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <item.icon className="w-5 h-5 text-primary mt-0.5" strokeWidth={1.5} />
                    <div>
                      <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-1">
                        {item.label}
                      </p>
                      <p className="font-body text-sm text-foreground">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-16">
                  <div className="w-16 h-16 rounded-full border border-gold/30 flex items-center justify-center mb-6">
                    <Send className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl text-cream mb-3">Message Sent</h3>
                  <p className="font-body text-sm text-muted-foreground">
                    We'll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {[
                    { name: "name", label: "Your Name", type: "text" },
                    { name: "email", label: "Email Address", type: "email" },
                  ].map((field) => (
                    <div key={field.name}>
                      <label className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2 block">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        required
                        value={formData[field.name as keyof typeof formData]}
                        onChange={(e) =>
                          setFormData({ ...formData, [field.name]: e.target.value })
                        }
                        className="w-full bg-secondary border border-gold/10 px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                  ))}
                  <div>
                    <label className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2 block">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full bg-secondary border border-gold/10 px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-primary text-primary-foreground font-body text-xs tracking-[0.3em] uppercase hover:bg-gold-light transition-colors duration-300"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
