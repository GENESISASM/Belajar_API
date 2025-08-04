'use client'

import {useEffect, useState} from 'react';
import {useRouter, useRouter} from 'next/navigation';
import axios from 'axios';

export default function EditBiodataPage(){
    const [form, setForm] = useState({nama: '',alamat: '', umur: ''});
    const router = useRouter();
    const params = useParams();

    useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('/api/biodata');
      const data = res.data.find((d) => d.id === parseInt(params.id));
      setForm(data);
    };
    fetchData();
    }, [params.id]);

    const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`/api/biodata?id=${params.id}`, form);
    router.push('/biodata');
    };

    return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-xl font-bold mb-4">✏️ Edit Biodata</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Nama"
          className="w-full border px-3 py-2 rounded"
          value={form.nama}
          onChange={(e) => setForm({ ...form, nama: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Alamat"
          className="w-full border px-3 py-2 rounded"
          value={form.alamat}
          onChange={(e) => setForm({ ...form, alamat: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Umur"
          className="w-full border px-3 py-2 rounded"
          value={form.umur}
          onChange={(e) => setForm({ ...form, umur: e.target.value })}
          required
        />
        <button
          type="submit"
          className="bg-yellow-600 text-white px-4 py-2 rounded"
        >
          Update
        </button>
      </form>
    </div>
  );
}