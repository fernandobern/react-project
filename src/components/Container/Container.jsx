function Container({ children }) {
    return (
      <div style={{
        maxWidth: '1500px',
        margin: '0 auto',
        padding: '0 1rem'
      }}>
        {children}
      </div>
    )
  }
  
  export default Container
  