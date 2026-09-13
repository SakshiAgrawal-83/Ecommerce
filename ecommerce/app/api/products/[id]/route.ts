import { NextRequest, NextResponse } from "next/server";
import { products } from "@/app/product-data";

type Params = {
    id: string;
};

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<Params> }
) {
    const { id } = await params;

    const product = products.find((p) => p.id === id);

    if (!product) {
        return NextResponse.json(
            { message: "Product not found" },
            { status: 404 }
        );
    }

    return NextResponse.json(product, { status: 200 });
}