import React from 'react';

/**
 * Error Boundary Component
 * Catches errors in child components and displays a fallback UI
 * Prevents entire app crash from component errors
 * 
 * Usage: Wrap components that might throw errors
 * <ErrorBoundary>
 *   <YourComponent />
 * </ErrorBoundary>
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error) {
    // Update state to trigger fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error details for debugging
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    this.setState({
      error,
      errorInfo,
    });
  }

  render() {
    if (this.state.hasError) {
      const isDevelopment = process.env.NODE_ENV === 'development';

      return (
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0a0e27',
            color: '#fff',
            padding: '20px',
            fontFamily: 'Arial, sans-serif',
          }}
        >
          <div
            style={{
              textAlign: 'center',
              maxWidth: '600px',
              backgroundColor: '#1a1f3a',
              padding: '40px',
              borderRadius: '10px',
              border: '2px solid #ff6b6b',
            }}
          >
            <h1 style={{ marginBottom: '10px', color: '#ff6b6b' }}>
              ⚠️ Oops! Something Went Wrong
            </h1>
            <p style={{ marginBottom: '20px', color: '#ccc' }}>
              We encountered an unexpected error. The page will try to recover automatically.
            </p>

            {isDevelopment && this.state.error && (
              <>
                <details
                  style={{
                    marginTop: '20px',
                    textAlign: 'left',
                    padding: '15px',
                    backgroundColor: '#0f1419',
                    borderRadius: '5px',
                    cursor: 'pointer',
                  }}
                >
                  <summary style={{ color: '#ffd700', cursor: 'pointer', marginBottom: '10px' }}>
                    Error Details (Development Only)
                  </summary>
                  <pre
                    style={{
                      color: '#ff6b6b',
                      fontSize: '12px',
                      overflow: 'auto',
                      marginTop: '10px',
                    }}
                  >
                    {this.state.error.toString()}
                    {this.state.errorInfo && this.state.errorInfo.componentStack}
                  </pre>
                </details>
              </>
            )}

            <button
              onClick={() => window.location.href = '/'}
              style={{
                marginTop: '20px',
                padding: '10px 30px',
                backgroundColor: '#ff6b6b',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: 'bold',
              }}
            >
              Go to Home
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
