import { motion } from "framer-motion";
import { ShieldCheck, Award, Gem } from "lucide-react";

const features = [
  { icon: ShieldCheck, title: "100% Original", desc: "Every piece verified authentic" },
  { icon: Award, title: "Top Designers", desc: "Maria B., Malabar & more" },
  { icon: Gem, title: "Premium Quality", desc: "Pure fabrics, flawless craft" },
];

const AuthenticityBanner = () => {
  return (
    <section className="py-20 border-y border-gold/10 bg-gold-subtle">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="text-center"
            >
              <f.icon className="w-8 h-8 text-primary mx-auto mb-4" strokeWidth={1.5} />
              <h3 className="font-display text-xl text-cream mb-2">{f.title}</h3>
              <p className="font-body text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuthenticityBanner;
