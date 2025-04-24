import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateVisa = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [visa, setVisa] = useState(null);

    useEffect(() => {
        fetch(`https://visa-navigator-server-beta-seven.vercel.app/visa/${id}`)
            .then(res => res.json())
            .then(data => {
                setVisa(data);
            });
    }, [id]);

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;

        const updatedVisa = {
            image: form.image.value,
            country: form.country.value,
            visa_type: form.visa_type.value,
            processing_time: form.processing_time.value,
            age_restriction: parseInt(form.age_restriction.value),
            fee: parseFloat(form.fee.value),
            validity: form.validity.value,
            application_method: form.application_method.value,
            description: form.description.value,
        };

        const required_documents = [
            ...form.querySelectorAll('input[name="required_documents"]:checked')
        ].map(el => el.value);

        updatedVisa.required_documents = required_documents;

        fetch(`https://visa-navigator-server-beta-seven.vercel.app/visa/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedVisa)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire('Success!', 'Visa updated successfully.', 'success');
                    navigate(`/allvisa`); 
                }
            });
    };

    if (!visa) return <div>Loading...</div>;

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-xl mt-10">
            <h2 className="text-3xl font-bold mb-6 text-purple-600">Update Visa: {visa.country}</h2>
            <form onSubmit={handleUpdate} className="space-y-4">

                <input type="text" name="image" defaultValue={visa.image} placeholder="Country Image URL" className="input input-bordered w-full" required />
                <input type="text" name="country" defaultValue={visa.country} placeholder="Country Name" className="input input-bordered w-full" required />

                <select name="visa_type" defaultValue={visa.visa_type} className="select select-bordered w-full" required>
                    <option disabled>Select Visa Type</option>
                    <option>Tourist visa</option>
                    <option>Student visa</option>
                    <option>Official visa</option>
                </select>

                <input type="text" name="processing_time" defaultValue={visa.processing_time} placeholder="Processing Time" className="input input-bordered w-full" required />
                <input type="number" name="age_restriction" defaultValue={visa.age_restriction} placeholder="Age Restriction" className="input input-bordered w-full" required />
                <input type="number" name="fee" defaultValue={visa.fee} placeholder="Visa Fee" className="input input-bordered w-full" required />
                <input type="text" name="validity" defaultValue={visa.validity} placeholder="Validity" className="input input-bordered w-full" required />
                <input type="text" name="application_method" defaultValue={visa.application_method} placeholder="Application Method" className="input input-bordered w-full" required />

                <div>
                    <p className="mb-2 font-medium">Required Documents</p>
                    <div className="flex flex-wrap gap-4">
                        {['Valid passport', 'Visa application form', 'Recent passport-sized photograph'].map((doc, idx) => (
                            <label key={idx} className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    name="required_documents"
                                    value={doc}
                                    defaultChecked={visa.required_documents?.includes(doc)}
                                    className="checkbox checkbox-sm"
                                />
                                {doc}
                            </label>
                        ))}
                    </div>
                </div>

                <textarea name="description" defaultValue={visa.description} placeholder="Description" className="textarea textarea-bordered w-full" rows="4" required />

                <button type="submit" className="btn btn-primary w-full">Update Visa</button>
            </form>
        </div>
    );
};

export default UpdateVisa;
