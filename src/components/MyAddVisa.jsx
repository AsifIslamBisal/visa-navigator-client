import { useLoaderData } from 'react-router-dom';
import VisaCard from './VisaCard';

const MyAddVisa = () => {
    
    const visas = useLoaderData();

    return (
        <div>
            <div className="p-6">
                        <h1 className='text-4xl font-bold text-purple-600 mb-6'>My Visas: {visas.length}</h1>
            
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {
                                visas.map(visa => (
                                    <VisaCard key={visa._id} visa={visa} />
                                ))
                            }
                        </div>
                    </div>
        </div>
    );
};

export default MyAddVisa;
