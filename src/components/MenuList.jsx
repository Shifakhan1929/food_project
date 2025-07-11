import { useEffect, useState } from "react";


function MenuList() {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://easydevrestoapi.vercel.app/menu")

      .then((res) => res.json())
      .then((data) => {
        console.log("API Response:", data); 
        setMenuItems(data); 
        setLoading(false);
      })

      .catch((err) => {
        console.error("Fetch error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center text-pink-600">Loading menu...</p>;

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {menuItems.length === 0 ? (
        <p className="text-center text-red-500">No menu items found.</p>
      ) : (
        menuItems.map((item, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-pink-600 text-xl font-bold">{item.title}</h2>
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
