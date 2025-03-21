import { FaUserMd, FaMicroscope, FaClinicMedical, FaMicrochip, FaHandsHelping } from 'react-icons/fa';

export default function CardsSection() {
    return (
        <section className="font-poppins py-20 bg-white relative overflow-hidden">
            <div className="mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {/* Carte 1 - Savoir-faire */}
                    <div className="relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-4 hover:scale-[1.02] transition-all duration-400 ease-in-out group min-h-[280px] border border-[#e0f2fe]">
                        <div className="absolute top-6 left-6 text-5xl text-atoll-800 group-hover:scale-110 group-hover:rotate-12 transition-all duration-400">
                            <FaUserMd />
                        </div>
                        <div className="mt-16">
                            <h3 className="text-xl font-bold text-atoll-800 mb-3">
                                Savoir-faire &amp; Expertise Médicale
                            </h3>
                            <p className="text-gray-600 text-sm leading-snug">
                                &laquo; Spécialistes en santé reproductive, notre équipe allie expertise médicale et approche humaine pour votre parcours PMA &raquo;
                            </p>
                        </div>
                    </div>

                    {/* Carte 2 - Laboratoires */}
                    <div className="relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-4 hover:scale-[1.02] transition-all duration-400 ease-in-out group min-h-[280px] border border-[#e0f2fe]">
                        <div className="absolute top-6 left-6 text-5xl text-atoll-800 group-hover:scale-110 group-hover:rotate-12 transition-all duration-400">
                            <FaMicroscope />
                        </div>
                        <div className="mt-16">
                            <h3 className="text-xl font-bold text-atoll-800 mb-3">
                                Laboratoires de Qualité
                            </h3>
                            <p className="text-gray-600 text-sm leading-snug">
                                Plateaux techniques certifiés ISO avec technologies de pointe pour des analyses et procédures PMA selon les normes internationales
                            </p>
                        </div>
                    </div>

                    {/* Carte 3 - Suivi */}
                    <div className="relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-4 hover:scale-[1.02] transition-all duration-400 ease-in-out group min-h-[280px] border border-[#e0f2fe]">
                        <div className="absolute top-6 left-6 text-5xl text-atoll-800 group-hover:scale-110 group-hover:rotate-12 transition-all duration-400">
                            <FaClinicMedical />
                        </div>
                        <div className="mt-16">
                            <h3 className="text-xl font-bold text-atoll-800 mb-3">
                                Suivi Médical Exceptionnel
                            </h3>
                            <p className="text-gray-600 text-sm leading-snug">
                                &laquo; Accompagnement sur mesure avec bilans réguliers et suivi 24h/24 via votre espace patient digital sécurisé &raquo;
                            </p>
                        </div>
                    </div>

                    {/* Carte 4 - Technologie */}
                    <div className="relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-4 hover:scale-[1.02] transition-all duration-400 ease-in-out group min-h-[280px] border border-[#e0f2fe]">
                        <div className="absolute top-6 left-6 text-5xl text-atoll-800 group-hover:scale-110 group-hover:rotate-12 transition-all duration-400">
                            <FaMicrochip />
                        </div>
                        <div className="mt-16">
                            <h3 className="text-xl font-bold text-atoll-800 mb-3">
                                Technologie de Pointe
                            </h3>
                            <p className="text-gray-600 text-sm leading-snug">
                                &laquo; Dispositifs médicaux dernier cri pour une prise en charge optimale, combinant précision technologique et sécurité absolue &raquo;
                            </p>
                        </div>
                    </div>

                    {/* Carte 5 - Soutien */}
                    <div className="relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-4 hover:scale-[1.02] transition-all duration-400 ease-in-out group min-h-[280px] border border-[#e0f2fe]">
                        <div className="absolute top-6 left-6 text-5xl text-atoll-800 group-hover:scale-110 group-hover:rotate-12 transition-all duration-400">
                            <FaHandsHelping />
                        </div>
                        <div className="mt-16">
                            <h3 className="text-xl font-bold text-atoll-800 mb-3">
                                Accompagnement Bienveillant
                            </h3>
                            <p className="text-gray-600 text-sm leading-snug">
                                &laquo; Soutien psychologique et écoute active tout au long de votre parcours, avec transparence totale et disponibilité permanente &raquo;
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}