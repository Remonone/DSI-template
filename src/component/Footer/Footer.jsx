import './footer.scss'

const Footer = () => {
  return (
    <footer>
      <div className="upper">
        <div className="container">
          <div className="wrapper">
            <div className="adress">
              <div className="logo">
                <a href="/"><img src="/logo.svg" alt="" /></a>
              </div>
              <p className="bold">PT Dwidasa Samsara Indonesia</p>
              <p className="light">Ruko Jalur Sutera 29A No. 53</p>
              <p className="light">Alam Sutera Serpong, Tangerang 15323</p>
            </div>
            <div className="contact">
              <h4>Contact</h4>
              <p className="light">Phone : +62.21.5314.1135</p>
              <p className="light">Fax : +62.21.5314.1135</p>
              <p className="light">Email : community@dwidasa.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="lower">
        <p>Copyright &copy; 2015 - Dwidasa Samsara Indonesia</p>
      </div>
    </footer>
  )
}

export default Footer