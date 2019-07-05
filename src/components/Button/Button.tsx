import * as React from "react";
import { Loader } from "../Loader/Loader";
import { ReactComponent as PlusSvg } from "../../assets/plus.svg";
import "./Button.scss";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

interface Props {
  size: string;
  svgLeft: boolean;
  svgRight: boolean;
}

interface State {
  isLoading: boolean;
}

export class Button extends React.PureComponent<Props, State> {
  state = {
    isLoading: false
  };

  onBtnClickSave = () => {
    const { isLoading } = this.state;
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 5000); //типо запрос :)
    this.setState({ isLoading: !isLoading });
  };

  render() {
    const { isLoading } = this.state;
    const { size, svgLeft, svgRight } = this.props;

    const stylesButton = [
      "button",
      size === "small" && "_small",
      size === "medium" && "_medium",
      size === "large" && "_large"
    ]
      .filter(x => x)
      .join(" ");
    return (
      <>
        <button className={stylesButton} onClick={this.onBtnClickSave}>
          <>
            {!isLoading && (
              <>
                {svgLeft && !isLoading && <PlusSvg />}
                <p className="button_title">Cохранить</p>
                {svgRight && <PlusSvg />}
              </>
            )}
            <ReactCSSTransitionGroup
              transitionName="animation"
              transitionEnterTimeout={300}
              transitionLeaveTimeout={200}
            >
              {isLoading && <Loader />}
            </ReactCSSTransitionGroup>
          </>
        </button>
      </>
    );
  }
}
