import Router from "../routes/Router";
import Header from "./header/Header";
import PromptEntry from "./promptentry/PromptEntry";

const Layout = () => {
  return (
    <div className="m-base-margin">
      <Header />
      <div className="flex flex-col gap-5">
        <PromptEntry />
        <section className="border border-black rounded-base-border-radius p-base-padding">
          <Router />
        </section>
      </div>
    </div>
  );
};

export default Layout;
