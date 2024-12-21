
import clientPromise from "@/lib/mongodb";

export async function POST(request) {

    const body = await request.json();
    const client = await clientPromise;
    const db = client.db("bilinks");
    const collection = db.collection("url")

    // check if the short url exist 
    const doc = await collection.findOne({ shorturl: body.shorturl });
    if (doc) {
        return {
            status: 200, body: { success: false, error: true, message: "Short URL already exist" }
        }
    }

    const result = await collection.insertOne({
        url: body.url,
        shorturl: body.shorturl
    })

    return Response.json({ success: true, error: false, message: 'URL Generated successfully' });
}