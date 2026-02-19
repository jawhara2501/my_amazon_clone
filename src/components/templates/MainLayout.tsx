import type { ReactNode } from "react";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";

type Props = {
  children: ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen  w-screen max-w-[100vw] overflow-x-hidden">
      <Header />

      <main className="flex-grow">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;


//    <div className="flex flex-col min-h-screen">
//      <Header />

//      <main className="flex-grow"></main>