import styled from "styled-components";

const ModelsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 1rem;
    @media (max-width: 800px) {
        flex-direction: column;
    }
`;

const ModelCard = styled.div`
    width: 49%;
    height: auto;
    background: #E9DFCA;
    @media (max-width: 900px) {
        width: 100%;
        margin-bottom: 1rem;
    }
    &:hover {
        /* width: 60%; */
        /* transition: 1s all; */
    }
`;



const CardImage = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: center;
    width: 100%;
    margin: auto;
    align-items: center;
    & img {
        width: 73%;
    }
`;

const PricingText = styled.div`
    position: absolute;
    margin: 20px;
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    /* identical to box height */
    color: #000000;
`;

const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 46%;
    float: right;
    position: relative;
    /* border: 1px solid black; */
    padding: 1rem;
    margin-top: -5.2rem;
    @media (max-width: 900px) {
        flex-direction: column;
        width: 90%;
        margin-top: -3rem;
    }
`;

const LearnMoreButton = styled.button`
    width: 143px;
    height: 45px;
    border: 1px solid #151515;
    background: none;
    &:hover {
        background: white;
        cursor: pointer;
    }
    @media (max-width: 900px) {
        width: 100%;
        margin-bottom: 1rem;
    }
`;

const ReserveButton = styled.button`
    width: 143px;
    height: 45px;
    border: none;
    background: #151515;
    color: white;
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    cursor: pointer;
    @media (max-width: 900px) {
        width: 100%;
    }
`;

//TODO: implement the images changing feature 
//TODO: map through data.js file and iterate through all the images
const Models = () => {
    return (
        <ModelsWrapper>
            <ModelCard>
                <PricingText>
                    <p>R1T | Starting at $73,000</p>
                </PricingText>
                <CardImage><img src="/image 3.png" alt="image3" /></CardImage>
                <ButtonsWrapper>
                    <LearnMoreButton>Learn More</LearnMoreButton>
                    <ReserveButton>Reserve an R1T</ReserveButton>
                </ButtonsWrapper>
            </ModelCard>
            <ModelCard>
                <PricingText>
                    <p>R1S | Starting at $73,000</p>
                </PricingText>
                <CardImage><img src="/image 3.png" alt="image3" /></CardImage>
                <ButtonsWrapper>
                    <LearnMoreButton>Learn More</LearnMoreButton>
                    <ReserveButton>Reserve an R1T</ReserveButton>
                </ButtonsWrapper>
            </ModelCard>
        </ModelsWrapper>
    );
}

export default Models;