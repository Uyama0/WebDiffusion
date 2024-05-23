import Router from "../routes/Router";
import PromptEntry from "./promptEntry/PromptEntry";

const Layout = () => {
  return (
    <div className="m-base-margin">
      <main className="border flex flex-col gap-md border-black rounded-md p-lg m-lg">
        <PromptEntry />
        <Router />
      </main>
    </div>
  );
};

export default Layout;
