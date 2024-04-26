import Router from "../routes/Router";
import Header from "./header/Header";
import PromptEntry from "./promptEntry/PromptEntry";

const Layout = () => {
  return (
    <div className="m-base-margin">
      <Header />
      <main className="border flex flex-col gap-3 border-black rounded-base-border-radius p-base-padding">
        <PromptEntry />
        <Router />
      </main>
    </div>
  );
};

export default Layout;
