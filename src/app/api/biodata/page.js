'use client';
import { useEffect, useState} from "react";
import Link from 'next/link';
import axios from 'axios';

export default function BiodataListPage(){
    const [biodata, setBiodata] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const res = await axios.get('/api/biodata');
            console.log("API response:", res.data);
            setBiodata(res.data.data ?? res.data); // fallback jika tidak ada "data"
        } catch (error) {
            console.error("Error fetching data:", error);
            setBiodata([]); // fallback jika error
        }
    };

    const handleDelete = async (id) => {
        await axios.delete(`/api/biodata?id=${id}`);
        fetchData();
    };

    return(
        <div className="p-8 max-w-xl mx-auto">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">📋 Daftar Biodata</h1>
                <Link href="/biodata/add" className="bg-blue-600 text-white px-3 py-1 rounded">
                + Tambah
                </Link>
            </div>
            <ul className="space-y-2">
                {(Array.isArray(biodata) ? biodata : []).map((item) => (
                    <li key={item.id} className="border p-4 rounded flex justify-between items-center">
                        <div>
                            <p><strong>{item.nama}</strong></p>
                            <p>{item.alamat} - {item.umur} Tahun</p>
                        </div>
                        <div className="space-x-2">
                            <Link href={`/biodata/edit/${item.id}`} className="bg-yellow-400 text-black px-3 py-1 rounded">
                                Edit
                            </Link>
                            <button onClick={() => handleDelete(item.id)} className="bg-red-600 text-white px-3 py-1 rounded">
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}