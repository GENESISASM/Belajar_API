/*
let biodataList = []; //Sengaja dibuat terpisah sebagai bentuk latihan

// Update (PUT)

export async function PUT(request, {params}) {
    try{
        const { id } = params;
        const body = await request.json();
        const index = biodataList.findIndex(item => item.id === id);

        if(index === -1){
            return Response.json({ error:"Data tidak ditemukan"},{status: 404});
        }

        biodataList[index] = {...biodataList[index], ...body};
        return Response.json({
            message: "Data berhasil diperbarui",
            data: biodataList[index]
        });
    } catch(error){
        return Response.json({error: "JSON tidak Valid"},{status: 400});
    }
}

// Delete (DELETE)
export async function DELETE(request, {params}) {
    const {id} = params;
    const index = biodataList.findIndex(item => item.id === id);
    
    if(index === -1){
        return Response.json({ error:"Data tidak ditemukan"},{status: 404});
    }

    const deleted = biodataList.splice(index, 1)[0];
    return Response.json({
        message: "Data berhasil ditemukan",
        data : deleted
    });
}
*/

import {prisma} from '@/lib/prisma';

export async function GET(request, {params}) {
    try{
        const data = await prisma.biodata.findUnique({
            where: {id: parseInt(params.id)},
        });
        if (!data) return Response.json({error: 'Data tidak ditemukan'}, {status: 404});
        return Response.json({data});
    } catch(error){
        return Response.json({error: 'Gagal ambil data'},{status: 500});
    }
}

export async function PUT(request, {params}) {
    try{
        const body = await request.json();
        const update = await prisma.biodata.update({
            where: {id: parseInt(params.id)},
            data:{
                nama: body.nama,
                jurusan: body.jurusan,
                hobi: body.hobi,
            },
        });
        return Response.json({update});
    } catch(error){
        return Response.json({error: 'Gagal update data'},{status: 500});
    }
}

export async function DELETE(request, {params}) {
    try{
        await prisma.biodata.delete({
            where: {id: parseInt(params.id)},
        });
        return Response.json({message: 'Data berhasil dihapus'});
    } catch(error){
        return Response.json({error: 'Gagal hapus data'},{status: 500});
    }
}