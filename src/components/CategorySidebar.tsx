// components/Sidebar.js
export default function Sidebar() {
  return (
    <div className="bg-white w-64 p-6">
      <h2 className="font-bold text-lg mb-4">Categories</h2>
      <ul className="space-y-2">
        <li><a href="#" className="text-gray-600 hover:text-black">Shoes</a></li>
        <li><a href="#" className="text-gray-600 hover:text-black">Sport Bras</a></li>
        <li><a href="#" className="text-gray-600 hover:text-black">Tops & T-shirts</a></li>
        <li><a href="#" className="text-gray-600 hover:text-black">Hoodies & Sweatshirts</a></li>
        <li><a href="#" className="text-gray-600 hover:text-black">Jackets</a></li>
        <li><a href="#" className="text-gray-600 hover:text-black">Trousers</a></li>
        <li><a href="#" className="text-gray-600 hover:text-black">Tights</a></li>
        <li><a href="#" className="text-gray-600 hover:text-black">Shorts</a></li>
        <li><a href="#" className="text-gray-600 hover:text-black">Tracksuits</a></li>
        <li><a href="#" className="text-gray-600 hover:text-black">Jumpsuits & Rompers</a></li>
        <li><a href="#" className="text-gray-600 hover:text-black">Skirts & Dresses</a></li>
        <li><a href="#" className="text-gray-600 hover:text-black">Socks</a></li>
        <li><a href="#" className="text-gray-600 hover:text-black">Accessories & Equipment</a></li>
      </ul>

      <h2 className="font-bold text-lg mt-6 mb-4">Shop by Price</h2>
      <ul className="space-y-2">
        <li><a href="#" className="text-gray-600 hover:text-black">Under $50</a></li>
        <li><a href="#" className="text-gray-600 hover:text-black">$50 - $100</a></li>
        <li><a href="#" className="text-gray-600 hover:text-black">$100 - $200</a></li>
        <li><a href="#" className="text-gray-600 hover:text-black">$200+</a></li>
      </ul>

      <h2 className="font-bold text-lg mt-6 mb-4">Gender</h2>
      <ul className="space-y-2">
        <li><a href="#" className="text-gray-600 hover:text-black">Men</a></li>
        <li><a href="#" className="text-gray-600 hover:text-black">Women</a></li>
        <li><a href="#" className="text-gray-600 hover:text-black">Kids</a></li>
      </ul>
    </div>
  )
}


