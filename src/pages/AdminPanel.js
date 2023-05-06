import UsersPanel from "../components/UsersPanel/UsersPanel";
import ProductsPanel from "../components/ProductsPanel/ProductsPanel";
import Navbar from "../components/Navbar/Navbar";

const AdminPanel = () => {
  return (
    <>
      <Navbar />
      <UsersPanel />
      <ProductsPanel />
    </>
  );
};

export default AdminPanel;
