import React from "react";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="min-h-screen flex flex-col ">
        <main className="flex-grow bg-white">{children}</main>
      </div>
    </div>
  );
};

export default PageLayout;
