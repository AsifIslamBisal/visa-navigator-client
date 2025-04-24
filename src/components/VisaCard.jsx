import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const VisaCard = ({ visa }) => {
    const {_id,country, visa_type,processing_time} = visa
    const navigate = useNavigate();

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!'
        })
        .then((result) => {
            if (result.isConfirmed) {
                fetch(`https://visa-navigator-server-beta-seven.vercel.app/visa/${visa._id}`, {
                    method: 'DELETE',
                })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        Swal.fire(
                            'Deleted!',
                            'Visa has been deleted.',
                            'success'
                        );
                        
                    }
                });
            }
        });
    };

    const handleUpdate = () => {
        navigate(`updatevisa/${_id}`);
    };

    return (
        <div className="bg-white shadow-md rounded-xl p-4 border border-purple-200">
            <img src={visa.image} alt={visa.country} className="w-full h-40 object-cover rounded-lg mb-3" />

            <h2 className="text-xl font-semibold text-purple-700">{visa.country}</h2>
            <p className="text-sm text-gray-600 mb-1"><strong>Visa Type:</strong> {visa.visa_type}</p>
            <p className="text-sm text-gray-600 mb-1"><strong>Processing Time:</strong> {visa.processing_time}</p>
            <p className="text-sm text-gray-600 mb-1"><strong>Age Restriction:</strong> {visa.age_restriction}+</p>
            <p className="text-sm text-gray-600 mb-1"><strong>Fee:</strong> ${visa.fee}</p>
            <p className="text-sm text-gray-600 mb-1"><strong>Validity:</strong> {visa.validity}</p>
            <p className="text-sm text-gray-600 mb-1"><strong>Application Method:</strong> {visa.application_method}</p>

            <div className="mt-2">
                <p className="text-sm font-medium text-gray-700">Required Documents:</p>
                <ul className="list-disc list-inside text-sm text-gray-600">
                    {visa.required_documents?.map((doc, i) => (
                        <li key={i}>{doc}</li>
                    ))}
                </ul>
            </div>

            <p className="text-sm text-gray-700 mt-2"><strong>Description:</strong> {visa.description}</p>

            <div className="flex gap-4 mt-4">
            <Link to={`updatevisa/${_id}`}> <button onClick={handleUpdate}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded"> Update</button></Link>
               <button onClick={ () => handleDelete (_id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded"> Delete</button>
            </div>
        </div>
    );
};

export default VisaCard;
