import React, { useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Header from "./components/Header";

const items = [
    {
        title: "What is React?",
        content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
        title: "Why is React?",
        content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
        title: "How to use React?",
        content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
];

const options = [
    {
        label: "The color Red",
        value: "red",
    },
    {
        label: "The color Green",
        value: "green",
    },
    {
        label: "A shade of Blue",
        value: "blue",
    },
];

function App() {
    const [selected, setSelected] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(false);

    const DropdownComp = () => {
      return (
          <div>
              <button onClick={() => setShowDropdown(!showDropdown)} className="ui button">
                  Toggle Dropdown
              </button>
              {showDropdown ? (
                  <Dropdown
                      label="Select a color"
                      selected={selected}
                      onSelectedChange={setSelected}
                      options={options}
                  />
              ) : (
                  <h3>Dropdown is now hidden</h3>
              )}
          </div>
      );
  };

    return (
        <div className="ui container">
            <br />
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route exact path="/" element={<Accordion items={items} />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/dropdown" exact element={<DropdownComp />} />
                    <Route path="/translate" element={<Translate />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
