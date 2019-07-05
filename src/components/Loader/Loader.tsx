import * as React from "react";
import "./Loader.scss";

interface Props {}

export class Loader extends React.PureComponent<Props> {
  render() {
    return (
      <svg className="spinner" viewBox="0 0 50 50">
        <circle
          className="path"
          cx="25"
          cy="25"
          r="15"
          fill="none"
          strokeWidth="4"
        />
      </svg>
    );
  }
}
