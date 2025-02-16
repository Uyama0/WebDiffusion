import { Routes, Route } from "react-router";

import { Layout } from "../layout";
import { Txt2Img } from "@/pages/txt2Img";

export const Router: React.FC = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Txt2Img />}></Route>
        </Route>
      </Routes>
    </>
  );
};
