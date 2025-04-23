import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const VisaDetails = ({ visa }) => {
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    const handleApply = () => {
        setShowModal(false);
        navigate('/myvisaapplication');
    };

    return (
        <div className="bg-white shadow-md rounded-xl p-4 border border-purple-200">
            <img src={visa.image} alt={visa.country} className="w-full h-40 object-cover rounded-lg mb-3" />
            <h2 className="text-xl font-semibold text-purple-700">{visa.country}</h2>
            <p className="text-sm text-gray-600 mb-1"><strong>Visa Type:</strong> {visa.visa_type}</p>
            <p className="text-sm text-gray-600 mb-1"><strong>Processing Time:</strong> {visa.processing_time}</p>

            <div className="mt-4">
                <button
                    onClick={() => setShowModal(true)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded"
                >
                    See Details
                </button>
            </div>
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-xl w-[90%] max-w-lg relative">
                        <button onClick={() => setShowModal(false)} className="absolute top-2 right-2 text-xl">✖️</button>
                        <h2 className="text-xl font-semibold mb-2 text-purple-600">{visa.country} Visa Details</h2>
                        <p><strong>Visa Type:</strong> {visa.visa_type}</p>
                        <p><strong>Processing Time:</strong> {visa.processing_time}</p>
                        <p><strong>Age Restriction:</strong> {visa.age_restriction}+</p>
                        <p><strong>Fee:</strong> ${visa.fee}</p>
                        <p><strong>Validity:</strong> {visa.validity}</p>
                        <p><strong>Application Method:</strong> {visa.application_method}</p>
                        <p className="mt-2"><strong>Required Documents:</strong></p>
                        <ul className="list-disc list-inside mb-2 text-gray-700">
                            {visa.required_documents?.map((doc, index) => (
                                <li key={index}>{doc}</li>
                            ))}
                        </ul>
                        <p><strong>Description:</strong> {visa.description}</p>

                        <div className="mt-4 text-end">
                            <button
                                onClick={handleApply}
                                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                            >
                                Apply
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default VisaDetails;
