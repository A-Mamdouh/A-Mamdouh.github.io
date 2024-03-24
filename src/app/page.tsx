import MainPage from "./ui/ScrollablePages/MainPage";
import WebDevelopmentPage from "./ui/ScrollablePages/WebDevelopment";

function Page () {
  return (
    <main className="flex min-h-screen flex-col items-center w-full justify-between p-0 m-0">
      <MainPage />
      <WebDevelopmentPage />
    </main>
  );
}

export default Page;