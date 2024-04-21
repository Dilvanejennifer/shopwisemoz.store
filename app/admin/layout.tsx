import AdminNav from "../components/admin/AdminNav";

export const metadata = {
  title: "E-shop Admin",
  description: "E~Shop Admin Dashboard",
};

const AdimLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <AdminNav/>
      {children}
    </div>
  );
};

export default AdimLayout;
