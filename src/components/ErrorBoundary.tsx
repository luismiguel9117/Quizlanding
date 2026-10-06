import React from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Uncaught error in React tree:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-6 text-white text-center">
          <div className="bg-[#05144b]/80 backdrop-blur-md p-8 rounded-2xl max-w-md w-full border border-white/20 shadow-2xl">
            <h2 className="text-2xl font-bold mb-3 text-[#FFC83D]">¡Ups! Algo no salió como esperábamos</h2>
            <p className="text-sm text-blue-100 mb-6">
              Ocurrió un error al cargar la vista. Por favor recarga la página para continuar.
            </p>
            {this.state.error && (
              <pre className="text-xs bg-black/40 text-red-300 p-3 rounded mb-6 font-mono text-left overflow-auto max-h-32 whitespace-pre-wrap">
                {this.state.error.message}
              </pre>
            )}
            <button
              onClick={() => window.location.reload()}
              className="w-full py-3 px-6 bg-[#FFC83D] hover:bg-yellow-300 text-blue-950 font-bold rounded-xl transition-all shadow-lg cursor-pointer"
            >
              Recargar página
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
