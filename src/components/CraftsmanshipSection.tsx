import { motion } from "framer-motion";
import { Scissors, Palette, Sparkles, Layers } from "lucide-react";

const crafts = [
  {
    icon: Layers,
    title: "Premium Fabrics",
    description:
      "From luxurious chiffon and organza to breathable lawn and silk — every fabric is handpicked for its drape, texture, and lasting quality. Only the finest materials make the cut.",
  },
  {
    icon: Scissors,
    title: "Masterful Stitching",
    description:
      "Pakistani couture is renowned for its precision tailoring. Each seam, pleat, and panel is crafted with meticulous attention to detail — ensuring a flawless fit every time.",
  },
  {
    icon: Palette,
    title: "Rich Embroidery & Design",
    description:
      "Intricate threadwork, zardozi, mirror work, and digital prints — the hallmark of Pakistani fashion. Every motif tells a story of centuries-old artistry passed through generations.",
  },
  {
    icon: Sparkles,
    title: "Signature Designer Aesthetics",
    description:
      "From bold contemporary silhouettes to timeless traditional cuts, Pakistani designers blend heritage with haute couture — creating pieces that are wearable works of art.",
  },
];

const CraftsmanshipSection = () => {
  return (
    <section className="py-24 md:py-32 bg-charcoal relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4">
            The Craft Behind the Couture
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-cream mb-6">
            Why <span className="italic text-gold-gradient">Pakistani Fashion</span>
          </h2>
          <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
            Pakistan's fashion heritage is built on centuries of textile mastery —
            where every stitch, weave, and embellishment carries the weight of tradition
            and the spark of modern innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {crafts.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              className="group flex gap-5 p-6 border border-gold/10 hover:border-gold/30 transition-colors duration-500"
            >
              <div className="flex-shrink-0 mt-1">
                <item.icon
                  className="w-7 h-7 text-primary group-hover:text-gold-light transition-colors duration-300"
                  strokeWidth={1.5}
                />
              </div>
              <div>
                <h3 className="font-display text-xl text-cream mb-2">{item.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CraftsmanshipSection;
