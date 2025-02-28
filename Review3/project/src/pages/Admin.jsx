import AdminProductForm from '../components/AdminProductForm';
import StockManagement from '../components/StockManagement';

export default function Admin() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>
      <AdminProductForm />
      <StockManagement />
    </div>
  );
}



// // src/pages/Admin.jsx
// import { useState } from "react";
// import { addProduct } from "../firebase/firebaseServices"; // Correct import of addProduct

// const Admin = () => {
//   const [product, setProduct] = useState({ name: "", price: "" });

//   const handleAddProduct = async (e) => {
//     e.preventDefault();

//     try {
//       // Adding product to Firestore
//       const productId = await addProduct(product);
//       console.log("Product added with ID:", productId);

//       // Optionally, reset the form or show a success message
//       setProduct({ name: "", price: "" });  // Reset form after successful submission
//     } catch (error) {
//       console.error("Error adding product", error);
//     }
//   };

//   return (
//     <div>
//       <h1>Admin Panel - Add Product</h1>
//       <form onSubmit={handleAddProduct}>
//         <div>
//           <label htmlFor="name">Product Name:</label>
//           <input
//             type="text"
//             id="name"
//             value={product.name}
//             onChange={(e) => setProduct({ ...product, name: e.target.value })}
//             placeholder="Product Name"
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="price">Product Price:</label>
//           <input
//             type="number"
//             id="price"
//             value={product.price}
//             onChange={(e) => setProduct({ ...product, price: e.target.value })}
//             placeholder="Product Price"
//             required
//           />
//         </div>
//         <button type="submit">Add Product</button>
//       </form>
//     </div>
//   );
// };

// export default Admin;
