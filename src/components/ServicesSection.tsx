export default function ServicesSection() {
    const services = [
        {
            title: "Procréation Médicalement Assistée (PMA)",
            description: "Solutions complètes pour votre projet parental",
            image: "/src/assets/10.jpg",
            tag: "PMA",
            subCategories: [
                "FIV",
                "ICSI/IMSI",
                "Insémination Intra Utérine (IUI)",
                "Vitrification des Embryons",
                "Préservation de Fertilité",
                "Congélation des Spermatozoïdes",
                "Biopsie Testiculaire et Micro-TESE",
                "Stem Cell et Thérapie Cellulaire",
                "PRP",
                "Cure de Varicocèle",
                "Diagnostic Pré-Implantatoire (DPI)"
            ]
        },
        {
            title: "Services en Ligne",
            description: "Gestion numérique de votre parcours médical",
            image: "/src/assets/04.jpg",
            tag: "DIGITAL",
            subCategories: [
                "Traitement à Distance",
                "Dossier Médical Électronique",
                "Consultations en Visioconférence",
                "Résultats d'Analyses en Temps Réel",
                "Connexion Portail Patients",
                "Rendez-Vous en Ligne",
                "FAQ en Ligne",
                "Consignes et Recommandations"
            ]
        },
        {
            title: "Consultations",
            description: "Accompagnement personnalisé pour votre santé",
            image: "/src/assets/05.jpg",
            tag: "CONSULTATION",
            subCategories: [
                "Consultation en Gynécologie et Obstétrique",
                "Consultation PMA",
                "Consultation pour Thérapie de la Douleur",
                "Consultation en Médecine Esthétique",
                "Consultation en Nutrition et Psychosomatique"
            ]
        },
        {
            title: "Laparoscopie/Hystéroscopie",
            description: "Techniques mini-invasives pour une récupération rapide",
            image: "/src/assets/06.jpg",
            tag: "CHIRURGIE",
            subCategories: [
                "Laparoscopie Diagnostique",
                "Laparoscopie Opératoire",
                "Hystéroscopie Diagnostique",
                "Hystéroscopie Opératoire",
                "Suivi Post-Intervention"
            ]
        },
        {
            title: "Oncologie Gynécologique",
            description: "Prise en charge globale des pathologies cancéreuses",
            image: "/src/assets/12.jpg",
            tag: "ONCOLOGIE",
            subCategories: [
                "Dépistage Précoce",
                "Thérapies Ciblées",
                "Suivi Post-Traitement",
                "Support Psychologique",
                "Traitements Innovants"
            ]
        },
        {
            title: "Médecine Esthétique",
            description: "Solutions innovantes pour votre bien-être",
            image: "/src/assets/07.jpg",
            tag: "ESTHÉTIQUE",
            subCategories: [
                "Soins Régénérants",
                "Correction des Imperfections",
                "Thérapies Anti-Âge",
                "Médecine Préventive",
                "Traitements Non-Invasifs"
            ]
        },
        {
            title: "Thérapie de la Douleur",
            description: "Approches multidisciplinaires personnalisées",
            image: "/src/assets/08.jpg",
            tag: "DOULEUR",
            subCategories: [
                "Traitements Non-Invasifs",
                "Gestion du Stress",
                "Rééducation Fonctionnelle",
                "Suivi Chronique",
                "Thérapies Alternatives"
            ]
        },
        {
            title: "Nutrition & Psychosomatique",
            description: "Approche holistique de votre santé",
            image: "/src/assets/09.jpg",
            tag: "NUTRITION",
            subCategories: [
                "Bilan Métabolique",
                "Programmes Personnalisés",
                "Thérapie Comportementale",
                "Ateliers Éducatifs",
                "Suivi Psychologique"
            ]
        },
        {
            title: "Ressources et Informations",
            description: "Accès à des ressources médicales et éducatives",
            image: "/src/assets/11.jpg",
            tag: "RESSOURCES",
            subCategories: [
                "Actualités Médicales",
                "Événements et Ateliers",
                "Guides Pratiques",
                "Témoignages",
                "Contact et Renseignements"
            ]
        }
    ];

    return (
        <section id="services" className="font-poppins py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Nos Domaines d'Expertise
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Une gamme complète de services médicaux intégrant les dernières avancées technologiques
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group"
                        >
                            {/* Image Container */}
                            <div className="h-48 relative overflow-hidden">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
                                <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium text-white
                                    ${service.tag === 'PMA' ? 'bg-gradient-to-r from-pink-500 to-purple-600' :
                                    service.tag === 'DIGITAL' ? 'bg-gradient-to-r from-blue-500 to-cyan-400' :
                                        service.tag === 'CONSULTATION' ? 'bg-gradient-to-r from-indigo-500 to-blue-400' :
                                            service.tag === 'CHIRURGIE' ? 'bg-gradient-to-r from-teal-500 to-green-400' :
                                                service.tag === 'ONCOLOGIE' ? 'bg-gradient-to-r from-orange-500 to-red-500' :
                                                    service.tag === 'ESTHÉTIQUE' ? 'bg-gradient-to-r from-purple-500 to-violet-400' :
                                                        service.tag === 'DOULEUR' ? 'bg-gradient-to-r from-green-600 to-emerald-900' :
                                                            service.tag === 'NUTRITION' ? 'bg-gradient-to-r from-yellow-500 to-orange-400' :
                                                                'bg-gradient-to-r from-gray-600 to-gray-800'}`}>
                                    {service.tag}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 text-sm mb-4">
                                    {service.description}
                                </p>

                                {/* Subcategories */}
                                <div className="border-t pt-4">
                                    <div className="flex flex-wrap gap-2">
                                        {service.subCategories.map((sub, idx) => (
                                            <span
                                                key={idx}
                                                className="text-xs font-medium px-3 py-1 bg-gray-100 rounded-full text-gray-600"
                                            >
                                                {sub}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}