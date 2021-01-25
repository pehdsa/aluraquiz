import styled from 'styled-components'

const Title = styled.h1`
    font-size: 50px;
    color: ${({ theme }) => theme.colors.primary};
`;

function Home() {
    return (
        <Title>My page 2</Title>
    )
}

export default Home;
