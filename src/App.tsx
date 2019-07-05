import React from "react";
import { Button } from "./components/Button/Button";
import buttons from "./data/buttons.json";
import "./App.scss";

export class App extends React.PureComponent {
  render() {
    return (
      <>
        <div className="app__wrapper">
          {buttons.map(item => {
            return (
              <Button
                key={item.id}
                size={item.size}
                svgLeft={item.svgLeft}
                svgRight={item.svgRight}
              />
            );
          })}
        </div>
      </>
    );
  }
}
