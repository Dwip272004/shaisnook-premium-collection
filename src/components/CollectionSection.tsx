import { motion } from "framer-motion";
import dress1 from "@/assets/dress-1.jpg";
import dress2 from "@/assets/dress-2.jpg";
import dress3 from "@/assets/dress-3.jpg";
import dress4 from "@/assets/dress-4.jpg";

const dresses = [
  {
    image: dress1,
    name: "Emerald Majesty",
    designer: "Maria B.",
    category: "Luxury Lawn",
  },
  {
    image: dress2,
    name: "Burgundy Reign",
    designer: "Sana Safinaz",
    category: "Formal Collection",
  },
  {
    image: dress3,
    name: "Ivory Blossom",
    designer: "Khadija",
    category: "Chiffon Suite",
  },
  {
    image: dress4,
    name: "Royal Midnight",
    designer: "Malaabis",
    category: "Wedding Formals",
  },
];

const CollectionSection = () => {
  return (
    <section id="collection" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4">
            Handpicked for You
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-cream">
            Featured <span className="italic text-gold-gradient">Collection</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {dresses.map((dress, index) => (
            <motion.div
              key={dress.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.7 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden mb-4 aspect-[3/4] bg-charcoal">
                <img
                  src={dress.image}
                  alt={`${dress.name} by ${dress.designer}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="font-body text-xs tracking-[0.3em] uppercase text-primary">
                    {dress.category}
                  </p>
                </div>
                {/* Gold corner accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-gold/0 group-hover:border-gold/40 transition-all duration-500" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-gold/0 group-hover:border-gold/40 transition-all duration-500" />
              </div>
              <h3 className="font-display text-xl text-cream group-hover:text-gold-gradient transition-colors duration-300">
                {dress.name}
              </h3>
              <p className="font-body text-xs tracking-[0.15em] text-muted-foreground mt-1">
                by {dress.designer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionSection;
