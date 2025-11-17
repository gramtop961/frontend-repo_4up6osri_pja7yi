import React from 'react'

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    // Log to console so we can see it in the browser devtools
    // and make it visible on screen for users without console access
    // eslint-disable-next-line no-console
    console.error('App crashed:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ minHeight: '100vh', background: '#000', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
          <div style={{ maxWidth: 720 }}>
            <h1 style={{ fontSize: 24, marginBottom: 12 }}>Algo deu errado ao carregar o site.</h1>
            <p style={{ opacity: 0.8, marginBottom: 16 }}>Recarregue a página. Se o problema continuar, use o botão abaixo para acessar a rota de teste e verificar o backend.</p>
            <pre style={{ background: '#111', border: '1px solid rgba(255,255,255,0.1)', padding: 12, borderRadius: 8, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
              {String(this.state.error)}
            </pre>
            <div style={{ marginTop: 16, display: 'flex', gap: 8 }}>
              <button onClick={() => window.location.reload()} style={{ background: '#fff', color: '#000', padding: '10px 14px', borderRadius: 999, fontWeight: 600 }}>Recarregar</button>
              <a href="/test" style={{ padding: '10px 14px', borderRadius: 999, border: '1px solid rgba(255,255,255,0.2)', color: '#fff', textDecoration: 'none' }}>Ir para /test</a>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
