import CircularProgress from "@mui/material/CircularProgress";
import LinearProgress from "@mui/material/LinearProgress";
import React from "react";

const Waiting = (Component: React.FC) => (props: object) => {
  // A HOC, which lets you display a fallback until components have finished loading.

  return (
    <React.Suspense
      fallback={
        <div className="min-h-screen">
          <LinearProgress />
        </div>
      }
    >
      <Component {...props} />
    </React.Suspense>
  );
};

const DefaultFallback = () => (
  <div className="p-4">
    <CircularProgress />
  </div>
);

interface LoadingProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

const Loading = ({ children, fallback }: LoadingProps) => {
  // A component, which lets you display a fallback until components have finished loading.

  return (
    <React.Suspense fallback={fallback ?? <DefaultFallback />}>
      {children}
    </React.Suspense>
  );
};

export { Loading, Waiting };
