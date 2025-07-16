export async function GET(request) {
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