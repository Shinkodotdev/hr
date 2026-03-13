import { motion } from "framer-motion";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpeg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
/* 🔹 Animation Variant */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Memories() {
  return (
    <section className="memories">
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        Memories We Hold Close 🤍
      </motion.h2>

      <div className="polaroid-grid">
        {[img1, img2, img3, img4].map((img, i) => (
          <motion.div
            className="polaroid"
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src={img}
              alt={`Memory ${i + 1}`}
              loading="lazy"
              decoding="async"
            />
            <p>Forever in our hearts</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}