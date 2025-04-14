import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

// Import service images similar to how they're imported in the ServicesSection component
import pmaImage from '../assets/10.jpg';
import digitalImage from '../assets/04.jpg';
import chirurgieImage from '../assets/06.jpg';
import oncologieImage from '../assets/12.jpg';
import douleurImage from '../assets/08.jpg';
import nutritionImage from '../assets/09.jpg';
import consultationImage from '../assets/06.jpg'; // Using same as chirurgie temporarily
import esthetiqueImage from '../assets/10.jpg'; // Using same as pma temporarily
import ressourcesImage from '../assets/06.jpg'; // Using same as chirurgie temporarily

// Map service tags to their respective imported images
const serviceImages = {
    'PMA': pmaImage,
    'DIGITAL': digitalImage,
    'CONSULTATION': consultationImage,
    'CHIRURGIE': chirurgieImage,
    'ONCOLOGIE': oncologieImage,
    'ESTHÉTIQUE': esthetiqueImage,
    'DOULEUR': douleurImage,
    'NUTRITION': nutritionImage,
    'RESSOURCES': ressourcesImage
};

// Service data with detailed information
const serviceDetails = {
    'PMA': {
        title: 'Procréation Médicalement Assistée (PMA)',
        description: 'À la Clinique DR N.B, la consultation en Procréation Médicalement Assistée (PMA) est conçue pour offrir à nos patientes un suivi personnalisé et de qualité exceptionnelle.\n' +
            'Au cours de cette consultation, nos experts en fertilité examinent attentivement chaque cas, établissant un dialogue ouvert et empathique avec les patients pour comprendre leurs besoins spécifiques. Notre approche se distingue par son engagement envers l\'excellence, assurant un environnement de soins où chaque détail est pris en compte.\n' +
            '\n' +
            'Les avantages de choisir notre clinique pour votre parcours de PMA sont nombreux.\n' +
            'Nous mettons l\'accent sur la transparence, en expliquant clairement les différentes options disponibles, et nous nous engageons à fournir des soins individualisés basés sur les dernières avancées médicales. Chez nous, chaque acte de PMA est réalisé par une équipe expérimentée, offrant ainsi une prise en charge totale et un accompagnement dédié tout au long du processus.\n' +
            '\n' +
            'Notre clinique s\'efforce de créer un environnement chaleureux et sécurisé, où les patients se sentent soutenus à chaque étape de leur parcours vers la parentalité.\n' +
            'Nous comprenons l\'importance de chaque moment dans ce voyage, et c\'est pourquoi nous nous engageons à fournir des services de la plus haute qualité, plaçant le bien-être de nos patients au cœur de notre mission.',
        highlights: [
            'Consultations personnalisées',
            'Fécondation in vitro (FIV)',
            'Insémination artificielle',
            'Préservation de la fertilité',
            'Don de gamètes',
            'Accompagnement psychologique'
        ]
    },
    'DIGITAL': {
        title: 'Services en Ligne',
        description: 'Profitez de nos services de santé numérique pour un suivi médical moderne et adapté à votre quotidien. Notre plateforme sécurisée vous permet d\'accéder à vos soins à distance, de communiquer directement avec votre équipe médicale et de gérer facilement vos rendez-vous. Grâce à des technologies de pointe, nous garantissons la confidentialité de vos données tout en vous offrant une expérience patient simplifiée et un accès permanent à votre dossier médical.',
        highlights: [
            'Téléconsultations sécurisées',
            'Prise de rendez-vous en ligne',
            'Accès à votre dossier médical',
            'Prescriptions électroniques',
            'Rappels automatiques',
            'Messagerie confidentielle'
        ]
    },
    'CONSULTATION': {
        title: 'Consultations',
        description: 'Nos consultations gynécologiques offrent un suivi complet et attentif pour tous les aspects de votre santé féminine. Dans un cadre rassurant et respectueux, nos spécialistes prennent le temps d\'écouter vos préoccupations et de réaliser un examen approfondi. Que ce soit pour un bilan annuel, un suivi de grossesse, ou une problématique spécifique, nous vous accompagnons avec expertise et bienveillance à chaque étape de votre vie.',
        highlights: [
            'Examens gynécologiques complets',
            'Dépistage des cancers féminins',
            'Suivi de grossesse personnalisé',
            'Conseils contraceptifs adaptés',
            'Traitement des troubles hormonaux',
            'Accompagnement pendant la ménopause'
        ]
    },
    'CHIRURGIE': {
        title: 'Laparoscopie/Hystéroscopie',
        description: 'La Laparoscopie est une technique chirurgicale minimale invasive qui permet d\'explorer et de traiter diverses causes d\'infertilité.\n' +
            'À travers de petites incisions, notre équipe d\'experts utilise une caméra pour visualiser les organes pelviens et abdominaux, évitant ainsi l\'ouverture de la cavité abdominale. Cette approche permet d\'évaluer la perméabilité des trompes, traiter les pathologies ovariennes telles que le SOPK, et aborder les problèmes pelviens tels que l\'endométriose.\n' +
            '\n' +
            'L\'Hystéroscopie, quant à elle, offre une vision directe de la cavité utérine sans nécessiter d\'incisions majeures.\n' +
            'C\'est une procédure rapide et peu invasive réalisée en consultation. Elle permet de détecter des anomalies endo-utérines, telles que des polypes, fibromes, ou des malformations utérines, et peut être suivie d\'une intervention opératoire pour traiter ces anomalies.',
        highlights: [
            'Interventions peu invasives',
            'Récupération rapide',
            'Diagnostic et traitement en une séance',
            'Traitement de l\'endométriose',
            'Prise en charge des fibromes et kystes',
            'Suivi post-opératoire personnalisé'
        ]
    },
    'ONCOLOGIE': {
        title: 'Oncologie Gynécologique',
        description: 'Notre service d\'oncologie gynécologique associe expertise médicale et approche humaine pour vous accompagner face au cancer. Notre équipe multidisciplinaire coordonne chaque aspect de votre prise en charge, du diagnostic initial aux traitements les plus avancés. Nous nous engageons à vous offrir un suivi personnalisé et un soutien constant tout au long de votre parcours de soins, en combinant traitements médicaux de pointe et accompagnement psychologique pour une approche globale de votre santé.',
        highlights: [
            'Équipe pluridisciplinaire dédiée',
            'Diagnostic précoce et précis',
            'Chirurgie oncologique spécialisée',
            'Coordination des traitements',
            'Soutien psychologique continu',
            'Soins de support intégrés'
        ]
    },
    'ESTHÉTIQUE': {
        title: 'Médecine Esthétique',
        description: 'La consultation en Médecine Esthétique vise à effectuer une évaluation approfondie de votre situation.\n' +
            'En collaboration avec votre médecin, vous passerez en revue vos antécédents médico-chirurgicaux personnels et familiaux, ainsi que vos allergies et traitements actuels. Ensemble, vous établirez un plan de traitement en utilisant un questionnaire patient, adaptant ainsi les procédures en fonction de vos attentes et des résultats envisageables.\n' +
            '\n' +
            'Cette première rencontre médicale revêt une importance particulière.\n' +
            'Votre médecin vous fournira des informations détaillées sur le déroulement de l\'intervention que vous envisagez, ainsi que sur les éventuels effets secondaires et contre-indications. À la suite de cette consultation, vous recevrez une fiche d\'information, un formulaire de consentement éclairé, et un devis détaillé pour vous permettre de prendre des décisions éclairées concernant votre traitement esthétique.',
        highlights: [
            'Rajeunissement vaginal par laser',
            'Correction post-accouchement',
            'Traitement de l\'inconfort ménopausique',
            'Solutions pour l\'incontinence légère',
            'Procédures mini-invasives',
            'Résultats naturels et durables'
        ]
    },
    'DOULEUR': {
        title: 'Thérapie de la Douleur',
        description: 'La Consultation pour Thérapie de la Douleur vise à assister les individus souffrant de douleurs chroniques, quelle que soit leur origine, dès lors que la cause a été investiguée.\n' +
            'Elle concerne des douleurs persistantes depuis plus de 3 à 6 mois et pour lesquelles les traitements conventionnels montrent une efficacité limitée.\n' +
            '\n' +
            'Les douleurs chroniques traitées au sein de cette consultation sont associées à une diversité de pathologies.\n' +
            'Parmi les plus fréquemment observées, on compte les lombalgies/sciatalgies, les céphalées et migraines, les douleurs neurologiques ou rhumatologiques, la fibromyalgie, l\'algodystrophie, les douleurs abdomino-pelviennes, ainsi que les douleurs résiduelles consécutives à un cancer, entre autres.',
        highlights: [
            'Diagnostic précis et complet',
            'Approche multidisciplinaire',
            'Traitements médicamenteux optimisés',
            'Thérapies complémentaires',
            'Techniques de gestion du stress',
            'Suivi régulier et adaptatif'
        ]
    },
    'NUTRITION': {
        title: 'Nutrition & Psychosomatique',
        description: 'La consultation de Nutrition et Psychosomatique adopte une approche holistique qui considère à la fois les aspects physiologiques et psychologiques de la santé.\n' +
            'Elle vise à fournir des conseils et des interventions personnalisés pour améliorer le bien-être global d\'une personne en prenant en compte l\'interaction entre son alimentation, son état physique et ses aspects émotionnels.',
        highlights: [
            'Conseils nutritionnels personnalisés',
            'Gestion des troubles hormonaux',
            'Accompagnement pendant la grossesse',
            'Thérapies psychosomatiques',
            'Techniques de gestion du stress',
            'Programmes de bien-être global'
        ]
    },
    'RESSOURCES': {
        title: 'Ressources et Informations',
        description: 'Notre centre met à votre disposition une large gamme de ressources éducatives pour vous informer et vous autonomiser dans vos décisions de santé. Nous croyons que des patientes bien informées sont mieux préparées pour participer activement à leur parcours de soins. À travers notre bibliothèque numérique, nos webinaires et nos groupes de soutien, nous vous offrons un accès privilégié à des informations médicales fiables, vulgarisées et actualisées sur tous les aspects de la santé féminine.',
        highlights: [
            'Documentation médicale accessible',
            'Webinaires éducatifs réguliers',
            'Groupes de soutien thématiques',
            'Conseils pratiques quotidiens',
            'Actualités médicales vulgarisées',
            'Ressources pour les proches'
        ]
    }
};

