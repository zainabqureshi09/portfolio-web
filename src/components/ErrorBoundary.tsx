'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle } from 'lucide-react';

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
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-900 px-4">
          <Card className="max-w-md w-full bg-slate-800/50 border-slate-700">
            <CardContent className="p-8 text-center">
              <AlertTriangle className="h-12 w-12 text-red-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-slate-200 mb-2">
                Oops! Something went wrong
              </h2>
              <p className="text-slate-400 mb-6">
                We're sorry for the inconvenience. Please try refreshing the page.
              </p>
              <Button
                onClick={() => window.location.reload()}
                className="bg-emerald-600 hover:bg-emerald-500"
              >
                Refresh Page
              </Button>
            </CardContent>
          </Card>
        </div>
      );
    }

    return this.props.children;
  }
}
