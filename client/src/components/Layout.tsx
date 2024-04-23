import Router from "../routes/Router";
import Header from "./header/Header";
import PromptEntry from "./promptEntry/PromptEntry";

const Layout = () => {
  return (
    <div className="m-base-margin">
      <Header />
      <main className="flex flex-col gap-5">
        <PromptEntry />
        <section className="border border-black rounded-base-border-radius p-base-padding">
          <Router />
        </section>
      </main>
    </div>
  );
};

export default Layout;
