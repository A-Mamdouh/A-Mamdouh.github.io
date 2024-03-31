import Content from "./ui/Content/Content";
import TitleCard from "./ui/TitleCard/TitleCard";

function Page () {
  return (
    <main className="main">
      <TitleCard />
      <div className="content">
          <Content/>
      </div>
    </main>
  );
}

export default Page; 