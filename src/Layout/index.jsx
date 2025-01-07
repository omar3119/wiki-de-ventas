import React from "react";

function Layout({ children }) {
  return (
    <div className="w-full flex justify-center mt-10">
      {children}
    </div>
  )
}

export default Layout;