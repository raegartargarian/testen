import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { PurchaseModal } from "./PurchaseModal";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow bg-white">{children}</main>
        <Footer />
        <PurchaseModal />
      </div>
    </div>
  );
};

export default PageLayout;
