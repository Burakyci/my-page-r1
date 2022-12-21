import React from "react";
import { Link } from "react-router-dom";

function Page404Found() {
  return (
    <div>
      <h2>Sayfa Bulanamadı</h2>
      <Link to="/">Geri Dön</Link>
    </div>
  );
}

export default Page404Found;
