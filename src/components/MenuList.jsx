import { useEffect, useState } from "react";

function MenuList() {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://easydevrestoapi.vercel.app/menu")
      .then((res) => res.json())
      .then((data) => {
        console.log("API Response:", data); // For debugging
        setMenuItems(data); // ✅ Set the full array directly
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center text-gray-600">Loading menu...</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {menuItems.length === 0 ? (
        <p className="text-center text-red-500">No menu items found.</p>
      ) : (
        menuItems.map((item, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold">{item.title}</h2>
              <p className="text-gray-600 capitalize">{item.category}</p>
              <p className="mt-2 text-green-600 font-semibold">{item.price}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default MenuList;
