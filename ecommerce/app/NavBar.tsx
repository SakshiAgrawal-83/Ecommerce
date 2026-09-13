
import Link from "next/link";
export default function NavBar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center px-4 py-2 " >
        <ul className="flex space-x-4">
            <li>
                <Link href="/" className="mr-4">Home</Link>
            </li>
            <li>    
            <Link href="/products" className="mr-4">Products</Link> 
            </li>   
            <li>
            <Link href="/cart" className="mr-4">Cart</Link>
            </li>
            <li>    
            <Link href="/checkout" className="mr-4">Checkout</Link>
            </li>
        </ul>
        
      </div>
    </nav>
  );
}
