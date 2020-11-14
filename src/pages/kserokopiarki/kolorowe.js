import React from "react"
import styled from "styled-components"

import Layout from "../../components/layout"
import Nav from "../../components/nav"
import Footer from "../../components/footer"

import Bizhubc558 from "../../images/Wynajem-Ksero-Bizhubc558.png"
import Bizhubc308 from "../../images/Zasady-Wynajmu-Kserokopiarek.png"
import Bizhubc258 from "../../images/bizhub-c258.png"
import Bizhubc368 from "../../images/bizhub-c368.png"
import Bizhubc658 from "../../images/bizhub-c658.png"
import Bizhubc227 from "../../images/bizhub-c227.png"
import Bizhubc287 from "../../images/bizhub-c287.png"
import Bizhubc458 from "../../images/bizhub-c458.png"
import Bizhubc654 from "../../images/bizhub-c654.png"
import Bizhubc3110 from "../../images/bizhub-c3110.png"
import Bizhubc3350 from "../../images/bizhub-c3350.png"


const Hero = styled.div`
    margin: 120px 15em;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 1440px){
        margin: 120px 4em;
    }
    @media only screen and (max-width: 768px){
        margin: 120px 2em;
    }
`
const H1 = styled.h1`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const SubHead = styled.span`
    color: #545454;
    font-size: 24px;
    font-weight: 300;
    text-transform: uppercase;
    @media only screen and (max-width: 768px){
        font-size: 16px;
    }
`
const Heading = styled.span`
    color: #3E7094;
    font-size: 64px;
    font-weight: 800;
    @media only screen and (max-width: 768px){
        font-size: 32px;
    }
`
const KseroContent = styled.section`
    padding: 0 15em;
    @media only screen and (max-width: 1440px){
        padding: 0px 4em;
    }
    @media only screen and (max-width: 768px){
        padding: 0px 2em;
    }
`
const KseroBox = styled.div`
    display: flex;
    background-color: #EFF8FF;
    border-radius: 30px;
    width: 100%;
    padding: 50px 20px;
    margin-bottom: 50px;
    @media only screen and (max-width: 768px){
        flex-direction: column;
    }
`
const IMGWrapper = styled.div`
    width: 30%;
    img{
        width: 100%;
    }
    @media only screen and (max-width: 768px){
        width: 100%;
    }
`
const TextWrapper = styled.div`
    width: 70%;
    @media only screen and (max-width: 768px){
        width: 100%;
        margin-top: 30px;
    }
`
const Title = styled.p`
    font-weight: 800;
    font-size: 24px;
    margin-bottom: 15px;
`
const Desc = styled.div`
    font-weight: 300;
    font-size: 18px;
    @media only screen and (max-width: 768px){
        font-size: 16px;
    }
`
const StyledUl = styled.ul`
    list-style-type: disc;
    padding-left: 30px;
