import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutUs() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

    const titleVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
    };

    const textVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.2 } }
    };

    return (
        <section
            ref={sectionRef}
            className="max-w-7xl mx-auto px-6 py-16 relative overflow-hidden"
        >
            {/* Content */}
            <div id="about-us" className="relative z-10">
                <motion.h2
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={titleVariants}
                    className="text-2xl font-bold text-black mb-12 font-poppins"
                >
                    Qui Sommes-Nous ?
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-12 items-center text-gray-800 font-poppins">
                    <motion.div
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={titleVariants}
                        className="text-left"
                    >
                        <h2 className="text-4xl font-bold text-black mb-6">
                            La Clinique DR N.B <br />
                            <span className="text-atoll-800">Une référence en excellence médicale</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={textVariants}
                        className="space-y-4"
                    >
                        <motion.p
                            variants={textVariants}
                            className="text-md leading-relaxed"
                        >
                            La Clinique DR N.B se positionne en tant que centre de référence, bénéficiant d'une expertise médicale
                            de renommée mondiale forgée au fil des années. Notre savoir-faire, conforme aux normes internationales,
                            s'associe à des équipements et matériels de pointe en technologie médicale, assurant ainsi des résultats optimaux.
                        </motion.p>
                        <motion.p
                            variants={textVariants}
                            className="text-md leading-relaxed"
                        >
                            Notre mission est de fournir des soins médicaux de qualité exceptionnelle, en mettant l'accent sur
                            l'empathie et le respect du patient. Nous nous engageons à offrir une expérience unique et personnalisée,
                            alliant innovation et excellence médicale, dans un cadre chaleureux et humain.
                        </motion.p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}