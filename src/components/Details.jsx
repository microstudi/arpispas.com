export default function Details() {
  return (
    <>
      <nav className="nav">
        <a href="#">D'On Venim</a>
        <a href="#">Qui Sóm</a>
        <a href="#">Què Fem</a>
        <a href="#">Espectacles</a>
        <a href="#">Contacte</a>
      </nav>
      <div className="bottom">
        <a
          href="https://github.com/microstudi/arpispas.com"
          className="bottom-right"
        >
          {'<Source />'}
        </a>
        <a
          href="https://www.instagram.com/arpispas"
          className="bottom-left"
        >
        </a>
      </div>
      <span className="header-left"><img
        src="/arpispas.svg"
        alt="Arpispas Teatre"
        style={{
          width: '120px',
          height: '120px',
        }}
      /></span>
    </>
  )
}
