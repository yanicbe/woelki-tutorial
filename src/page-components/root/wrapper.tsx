import React, { ReactNode } from "react";
import Sidebar from "../navigate/sidebar";

const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex gap-2">
      <Sidebar />
      {children}
    </div>
  );
};

export default Wrapper;
