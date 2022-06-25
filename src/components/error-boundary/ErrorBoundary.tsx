import * as React from 'react';
import { Error } from '@/components/error/Error';

type ErrorBoundaryProps = {
  children: React.ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps | Readonly<ErrorBoundaryProps>) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <Error
          p={4}
          mx="auto"
          maxW="xl"
          borderRadius="lg"
          border="2px dashed"
          borderColor="blue.light"
        >
          Houve um erro ao exibir as informações solicitadas.
        </Error>
      );
    }

    return <>{this.props.children}</>;
  }
}
