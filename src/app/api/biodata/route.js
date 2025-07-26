/* export async function GET(request) {
    return Response.json({message: "GET BERHASIL"});
}

export async function POST(request) {
    try{
        const body = await request.json();

        return Response.json({
            message: "Data Diterima",
            nama: body.nama,
            jurusan: body.jurusan,
            hobi: body.hobi
        });
    } catch(error){
        return Response.json({
            error: "JSON tidak valid atau kosong",
            detail: error.message
        }, {status: 400});
    }
}


let biodataList = []; //simpan data sementara

// READ GET

export async function GET() {
    return Response.json({
        message: "Berhasil ambil data",
        data: biodataList
    }); 
}

// CREATE POST
export async function POST(request) {
    try{
        const body = await request.json();
        const newItem = {
            id: Date.now().toString(), // ID Unik Sementara
            ...body
        };
        biodataList.push(newItem); // simpan data sementara

        return Response.json({
            message: "Data Berhasil Ditambahkan",
            data: newItem
        });
    } catch(error){
        return Response.json({error: "JSON tidak vali"}, {status: 400});
    }
}

*/

import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const data = await prisma.biodata.findMany();
    return Response.json(data);
  } catch (error) {
    console.error("GET Error:", error);
    return Response.json({ error: 'Internal Server Error', detail: error.message }, { status: 500 });
  }
}

export async function POST(request) {
    try{
        const body = await request.json();
        const newData = await prisma.biodata.create({
            data:{
                nama: body.nama,
                jurusan: body.jurusan,
                hobi: body.hobi,
            },
        });
        return Response.json(newData);
    } catch(error){
        return Response.json({error: 'Gagal menyimpan data'}, {status: 500});
    }
}