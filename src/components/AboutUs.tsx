export default function AboutUs() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-16 relative overflow-hidden">


            {/* Content */}
            <div className="relative z-10">
                <h2 className="text-2xl font-bold text-black mb-12 font-poppins">
                    Qui Sommes-Nous ?
                </h2>

                <div className="grid md:grid-cols-2 gap-12 items-center text-gray-800 font-poppins">
                    <div className="text-left">
                        <h2 className="text-4xl font-bold text-black mb-6">
                            La Clinique DR N.B <br />
                            <span className="text-atoll-800">Une référence en excellence médicale</span>
                        </h2>
                    </div>

                    <div className="space-y-4">
                        <p className="text-md leading-relaxed">
                            La Clinique DR N.B se positionne en tant que centre de référence, bénéficiant d'une expertise médicale
                            de renommée mondiale forgée au fil des années. Notre savoir-faire, conforme aux normes internationales,
                            s'associe à des équipements et matériels de pointe en technologie médicale, assurant ainsi des résultats optimaux.
                        </p>
                        <p className="text-md leading-relaxed">
                            Notre mission est de fournir des soins médicaux de qualité exceptionnelle, en mettant l'accent sur
                            l'empathie et le respect du patient. Nous nous engageons à offrir une expérience unique et personnalisée,
                            alliant innovation et excellence médicale, dans un cadre chaleureux et humain.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}