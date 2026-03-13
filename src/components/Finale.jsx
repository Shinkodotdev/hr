import { motion } from "framer-motion";
import img5 from "../assets/5.png";
export default function Finale() {
  return (
    <section className="finale light">
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        This Is Not Goodbye
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        It’s a Beautiful New Beginning
      </motion.h2>

      <p className="signature">— Your Pro-Solutions Family</p>
      <div className="polaroidhr">
        <img
              src={img5}
              loading="lazy"
              decoding="async"
            />
            <p><b>Den Ratonel</b> <br/>
            Pro-Solutions Technology Co.</p>
      </div>
    </section>
  );
}