export default function ServiceDetail() {
    const { serviceTag } = useParams();
    const { t } = useTranslation();

    // Find the service details based on the URL parameter
    const service = serviceDetails[serviceTag as keyof typeof serviceDetails];
    const serviceImage = serviceImages[serviceTag as keyof typeof serviceImages];

    if (!service) {
        return (
            <div className="py-20 text-center">
                <h2 className="text-2xl font-bold text-gray-800">{t('Service non trouvé')}</h2>
                <Link to="/#services" className="mt-4 inline-block text-atoll-600 hover:underline">
                    {t('Retour aux services')}
                </Link>
            </div>
        );
    }

    // Format description paragraphs for better display
    const formattedDescription = service.description.split('\n\n').map((paragraph, index) => (
        <p key={index} className="mb-6 text-gray-700 text-lg leading-relaxed">
            {paragraph}
        </p>
    ));

    return (
        <div className="bg-gradient-to-b from-white to-gray-50 py-24">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="mb-14 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-4xl font-bold text-gray-800 font-poppins"
                    >
                        {service.title}
                    </motion.h1>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                    <div className="h-64 lg:h-80 overflow-hidden">
                        <img
                            src={serviceImage}
                            alt={service.title}
                            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                        />
                    </div>

                    <div className="p-8 md:p-10">
                        <div className="max-w-3xl mx-auto">
                            <div className="prose max-w-none">
                                {formattedDescription}
                            </div>

                            <div className="bg-gray-50 rounded-lg p-6 my-10">
                                <h3 className="text-xl font-semibold text-gray-800 mb-6 font-poppins">
                                    {t('Points clés')}
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {service.highlights.map((highlight, index) => (
                                        <div key={index} className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                                            <svg
                                                className="h-5 w-5 text-atoll-600 mr-3 mt-0.5 flex-shrink-0"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                            <span className="text-gray-700">{highlight}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-wrap justify-center gap-5 mt-12">
                                <Link
                                    to="/rendez-vous"
                                    className="px-8 py-3 bg-gradient-to-r from-atoll-600 to-atoll-800 text-white font-medium rounded-lg hover:from-atoll-700 hover:to-atoll-900 transition-all duration-300 transform hover:scale-105 shadow-md"
                                >
                                    {t('Prendre Rendez-vous')}
                                </Link>
                                <Link
                                    to="/#contact"
                                    className="px-8 py-3 bg-white border border-atoll-600 text-atoll-600 font-medium rounded-lg hover:bg-atoll-50 transition-all duration-300 shadow-sm"
                                >
                                    {t('Nous Contacter')}
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-16 text-center"
                >
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6 font-poppins">
                        {t('Des questions?')}
                    </h2>
                    <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
                        {t('N\'hésitez pas à nous contacter pour plus d\'informations sur nos services ou pour prendre rendez-vous avec l\'un de nos spécialistes.')}
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            to="/#services"
                            className="px-6 py-3 bg-white border border-atoll-600 text-atoll-600 font-medium rounded-lg hover:bg-atoll-50 transition-all duration-300"
                        >
                            {t('Explorer d\'autres services')}
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}