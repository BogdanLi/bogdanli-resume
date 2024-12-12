import Main from "./components/Main";
import Title from "./components/Title";
import Container from "./components/ui/Container";
import Divider from "./components/ui/Divider";

export default function App() {
  return (
    <div className="grid place-items-center">
      <div className="lg:w-2/3 lg:mx-auto border">
        <Title />
        <Container>
          <Divider />
        </Container>
        <Main />
      </div>
    </div>
  );
}
