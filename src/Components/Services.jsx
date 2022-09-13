import styled from "styled-components";

const ServicesWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const SpacesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    border: 1px solid red;
    width: 100%;
    margin-top: 10rem;
    @media (max-width: 900px) {
        flex-direction: column;
        width: 90%;
    }
`;

const SpacesContainer = styled.div`
    width: 970px;
    height: 702px;
    background: white;
    background-size: 100%;
    border: 1px solid blue;
    @media (max-width: 900px) {
        flex-direction: column;
        width: 100%;
    }
`;

const BottomText = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: left;
    border: 1px solid blue;
    width: 92;
    margin: auto;
`;

const BottomWrapper = styled.div`
    display: flex;
    flex-direction: row;
    /* justify-content: center; */
    justify-content: space-around;
    margin: auto;
    border: 1px solid red;
    @media (max-width: 900px) {
        flex-direction: column;
        width: 100%;
    }
`;

const ServiceWrapper = styled.div`
    display: flex;
    flex-direction: column;
    @media (max-width: 900px) {
        flex-direction: column;
        width: 100%;
    }
`;

const ServiceContainer = styled.div`
    width: 478px;
    height: 330px;
    background: white;
    margin: 1rem;
    @media (max-width: 900px) {
        flex-direction: column;
        width: 92%;
        margin: auto;
        margin-bottom: 1rem;
    }
`;


const Services = () => {
    return (
        <ServicesWrapper>
            <SpacesWrapper>
                <SpacesContainer>Spaces section</SpacesContainer>
                <BottomText>
                    <h3>Spaces</h3>
                    <p>Building places to gather.</p>
                </BottomText>
            </SpacesWrapper>
            <BottomWrapper>
                <ServiceWrapper>
                    <ServiceContainer>Services section</ServiceContainer>
                    <BottomText>
                        <h3>Spaces</h3>
                        <p>Building places to gather.</p>
                    </BottomText>
                </ServiceWrapper>
                <ServiceWrapper>
                    <ServiceContainer>Services section</ServiceContainer>
                    <BottomText>
                        <h3>Spaces</h3>
                        <p>Building places to gather.</p>
                    </BottomText>
                </ServiceWrapper>
            </BottomWrapper>
        </ServicesWrapper>
    );
}

export default Services;