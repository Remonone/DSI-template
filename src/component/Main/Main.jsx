import './main.scss'

const Main = () => {
  return (
    <main>
        <section>
            <div className="main">
                <div className="container">
                    <div className="wrapper">
                        <div className="info">
                            <h1>Making the most of the ever-growing <span className="colored">Information Technology</span></h1>
                            <p>Managed by a team of professional experts with extensive experience and impressive track records</p>
                            <a href="/" className="button">Read More</a>
                        </div>
                        <div className="image">
                            <img src="/main-image.svg" alt="" />
                        </div>
                    </div>
                    <a href="/" className="button mobile">Read More</a>
                </div>
            </div>
        </section>
        <section>
            <div className="dsi">
                <div className="container">
                    <div className="wrapper">
                        <div className="text">
                            <h2>Welcome to <span className="colored">Dwidasa Samsara Indonesia (DSI)</span></h2>
                            <p>Welcome to Dwidasa Samsara Indonesia (DSI)Dwidasa Samsara Indonesia (DSI) was firstly established in 2010 by the founders, who each of them has a common end objective to innovate new creations by making the most of the ever-growing information technology through <span className="colored">DSI</span>'s distinct front-end based application concept.</p>
                            <p>Managed by a team of professional experts with extensive experience and impressive track records, <span className="colored">DSI</span> believes that continuous improvements and innovations assure your business to run effectively and efficiently.</p>
                        </div>    
                        <div className="image">
                            <img src="/pana.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="service">
                <div className="container">
                    <h2>Product and Service</h2>
                    <div className="list">
                        <div className="item">
                            <img src="/product.svg" alt="" />
                            <h3>Our Product</h3>
                            <p>Our product is made on the base of our team’s careful research and analyses, ranging from internet based application.</p>
                            <a href="/" className="button">Read More</a>
                        </div>
                        <div className="item">
                            <img src="/service.svg" alt="" />
                            <h3>Our Service</h3>
                            <p>DSI’s shared service solutions focus on the front-end based software development, designed specifically for the banking and financial sectors.</p>
                            <a href="/" className="button">Read More</a>
                        </div>
                        <div className="item">
                            <img src="/technology.svg" alt="" />
                            <h3>Our Technology</h3>
                            <p>First JAVA, runs on more than 850 million personal computers worldwide, and on billions of devices worldwide, including mobile and TV devices.</p>
                            <a href="/" className="button">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Main