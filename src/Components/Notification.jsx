import styled from "styled-components";

const NoticationWrapper = styled.div`
    width: 100%;
    height: 55px;
    overflow: hidden;
    background: #E9DFCA;;
    position: sticky;
    z-index: 999;
`;

const NotificationText = styled.div`
    display: flex;
    justify-content: center;
    margin: 0.55rem;
    text-align: center;
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 300;
    font-size: 11px;
    color: #000000;
`;

const Notification = () => {
    return (
        <NoticationWrapper>
            <NotificationText>
                <p>Sign up to learn about demo drives and events in your area.</p>
            </NotificationText>
        </NoticationWrapper>
    );
}

export default Notification;