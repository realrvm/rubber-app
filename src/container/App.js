import { useState } from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import { ModalProvider } from "styled-react-modal";

import { Header, ModalMenu } from "../components";
import { Home, Products, Choice, Contacts } from "../pages";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AppWrapper>
      <ModalProvider>
        <Header toggleModal={toggleModal} />
        <ModalMenu isOpen={isOpen} toggleModal={toggleModal} />
      </ModalProvider>
      <Switch>
        <Route path={`/`} exact component={Home} />
        <Route path={`/products`} component={Products} />
        <Route path={`/choice`} component={Choice} />
        <Route path={`/contacts`} component={Contacts} />
      </Switch>
    </AppWrapper>
  );
}

export default App;

/** App styled components **/
const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
