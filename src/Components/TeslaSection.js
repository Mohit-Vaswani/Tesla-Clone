import styled from "styled-components";

function TeslaSection(props){
    return(
        <MainSection imgPath={props.bgImage}>
            <Car>
                <h1>{props.Model}</h1>
                <p>{props.para}</p>
            </Car>
            <Buttons>
                <LButton>{props.LButton}</LButton>
                <RButton>{props.RButton}</RButton>
            </Buttons>
        </MainSection>
    )
}

const MainSection = styled.main`
    background-image: url(images/${props=>props.imgPath});
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Car = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 8rem;
    line-height: 0;

    h1{
        font-size: 3.5rem;
    }
    
    p{
        font-size: 1.6rem;
    }

    a{
        color: #000;
    }
`

const Buttons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 10rem;

    gap: 2rem;
    `
    
    const LButton = styled.a`
    font-size: 1.4rem;
    padding: 1rem 7rem;
    background: #333232;
    color: #fff;
    border: none;
    border-radius: 3px;
    font-weight: bold;
    cursor: pointer;
    text-transform: uppercase;
    `
    
    const RButton = styled.a`
    font-size: 1.4rem;
    padding: 1rem 7rem;
    border: none;
    background: #fff;
    border-radius: 3px;
    font-weight: bold;
    cursor: pointer;
    text-transform: uppercase;
`

export default TeslaSection;