`


const KolorowePage = () => (
  <Layout>
    <Nav/>
    <Hero>
        <H1>
            <SubHead>Kserokopiarki</SubHead>
            <Heading>Kolorowe</Heading>
        </H1>
    </Hero>
    <KseroContent>
        <KseroBox>
            <IMGWrapper><img src={Bizhubc558} alt="Wynajem kserokopiarek Piotrków Bizhub c558"/></IMGWrapper>
            <TextWrapper>
                <Title>Bizhub c558</Title>
                <Desc>
                    <StyledUl>
                        <li>Prędkość: 55/55 str./min w kolorze oraz w czerni i bieli</li>
                        <li>Formaty papieru: A6-SRA3</li>
                        <li>Najwyższej klasy kolorowe wielofunkcyjne urządzenie drukujące A3</li>
                        <li>Przyjazne dla użytkownika: największy ekran dotykowy wśród urządzeń Konica Minolta</li>
                        <li>Idealna platforma dla wydajnych środowisk biurowych</li>
                    </StyledUl>
                </Desc>
            </TextWrapper>
        </KseroBox>
        <KseroBox>
            <IMGWrapper><img src={Bizhubc308} alt="Wynajem kserokopiarek Piotrków Bizhub c558"/></IMGWrapper>
            <TextWrapper>
                <Title>Bizhub c308</Title>
                <Desc>
                    <StyledUl>
                        <li>Prędkość: 55/55 str./min w kolorze oraz w czerni i bieli</li>
                        <li>Formaty papieru: A6-SRA3</li>
                        <li>Najwyższej klasy kolorowe wielofunkcyjne urządzenie drukujące A3</li>
                        <li>Przyjazne dla użytkownika: największy ekran dotykowy wśród urządzeń Konica Minolta</li>
                        <li>Idealna platforma dla wydajnych środowisk biurowych</li>
                    </StyledUl>
                </Desc>
            </TextWrapper>
        </KseroBox>
        <KseroBox>
            <IMGWrapper><img src={Bizhubc258} width="525px" height="auto" alt="Wynajem kserokopiarek Piotrków Bizhub c258"/></IMGWrapper>
            <TextWrapper>
                <Title>Bizhub c258</Title>
                <Desc>
                    <StyledUl>
                        <li>Druk kolorowy i monochromatyczny z szybkością 25 str./min</li>
                        <li>Formaty papieru: A6-SRA3, własne formaty papieru i papier bannerowy o długości do 1,2 m.</li>
                        <li>Kolorowy panel dotykowy o przekątnej 9 cali, z obsługą gestów wielodotykowych i dedykowany mobilny obszar dotykowy w celu większej wygody i elastyczności, dostosowany do obecnego stylu pracy.</li>
                        <li>Ograniczone oddziaływanie na środowisko naturalne dzięki zastosowaniu najnowszej technologii, zapewniającej niskie zużycie energii na konkurencyjnym poziomie, co pozwala oszczędzać energię i pieniądze.</li>
                        <li>Najwyższy poziom bezpieczeństwa danych dzięki różnym funkcjom bezpieczeństwa, które ograniczają ryzyko utraty danych i zapewniają poufność danych poufnych.</li>
                    </StyledUl>
                </Desc>
            </TextWrapper>
        </KseroBox>
        <KseroBox>
            <IMGWrapper><img src={Bizhubc368}alt="Wynajem kserokopiarek Piotrków Bizhub c368"/></IMGWrapper>
            <TextWrapper>
                <Title>Bizhub c368</Title>
                <Desc>
                    <StyledUl>
                        <li>36/36 stron na minutę w kolorze i w czerni</li>
                        <li>Formaty papieru: A6-SRA3, formaty niestandardowe i banery o długości do 1,2 metra</li>
                        <li>9-calowy kolorowy panel dotykowy ze wsparciem multi-touch i specjalnym przenośnym ekranem dotykowym, by zapewnić maksymalna wygodę i elastyczność przy dzisiejszym stylu pracy</li>
                        <li>Mniejszy wpływ na środowisko naturalne dzięki nowoczesnym technologiom zapewniającym konkurencyjnie niskie zużycie energii, co pozwoli zaoszczędzić nie tylko energię, ale i pieniądze</li>
                        <li>Największe bezpieczeństwo danych dzięki wykorzystaniu różnych funkcjonalności związanych z bezpieczeństwem, by ograniczyć ryzyko utraty danych i zabezpieczyć dane poufne</li>
                    </StyledUl>
                </Desc>
            </TextWrapper>
        </KseroBox>
        <KseroBox>
            <IMGWrapper><img src={Bizhubc658}alt="Wynajem kserokopiarek Piotrków Bizhub c658"/></IMGWrapper>
            <TextWrapper>
                <Title>Bizhub c658</Title>
                <Desc>
                    <StyledUl>
                        <li>Szybkość A4/A3: 65/65 str./min. w trybie czarno-białym i kolorowym</li>
                        <li>Formaty papieru: A6-SRA3</li>
                        <li>Najwyższej klasy kolorowe urządzenia wielofunkcyjne A3</li>
                        <li>Prostota obsługi: największy jak dotąd ekran dotykowy w ofercie Konica Minolta</li>
                        <li>Doskonała platforma dla wydajnych środowisk biurowych</li>
                    </StyledUl>
                </Desc>
            </TextWrapper>
        </KseroBox>
        <KseroBox>
            <IMGWrapper><img src={Bizhubc227}alt="Wynajem kserokopiarek Piotrków Bizhub c227"/></IMGWrapper>
            <TextWrapper>
                <Title>Bizhub c227</Title>
                <Desc>
                    <StyledUl>
                        <li>Szybkość A4/A3: 22/14 str./min. w trybie czarno-białym i kolorowym</li>
                        <li>Format papieru: A6-A3 i własne formaty</li>
                        <li>Ekonomiczne urządzenie kolorowe A3</li>
                        <li>Najnowocześniejsza technologia drukowania mobilnego</li>
                        <li>Doskonale nadaje się do niewielkich biur</li>
                    </StyledUl>
                </Desc>
            </TextWrapper>
        </KseroBox>
        <KseroBox>
            <IMGWrapper><img src={Bizhubc287}alt="Wynajem kserokopiarek Piotrków Bizhub c287"/></IMGWrapper>
            <TextWrapper>
                <Title>Bizhub c287</Title>
                <Desc>
                    <StyledUl>
                        <li>Szybkość A4/A3: 28/14 str./min. w trybie czarno-białym i kolorowym</li>
                        <li>Format papieru: A6-A3 i własne formaty</li>
                        <li>Ekonomiczne urządzenie kolorowe A3</li>
                        <li>Najnowocześniejsza technologia drukowania mobilnego</li>
                        <li>Doskonale nadaje się do niewielkich biur</li>
                    </StyledUl>
                </Desc>
            </TextWrapper>
        </KseroBox>
        <KseroBox>
            <IMGWrapper><img src={Bizhubc458}alt="Wynajem kserokopiarek Piotrków Bizhub c458"/></IMGWrapper>
            <TextWrapper>
                <Title>Bizhub c458</Title>
                <Desc>
                    <StyledUl>
                        <li>Szybkość A4/A3: 45/45 str./min. w trybie czarno-białym i kolorowym</li>
                        <li>Formaty papieru: A6-SRA3</li>
                        <li>Najwyższej klasy kolorowe urządzenia wielofunkcyjne A3</li>
                        <li>Prostota obsługi: największy jak dotąd ekran dotykowy w ofercie Konica Minolta</li>
                        <li>Doskonała platforma dla wydajnych środowisk biurowych</li>
                    </StyledUl>
                </Desc>
            </TextWrapper>
        </KseroBox>
        <KseroBox>
            <IMGWrapper><img src={Bizhubc654}alt="Wynajem kserokopiarek Piotrków Bizhub c654"/></IMGWrapper>
            <TextWrapper>
                <Title>Bizhub c654</Title>
                <Desc>
                    <StyledUl>
                        <li>Urządzenie wielofunkcyjne działające w trybie wydruku kolorowego/ czarno-białego z prędkością 60/65 stron na minutę</li>
                        <li>Wysoki komfort użytkowania za sprawą panelu wielodotykowego, intuicyjnego interfejsu dostosowywanego do indywidualnych potrzeb użytkownika</li>
                        <li>Podajnik dokumentów pracujący w trybie dwustronnego skanowania przy 180 obrazach na minutę, obsługujący przechwytywanie i archiwizowanie dokumentów</li>
                    </StyledUl>
                </Desc>
            </TextWrapper>
        </KseroBox>
        <KseroBox>
            <IMGWrapper><img src={Bizhubc3110}alt="Wynajem kserokopiarek Piotrków Bizhub c3110"/></IMGWrapper>
            <TextWrapper>
                <Title>Bizhub c3110</Title>
                <Desc>
                    <StyledUl>
                        <li>Prędkość A4: 31 stron na minutę w kolorze i czarno-białym</li>
                        <li>Formaty papieru: A6 - A4 i niestandardowe formaty</li>
                        <li>Duża elastyczność do codziennych zadań z funkcją drukowania, skanowania, kopiowania i faksowania w jednym urządzeniu</li>
                        <li>Oszczędność czasu dzięki standardowemu trybowi duplex przy 100% wydajności</li>
                        <li>Oszczędność miejsca dzięki niewielkiej, kompaktowej i lekkiej konstrukcji</li>
                    </StyledUl>
                </Desc>
            </TextWrapper>
        </KseroBox>
        <KseroBox>
            <IMGWrapper><img src={Bizhubc3350}alt="Wynajem kserokopiarek Piotrków Bizhub c3350"/></IMGWrapper>
            <TextWrapper>
                <Title>Bizhub c3350</Title>
                <Desc>
                    <StyledUl>
                        <li>Prędkość druku A4: 33 str./min w kolorze oraz czerni i bieli</li>
                        <li>Formaty papieru: A6-A4</li>
                        <li>7-calowy kolorowy panel dotykowy z obsługą urządzeń takich ja smartphone, zapewnia większą wydajność i radość z pracy</li>
                        <li>Kompleksowe funkcje bezpieczeństwa (przechowywanie danych, dokumentów, bezpieczeństwo sieci)</li>
                        <li>Wyjątkowa wydajność zmniejsza negatywny wpływ na środowisko </li>
                    </StyledUl>
                </Desc>
            </TextWrapper>
        </KseroBox>
    </KseroContent>
    <Footer/>
  </Layout>
)

export default KolorowePage
