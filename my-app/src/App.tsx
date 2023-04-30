import Header from "./Header";
import ContactForm from "./components/contactForm/ContactForm";
import { useReducer } from "react";
import { contactsReducer, State } from "./reducer/contactsReducer";

import "./App.css";
const initialState: State = {
  contacts: [],
};

function App() {
  const [state, dispatch] = useReducer(contactsReducer, initialState);

  return (
    <div className="App">
      <Header name="Jerry" />
      <ContactForm dispatch={dispatch} />
    </div>
  );
}

export default App;
