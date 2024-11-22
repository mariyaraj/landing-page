'use client';

import React, { useState, useEffect } from 'react';
import { Company, CompanySize, CompanyStatus } from '@/lib/types/shared';
import { createCompany } from '@/lib/api';

interface ApplicationContentProps {
    onClose: () => void;
    type: 'provider' | 'pilot';
}

const mapCompanySize: { [key in CompanySize]: string } = {
    [CompanySize.MICRO]: '< 10 Mitarbeiter',
    [CompanySize.SMALL]: '10-49 Mitarbeiter',
    [CompanySize.MEDIUM]: '50-249 Mitarbeiter',
    [CompanySize.LARGE]: '≥ 250 Mitarbeiter',
    [CompanySize.ENTERPRISE]: '≥ 1000 Mitarbeiter',
};

export default function ApplicationContent({ onClose, type }: ApplicationContentProps) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
        companySize: CompanySize.MICRO,
        role: '',
        website: '',
        aiExperience: '',
        solutions: '',
        useCase: '',
        technicalDetails: '',
        expectedBenefits: '',
        attributes: [] as { name: string; value: string }[], // Hinzugefügt
    });

    const [formStatus, setFormStatus] = useState<string | null>(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [privacyAccepted, setPrivacyAccepted] = useState(false);

    useEffect(() => {
        resetForm();
    }, []);

    const resetForm = () => {
        setFormData({
            name: '',
            email: '',
            company: '',
            phone: '',
            message: '',
            companySize: CompanySize.MICRO,
            role: '',
            website: '',
            aiExperience: '',
            solutions: '',
            useCase: '',
            technicalDetails: '',
            expectedBenefits: '',
            attributes: [], // Hinzugefügt
        });
        setFormStatus(null);
        setIsSubmitted(false);
        setError(null);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
    
        try {
            // Attribute aus Formulardaten übernehmen
            const attributes = formData.attributes;
    
            // Sicherstellen, dass companySize definiert ist
            if (!formData.companySize) {
                throw new Error('Company size is required');
            }
    
            const companyData: Omit<Required<Company>, 'id' | 'createdAt' | 'updatedAt' | 'version'> = {
                name: formData.company,
                email: formData.email,
                website: formData.website || '', // Standardwert verwenden
                phone: formData.phone || '', // Standardwert verwenden
                companySize: formData.companySize as CompanySize,
                status: CompanyStatus.DRAFT,
                attributes,
            };
            console.log('Attempting to fetch from:', process.env.NEXT_PUBLIC_API_URL);
            // API-Aufruf
            await createCompany(companyData);
    
            setIsSubmitted(true);
            setFormStatus('Bewerbung erfolgreich gesendet!');
        } catch (error) {
            console.error('Error:', error);
            setError('Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.');
            setFormStatus(null);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="h-full">
            <div className="space-y-4">
                <h2 className="text-xl font-bold text-[#003479] mb-6">
                    {type === 'provider'
                        ? 'Bewerbung als KI-Anbieter'
                        : 'Bewerbung als Pilotunternehmen'}
                </h2>

                {error && (
                    <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg">
                        {error}
                    </div>
                )}

                {formStatus && <p className="mb-4 text-[#003479] font-semibold">{formStatus}</p>}

                {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Basis-Informationen */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                                    Name *
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border rounded text-black"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="company" className="block text-gray-700 text-sm font-bold mb-2">
                                    Unternehmen *
                                </label>
                                <input
                                    id="company"
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border rounded text-black"
                                    required
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                                    E-Mail *
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border rounded text-black"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
                                    Telefon
                                </label>
                                <input
                                    id="phone"
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border rounded text-black"
                                />
                            </div>
                        </div>

                        {/* Unternehmensinformationen */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="role" className="block text-gray-700 text-sm font-bold mb-2">
                                    Ihre Position *
                                </label>
                                <select
                                    id="role"
                                    name="role"
                                    value={formData.role}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border rounded text-black"
                                    required
                                >
                                    <option value="">Bitte wählen</option>
                                    <option value="ceo">Geschäftsführung</option>
                                    <option value="technical">Technische Leitung</option>
                                    <option value="projectManager">Projektleitung</option>
                                    <option value="it">IT-Leitung</option>
                                    <option value="development">Entwicklungsleitung</option>
                                    <option value="other">Andere</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="companySize" className="block text-gray-700 text-sm font-bold mb-2">
                                    Unternehmensgröße *
                                </label>
                                <select
                                    id="companySize"
                                    name="companySize"
                                    value={formData.companySize}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border rounded text-black"
                                    required
                                >
                                    <option value="">Bitte wählen</option>
                                    {Object.values(CompanySize).map((size) => (
                                        <option key={size} value={size}>
                                            {mapCompanySize[size]}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="website" className="block text-gray-700 text-sm font-bold mb-2">
                                Website
                            </label>
                            <input
                                id="website"
                                type="url"
                                name="website"
                                value={formData.website}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border rounded text-black"
                                placeholder="http://"
                            />
                        </div>

                        {/* Spezifische Felder basierend auf dem Typ */}
                        {type === 'provider' ? (
                            <>
                                <div>
                                    <label htmlFor="solutions" className="block text-gray-700 text-sm font-bold mb-2">
                                        Beschreiben Sie Ihre KI-Lösungen *
                                    </label>
                                    <textarea
                                        id="solutions"
                                        name="solutions"
                                        value={formData.solutions}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border rounded text-black"
                                        rows={4}
                                        required
                                        placeholder="Welche KI-Lösungen bieten Sie an? Was sind die Hauptmerkmale und Vorteile?"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="technicalDetails" className="block text-gray-700 text-sm font-bold mb-2">
                                        Technische Details
                                    </label>
                                    <textarea
                                        id="technicalDetails"
                                        name="technicalDetails"
                                        value={formData.technicalDetails}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border rounded text-black"
                                        rows={3}
                                        placeholder="Technische Anforderungen, Implementierungsdetails, etc."
                                    />
                                </div>
                            </>
                        ) : (
                            <>
                                <div>
                                    <label htmlFor="useCase" className="block text-gray-700 text-sm font-bold mb-2">
                                        Beschreiben Sie Ihren Use-Case *
                                    </label>
                                    <textarea
                                        id="useCase"
                                        name="useCase"
                                        value={formData.useCase}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border rounded text-black"
                                        rows={4}
                                        required
                                        placeholder="Welche Prozesse möchten Sie mit KI optimieren? Was sind Ihre Ziele?"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="aiExperience" className="block text-gray-700 text-sm font-bold mb-2">
                                        Bisherige KI-Erfahrung
                                    </label>
                                    <textarea
                                        id="aiExperience"
                                        name="aiExperience"
                                        value={formData.aiExperience}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border rounded text-black"
                                        rows={3}
                                        placeholder="Haben Sie bereits Erfahrungen mit KI-Lösungen? Wenn ja, welche?"
                                    />
                                </div>
                            </>
                        )}

                        <div>
                            <label htmlFor="expectedBenefits" className="block text-gray-700 text-sm font-bold mb-2">
                                Erwarteter Nutzen
                            </label>
                            <textarea
                                id="expectedBenefits"
                                name="expectedBenefits"
                                value={formData.expectedBenefits}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border rounded text-black"
                                rows={3}
                                placeholder="Welche Vorteile erwarten Sie von der Zusammenarbeit?"
                            />
                        </div>

                        {/* Kontrollkästchen für die Datenschutzerklärung */}
                        <div className="mt-4">
                            <input
                                type="checkbox"
                                id="privacyConsent"
                                checked={privacyAccepted}
                                onChange={(e) => setPrivacyAccepted(e.target.checked)}
                                className="mr-2"
                            />
                            <label htmlFor="privacyConsent" className="text-gray-700 text-sm">
                                Ich habe die{" "}
                                <a
                                    href="/datenschutz"
                                    target="_blank"
                                    className="text-[#00c2cb] underline hover:text-[#007d87]"
                                >
                                    Datenschutzerklärung
                                </a>{" "}
                                gelesen und stimme der Verarbeitung meiner Daten zu.
                            </label>
                        </div>

                        <div className="flex justify-end gap-4 mt-6">
                            <button
                                type="button"
                                onClick={() => {
                                    resetForm();
                                    onClose();
                                }}
                                className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition-colors"
                            >
                                Abbrechen
                            </button>
                            <button
                                type="submit"
                                disabled={!privacyAccepted}
                                className={`px-4 py-2 rounded transition-all
    ${privacyAccepted
                                        ? 'bg-[#00c2cb] text-white hover:opacity-90 cursor-pointer'
                                        : 'bg-gray-400 text-gray-300 cursor-not-allowed'
                                    }`}
                            >
                                Bewerbung absenden
                            </button>
                        </div>
                    </form>
                ) : (
                    <div className="text-center py-8">
                        <p className="text-[#003479] font-semibold mb-4">
                            Vielen Dank für Ihre Bewerbung! Wir werden uns in Kürze bei Ihnen melden.
                        </p>
                        <button
                            onClick={onClose}
                            className="bg-[#00c2cb] text-white px-4 py-2 rounded hover:opacity-90 transition-opacity"
                        >
                            Schließen
                        </button>
                    </div>
                )}

                {loading && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white p-4 rounded-lg">
                            <p className="text-[#003479]">Bewerbung wird gesendet...</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );

}