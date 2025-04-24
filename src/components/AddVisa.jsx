import { useState } from "react";
import Swal from "sweetalert2";

const AddVisa = () => {

    const [formData, setFormData] = useState({
        image: "",
        country: "",
        visa_type: "",
        processing_time: "",
        required_documents: [],
        description: "",
        age_restriction: "",
        fee: "",
        validity: "",
        application_method: ""
      });
    
      const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        const updatedDocs = checked
          ? [...formData.required_documents, value]
          : formData.required_documents.filter(doc => doc !== value);
        setFormData({ ...formData, required_documents: updatedDocs });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch("https://visa-navigator-server-beta-seven.vercel.app/addvisa", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        });
        const data = await res.json();
        if (res.ok) {
          Swal.fire("Success!", "Visa added successfully", "success");
        } else {
          Swal.fire("Error!", data.message || "Something went wrong", "error");
        }
      };

    return (

        <div>
             <div className="max-w-2xl mx-auto mt-10 p-6 shadow-lg bg-white rounded-xl">
      <h2 className="text-2xl font-bold mb-6 text-center">Add New Visa</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" placeholder="Country Image URL" className="input input-bordered w-full" onChange={(e) => setFormData({ ...formData, image: e.target.value })} required />
        <input type="text" placeholder="Country Name" className="input input-bordered w-full" onChange={(e) => setFormData({ ...formData, country: e.target.value })} required />

        <select
  className="select select-bordered w-full"
  defaultValue=""
  onChange={(e) => setFormData({ ...formData, visa_type: e.target.value })}
  required
>
  <option value="" disabled>Select Visa Type</option>
  <option value="Tourist visa">Tourist visa</option>
  <option value="Student visa">Student visa</option>
  <option value="Official visa">Official visa</option>
</select>


        <input type="text" placeholder="Processing Time" className="input input-bordered w-full" onChange={(e) => setFormData({ ...formData, processing_time: e.target.value })} required />

        <div>
          <p className="mb-2 font-semibold">Required Documents:</p>
          <label><input type="checkbox" value="Valid passport" onChange={handleCheckboxChange} /> Valid passport</label><br />
          <label><input type="checkbox" value="Visa application form" onChange={handleCheckboxChange} /> Visa application form</label><br />
          <label><input type="checkbox" value="Recent passport-sized photograph" onChange={handleCheckboxChange} /> Recent passport-sized photograph</label>
        </div>

        <textarea placeholder="Description" className="textarea textarea-bordered w-full" onChange={(e) => setFormData({ ...formData, description: e.target.value })} required></textarea>
        <input type="number" placeholder="Age Restriction" className="input input-bordered w-full" onChange={(e) => setFormData({ ...formData, age_restriction: e.target.value })} required />
        <input type="number" placeholder="Fee" className="input input-bordered w-full" onChange={(e) => setFormData({ ...formData, fee: e.target.value })} required />
        <input type="text" placeholder="Validity" className="input input-bordered w-full" onChange={(e) => setFormData({ ...formData, validity: e.target.value })} required />
        <input type="text" placeholder="Application Method" className="input input-bordered w-full" onChange={(e) => setFormData({ ...formData, application_method: e.target.value })} required />

        <button className="btn btn-primary w-full">Add Visa</button>
      </form>
    </div>
        </div>
    );
};

export default AddVisa;