import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded ml-[-4rem] mr-[2rem]">
        <h1>Sorry.. there was an error</h1>
      </div>
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
