import * as React from "react";
import { Loader } from "../Loader/Loader";
import { ReactComponent as PlusSvg } from "../../assets/plus.svg";
import "./Button.scss";
import ReactTransitionGroup from "react-addons-css-transition-group";

interface Props {
  size: string;
  svgLeft: boolean;
  svgRight: boolean;
}

interface State {
  isLoading: boolean;
  showText: boolean;
}

export class Button extends React.Component<Props, State> {
  state = {
    isLoading: false,
    showText: true
  };

  onBtnClickSave = () => {
    const { isLoading } = this.state;
    this.setState({ isLoading: !isLoading });
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 5000); //типо запрос :)
  };

  componentDidUpdate(prevProps: any, prevState: any) {
    const { isLoading } = this.state;

    if (prevState.isLoading === false && isLoading === true) {
      this.setState({
        showText: false
      });
    }
    if (prevState.isLoading === true && isLoading === false) {
      setTimeout(() => {
        this.setState({
          showText: true
        });
      }, 400);
    }
  }

  render() {
    const { isLoading, showText } = this.state;
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
            {showText && (
              <>
                {svgLeft && !isLoading && <PlusSvg />}
                <p className="button_title">Cохранить</p>
                {svgRight && <PlusSvg />}
              </>
            )}
            <ReactTransitionGroup
              transitionName="animation"
              transitionEnterTimeout={300}
              transitionLeaveTimeout={200}
            >
              {isLoading && <Loader />}
            </ReactTransitionGroup>
          </>
        </button>
      </>
    );
  }
}
