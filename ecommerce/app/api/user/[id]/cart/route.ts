import { NextRequest, NextResponse } from "next/server";
import { products } from "@/app/product-data";

type ShoppingCart = Record<string, string[]>;

const carts: ShoppingCart = {
    "1": ["123", "456"],
    "2": ["456"],
};
type Params = {
    id: string;
};

export async function GET(request: NextRequest, { params }: { params: Promise<Params> }) {
    const userId = (await params).id;
    const productIds = carts[userId];
    const cartProducts = productIds?.map((id) => products.find((p) => p.id === id));

    if (productIds === undefined) {
        return NextResponse.json(JSON.stringify({ message: "Shopping cart not found" }), {
            status: 404,
            headers: {
                "Content-Type": "application/json"
            }
        }
        );
    }

    return NextResponse.json(cartProducts, { status: 200,
        headers: {
            "Content-Type": "application/json"
        }
     });


}

type CartBody = {
    productId: string;
};

export async function POST(request: NextRequest, { params }: { params: Promise<Params> }) {
    const userId = (await params).id;
    const body:CartBody = await request.json();
    const productId = body.productId;

    carts[userId] = carts[userId] ? carts[userId].concat(productId) : [productId];
    const cartProducts = carts[userId].map((id) => products.find((p) => p.id === id));
    return NextResponse.json((cartProducts), { 
        status: 201, 
        headers: {  
            "Content-Type": "application/json"  
        }
     });

}

export async function DELETE(request: NextRequest, { params }: { params: Promise<Params> }) {
    const userId = (await params).id;
    const body:CartBody = await request.json();
    const productId = body.productId;
    carts[userId] = carts[userId]?.filter((id) => id !== productId);
    const cartProducts = carts[userId]?.map((id) => products.find((p) => p.id === id));
    return NextResponse.json((cartProducts), { 
        status: 200, 
        headers: {  
            "Content-Type": "application/json"  
        }
     });
}
