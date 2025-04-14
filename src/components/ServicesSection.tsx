import { Link } from 'react-router-dom';
import pmaImage from '../assets/10.jpg';
import digitalImage from '../assets/04.jpg';
import chirurgieImage from '../assets/06.jpg';
import oncologieImage from '../assets/12.jpg';
import douleurImage from '../assets/08.jpg';
import nutritionImage from '../assets/09.jpg';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface ServicesSectionProps {
    id?: string;
}

export default function ServicesSection({ id = 'services' }: ServicesSectionProps) {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);
    const { t } = useTranslation();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 },
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const services = [
        {
            title: t('Procréation Médicalement Assistée (PMA)'),
            description: t('Solutions complètes pour votre projet parental'),
            image: pmaImage,
            tag: 'PMA',
        },
        {
            title: t('Services en Ligne'),
            description: t('Gestion numérique de votre parcours médical'),
            image: digitalImage,
            tag: 'DIGITAL',
        },
        {
            title: t('Consultations'),
            description: t('Accompagnement personnalisé pour votre santé'),
            image: chirurgieImage,
            tag: 'CONSULTATION',
        },
        {
            title: t('Laparoscopie/Hystéroscopie'),
            description: t('Techniques mini-invasives pour une récupération rapide'),
            image: chirurgieImage,
            tag: 'CHIRURGIE',
        },
        {
            title: t('Oncologie Gynécologique'),
            description: t('Prise en charge globale des pathologies cancéreuses'),
            image: oncologieImage,
            tag: 'ONCOLOGIE',
        },
        {
            title: t('Médecine Esthétique'),
            description: t('Solutions innovantes pour votre bien-être'),
            image: pmaImage,
            tag: 'ESTHÉTIQUE',
        },
        {
            title: t('Thérapie de la Douleur'),
            description: t('Approches multidisciplinaires personnalisées'),
            image: douleurImage,
            tag: 'DOULEUR',
        },
        {
            title: t('Nutrition & Psychosomatique'),
            description: t('Approche holistique de votre santé'),
            image: nutritionImage,
            tag: 'NUTRITION',
        },
        {
            title: t('Ressources et Informations'),
            description: t('Accès à des ressources médicales et éducatives'),
            image: chirurgieImage,
            tag: 'RESSOURCES',
        },
    ];

    return (
        <section id={id} ref={sectionRef} className="font-poppins py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    className={`text-center mb-16 transition-all duration-700 transform ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                >
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('Nos Domaines d\'Expertise')}</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        {t(
                            'Une gamme complète de services médicaux intégrant les dernières avancées technologiques',
                        )}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <Link
                            key={index}
                            to={`/services/${service.tag}`}
                            className={`relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden group transform ${
                                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                            }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            {/* Image Container */}
                            <div className="h-48 relative overflow-hidden">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
                                <span
                                    className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium text-white
                                    ${
                                        service.tag === 'PMA'
                                            ? 'bg-gradient-to-r from-pink-500 to-purple-600'
                                            : service.tag === 'DIGITAL'
                                                ? 'bg-gradient-to-r from-blue-500 to-cyan-400'
                                                : service.tag === 'CONSULTATION'
                                                    ? 'bg-gradient-to-r from-indigo-500 to-blue-400'
                                                    : service.tag === 'CHIRURGIE'
                                                        ? 'bg-gradient-to-r from-teal-500 to-green-400'
                                                        : service.tag === 'ONCOLOGIE'
                                                            ? 'bg-gradient-to-r from-orange-500 to-red-500'
                                                            : service.tag === 'ESTHÉTIQUE'
                                                                ? 'bg-gradient-to-r from-purple-500 to-violet-400'
                                                                : service.tag === 'DOULEUR'
                                                                    ? 'bg-gradient-to-r from-green-600 to-emerald-900'
                                                                    : service.tag === 'NUTRITION'
                                                                        ? 'bg-gradient-to-r from-yellow-500 to-orange-400'
                                                                        : 'bg-gradient-to-r from-gray-600 to-gray-800'
                                    }`}
                                >
                                    {service.tag}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                                <p className="text-gray-600 text-sm">{service.description}</p>
                            </div>

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}