import { Title } from "../../components/Title/Title";
import { About } from "../../components/About/About";

export function MainPage() {
   return (
      <>
         <Title hwString="Hello world" />
         <About info={{ title: "Some Title", body: "Some body" }} />
      </>
   );
}

// export default MainPage;   