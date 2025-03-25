import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const API_ENDPOINT = 'http://localhost:8080/api/ClinicRDV';

const services = [
    {
        title: 'Procréation Médicalement Assistée (PMA)',
        tag: 'PMA',
    },
    {
        title: 'Services en Ligne',
        tag: 'DIGITAL',
    },
    {
        title: 'Consultations',
        tag: 'CONSULTATION',
    },
    {
        title: 'Laparoscopie/Hystéroscopie',
        tag: 'CHIRURGIE',
    },
    {
        title: 'Oncologie Gynécologique',
        tag: 'ONCOLOGIE',
    },
    {
        title: 'Médecine Esthétique',
        tag: 'ESTHÉTIQUE',
    },
    {
        title: 'Thérapie de la Douleur',
        tag: 'DOULEUR',
    },
    {
        title: 'Nutrition & Psychosomatique',
        tag: 'NUTRITION',
    },
    {
        title: 'Ressources et Informations',
        tag: 'RESSOURCES',
    },
];

// Define the type for the form data
interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    service: string;
    date: string;
    time: string;
    message: string;
}

export default function AppointmentForm() {
    const { t } = useTranslation();
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        time: '',
        message: '',
    });

    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        setError(null);

        try {
            const response = await fetch(API_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error('API Error:', errorData);
                setError(
                    errorData.title ||
                    'An error occurred while submitting the form. Check the console.',
                );
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            console.log('Form submitted successfully!');
            setSubmitted(true);

            setTimeout(() => {
                setSubmitted(false);
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    service: '',
                    date: '',
                    time: '',
                    message: '',
                });
            }, 3000);
        } catch (err: any) {
            console.error('Submission error:', err);
            setError(
                'Failed to submit the form. Please check your internet connection and try again.',
            );
        } finally {
            setSubmitting(false);
        }
    };

    const today = new Date().toISOString().split('T')[0];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 },
        },
    };

    return (
        <div className="relative py-16 bg-gradient-to-b from-white to-gray-100 min-h-screen">
            <div className="absolute inset-0 bg-[url('/src/assets/01.jpg')] bg-cover bg-center opacity-10"></div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-poppins">
                        {t('Prendre Rendez-vous')}
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto font-poppins">
                        {t(
                            'Prenez rendez-vous facilement avec nos spécialistes pour bénéficier de nos services personnalisés',
                        )}
                    </p>
                </motion.div>

                {submitted ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white rounded-xl shadow-lg p-8 text-center"
                    >
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8 text-green-500"
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
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                            {t('Rendez-vous Confirmé')}
                        </h3>
                        <p className="text-gray-600">
                            {t(
                                'Merci pour votre demande de rendez-vous. Nous vous contacterons prochainement pour confirmer.',
                            )}
                        </p>
                    </motion.div>
                ) : (
                    <motion.form
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        onSubmit={handleSubmit}
                        className="bg-white rounded-xl shadow-lg p-6 md:p-8"
                    >
                        {error && (
                            <div className="text-red-500 mb-4 p-2 bg-red-100 rounded">{error}</div>
                        )}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <motion.div variants={itemVariants}>
                                <label
                                    htmlFor="firstName"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                    {t('Prénom *')}
                                </label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-atoll-500 focus:border-atoll-500 transition-colors"
                                />
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <label
                                    htmlFor="lastName"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                    {t('Nom *')}
                                </label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-atoll-500 focus:border-atoll-500 transition-colors"
                                />
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                    {t('Email *')}
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-atoll-500 focus:border-atoll-500 transition-colors"
                                />
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                    {t('Téléphone *')}
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-atoll-500 focus:border-atoll-500 transition-colors"
                                />
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <label
                                    htmlFor="service"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                    {t('Service *')}
                                </label>
                                <div className="relative">
                                    <select
                                        id="service"
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-atoll-500 focus:border-atoll-500 transition-colors appearance-none"
                                    >
                                        <option value="">{t('Sélectionnez un service')}</option>
                                        {services.map((service, index) => (
                                            <option key={index} value={service.tag}>
                                                {service.title}
                                            </option>
                                        ))}
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg
                                            className="fill-current h-4 w-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                        </svg>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                                    {t('Date *')}
                                </label>
                                <input
                                    type="date"
                                    id="date"
                                    name="date"
                                    min={today}
                                    value={formData.date}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-atoll-500 focus:border-atoll-500 transition-colors"
                                />
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                                    {t('Heure *')}
                                </label>
                                <select
                                    id="time"
                                    name="time"
                                    value={formData.time}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-atoll-500 focus:border-atoll-500 transition-colors appearance-none"
                                >
                                    <option value="">{t('Sélectionnez une heure')}</option>
                                    <option value="09:00">09:00</option>
                                    <option value="09:30">09:30</option>
                                    <option value="10:00">10:00</option>
                                    <option value="10:30">10:30</option>
                                    <option value="11:00">11:00</option>
                                    <option value="11:30">11:30</option>
                                    <option value="14:00">14:00</option>
                                    <option value="14:30">14:30</option>
                                    <option value="15:00">15:00</option>
                                    <option value="15:30">15:30</option>
                                    <option value="16:00">16:00</option>
                                    <option value="16:30">16:30</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg
                                        className="fill-current h-4 w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
                                </div>
                            </motion.div>

                            <motion.div variants={itemVariants} className="md:col-span-2">
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                    {t('Message (Facultatif)')}
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-atoll-500 focus:border-atoll-500 transition-colors"
                                    placeholder={t('Informations complémentaires sur votre consultation...')}
                                ></textarea>
                            </motion.div>
                        </div>

                        <motion.div variants={itemVariants} className="mt-8 flex justify-center">
                            <button
                                type="submit"
                                disabled={submitting}
                                className={`px-8 py-3 rounded-lg text-white font-medium transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-atoll-600 to-atoll-800 hover:from-atoll-700 hover:to-atoll-900 ${
                                    submitting ? 'opacity-75 cursor-not-allowed' : ''
                                }`}
                            >
                                {submitting ? (
                                    <span className="flex items-center">
                    <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                      <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                      ></circle>
                      <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                                        {t('Traitement en cours...')}
                  </span>
                                ) : (
                                    t('Prendre Rendez-vous')
                                )}
                            </button>
                        </motion.div>
                    </motion.form>
                )}
            </div>
        </div>
    );
}
