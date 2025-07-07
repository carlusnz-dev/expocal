import { Row, Col, Container, Button } from "react-bootstrap"
import { useMediaQuery } from "react-responsive"
import EventGallery from "../components/EventGallery"
import '../styles/Home.css'
import BGDarkOverlay from "../components/BgDarkOverlay"

function Home() {

     const isMobile = useMediaQuery({ query: "(max-width: 768px)" })

     return (
          <>
               <Container fluid className='d-flex flex-column justify-content-center align-items-center text-center' id="containerHeader">
                    <BGDarkOverlay background="linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 1))" />
                    <Row className="z-2 bg-transparent">
                         <Col className="text-light">
                              <h1 className='display-1'>APOCPRA<span className='fw-bold'>CAL</span></h1>
                              <p className='fs-3 fw-bold'>Conheça nossa associação e seus trabalhos</p>
                              <Button className='rounded-pill shadow' onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>Saiba mais</Button>
                         </Col>
                    </Row>
               </Container>

               {/* Search */}
               <Container style={{ margin: "7rem auto" }}>
                    <Row>
                         <h3 className='text-center'>Pesquise mais sobre</h3>
                         <Col md={{ span: 6, offset: 3 }}>
                              <form>
                                   <div className="mb-3">
                                        <input type="text" className="form-control" placeholder="Digite sua pesquisa..." />
                                   </div>
                                   <Button type="submit" className="rounded-pill shadow w-100">Pesquisar</Button>
                              </form>
                         </Col>
                    </Row>
               </Container>

               <Container style={{ margin: "7rem auto" }}>
                    <Row>
                         <h1 className='text-center'>Convênio 2025 <span className='fw-bold'>CONFIRMADO</span></h1>
                         <img src='/fotos/apocpracal_2025.jpg' className='img-fluid rounded-3' />
                    </Row>
               </Container>

               {/* About */}
               <Container className="back-primary text-light" fluid style={{ margin: "12rem auto 70px 0" }} id="AboutSection">
                    <Container className="py-5">
                         <Row>
                              <Col>
                                   <h1 className="text-center fw-bold">Sobre</h1>
                                   <p className="text-center">Conheça mais sobre a associação</p>
                                   <hr />
                                   <p className="text-center">A (APOCPRACAL) foi fundada em 10/04/2012 com o objetivo principal de lutar pela construção da adutora do Rio São Francisco para Campo Alegre de Lourdes- BA, que no ano de 2012 era uma cidade com mais de 50 anos de emancipação política e não possuía água potável para a sua população.</p>
                                   {isMobile ? (
                                        <img src="/fotos/foto_11.jpg" alt="About" className="img-fluid rounded-3" style={{
                                             maxHeight: "500px",
                                             objectFit: "cover",
                                             minWidth: "100%"
                                        }} />
                                   ) : (
                                        <div className="d-flex justify-content-center">
                                                  <img src="/fotos/foto_10.jpg" alt="About" className="img-fluid rounded-3" style={{
                                                       maxHeight: "500px",
                                                       objectFit: "cover",
                                                       minWidth: "100%"
                                                  }}/>
                                        </div>
                                   )}
                                   <p className="text-center mt-3">Representar os moradores da cidade em suas reivindicações na construção da Adutora do Rio São Francisco para Campo Alegre de Lourdes -BA junto aos órgãos públicos nas três esferas do governo, empresas públicas, concelhos e outras entidades existentes;</p>
                              </Col>
                         </Row>
                    </Container>

                    {/* Eventos */}
                    <Container className="py-5">
                         <Row>
                              <Col>
                                   <h1 className="text-center fw-bold">Matérias</h1>
                                   <p className="text-center">Confira nossos eventos, notícias e outras informações através do nosso blog.</p>
                                   <hr />
                                   <p className="text-center">Por aqui, você obtem mais informações e noticiando-se melhor, de como anda os projetos e objetivos levados pela Associação APOCPRACAL.</p>
                              </Col>
                         </Row>
                         <Row>
                              <EventGallery />
                         </Row>
                    </Container>

               </Container >

               {/* Fundadores */}
               <Container className="py-5 mb-5">
                    <Row>
                         <Col className="align-self-end mb-5">
                              <h1 className="text-center text-lg-end fw-bold display-1">Fundadores</h1>
                              <p className="text-center text-lg-end fs-3">Conheça nossos fundadores</p>
                         </Col>
                         <Col className="d-none d-lg-block">
                              <img src="/fotos/foto_29.jpg" alt="Fundadores" className="img-fluid rounded-5" />
                         </Col>
                    </Row>
                    <Row className="mt-0 mt-lg-5">
                         <Col className="d-flex justify-content-center">
                              <img src="/fotos/foto_7.jpg" alt="Fundadores" className="img-fluid rounded-3" style={{
                                   maxHeight: "400px",
                                   objectFit: "cover",
                                   minWidth: "100%"
                              }} />
                         </Col>
                         <Col className="d-flex flex-column justify-content-center">
                              <h1 className="text-center text-lg-start fw-bold">Gean Antunes</h1>
                              <p className="text-center text-lg-start">Presidente</p>
                         </Col>
                    </Row>
                    {/* Redes Sociais*/}
                    <Row className="back-primary text-light p-5 shadow rounded-3 w-75 mx-auto" style={{
                         marginTop: "7rem",
                         filter: "drop-shadow(0 0.5em 1.4rem rgba(0, 0, 0, 0.5))"
                    }}>
                         <Col xs={12}>
                              <h1 className="fw-bold text-center">Redes Sociais</h1>
                              <p className="lead text-center">Acesse as nossas redes sociais e obtenha mais informações.</p>
                         </Col>
                         <Col className="d-flex justify-content-center mt-5">
                              <Button className="btn-secondary rounded-pill shadow me-3" onClick={() => {
                                   window.open('https://www.facebook.com/apocpracal')
                              }}>
                                   <i className="bi bi-facebook"></i>
                                   <span className="d-none d-md-block">Facebook</span>
                              </Button>
                              <Button className="btn-secondary rounded-pill shadow me-3" onClick={() => {
                                   window.open('https://www.instagram.com/apocpracal/')
                              }}>
                                   <i className="bi bi-instagram"></i>
                                   <span className="d-none d-md-block">Instagram</span>
                              </Button>
                              <Button className="btn-secondary rounded-pill shadow" onClick={() => window.open('https://api.whatsapp.com/send?phone=5574999999999')}>
                                   <i className="bi bi-whatsapp"></i>
                                   <span className="d-none d-md-block">WhatsApp</span>
                              </Button>
                         </Col>
                    </Row>
               </Container>
          </>
     )
}

export default Home
