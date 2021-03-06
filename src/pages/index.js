import React from "react"

import Layout from "../components/layout"
import WAOrgBase from "../components/images/WAOrgBase"
import SEO from "../components/seo"

// import MonkeyWrapper from '../components/threeMonkeySpin'
import R3FMonkey from "../components/R3FMonkey"
import styled from "styled-components"
import WAButton from "../components/button"
// import Tools from '../components/tools'

const IndexWrapper = styled.div`
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  canvas {
    width: 50%;
    height: 100%;
    display: block;
    z-index:99;
  }
`
const ImageWrapper = styled.div`
  width: 60vw;
  min-width: 300px;
  max-width: 600px;
  margin: 0;
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -10%);

  /* @media screen AND (max-width:1024px){
          position:fixed;
          bottom:0;
          z-index:99;
        } */
`
const Infos = styled.div`
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -90%);
  max-width: 420px;
  width: 100vw;
  @media screen and (max-width: 1000px) {
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media screen and (max-width: 1000px) {
    flex-wrap: wrap;
    > * {
      margin: 10px auto;
    }
  }
`

const IndexPage = () => (
  <Layout>
    <IndexWrapper>
      <SEO title="Home" />
      {/* <MonkeyWrapper/> */}
      <R3FMonkey />
      <ImageWrapper>
        <WAOrgBase />
      </ImageWrapper>

      <Infos>
        <p style={{ textAlign: "center" }}>
          <strong>Bienvenue sur webape.dev !</strong> <br />
          Création de site internet avec les toutes{" "}
          <strong>dernières technologies</strong> pour un résultat au{" "}
          <strong>top&nbsp;de&nbsp;la&nbsp;performance</strong> ⚡.
        </p>
        <Wrapper>
          <WAButton link="/past-projects">Sites d'exemple</WAButton>
          <WAButton link="/contact" reverse="true">
            Contact
          </WAButton>
        </Wrapper>
      </Infos>
    </IndexWrapper>
  </Layout>
)

export default IndexPage
