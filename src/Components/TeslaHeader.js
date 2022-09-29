import styled from "styled-components";

function TeslaHeader(){
    return(
        <MainMenu>
        <Navbar>
        <Logo>
            <img src="images/tesla-logo.png" />
        </Logo>
        <CenterMenu>
            <ul>
                <li><a href="">Model S</a></li>
                <li><a href="">Model 3</a></li>
                <li><a href="">Model X</a></li>
                <li><a href="">Model Y</a></li>
                <li><a href="">Solar Roof</a></li>
                <li><a href="">Solar Panels</a></li>
            </ul>
        </CenterMenu>
        <RightMenu>
        <ul>
                <li><a href="">Shop</a></li>
                <li><a href="">Account</a></li>
                <li><a href="">Menu</a></li>
            </ul>
        </RightMenu>
        </Navbar>
        </MainMenu>
    )
}

const MainMenu = styled.nav`
    position: fixed;
`
const Navbar = styled.nav`
    display: flex;
    padding: 0rem 1.8rem;
    align-items: center;
    gap: 9rem;

    ul{
        display: flex;
    }

    ul li{
        list-style: none;
        margin: 0rem 1.6rem;
        font-size: 1.5rem
    }

    ul li a{
        text-decoration: none;
        color: black;
        font-weight: bold;
    }

    ul li a:hover{
        color: blue;
    }
`

const Logo = styled.div`
    img{
        width: 100px;
        padding: 0rem 1.5rem;
    }
`

const CenterMenu = styled.div``

const RightMenu = styled.div`
    
`

export default TeslaHeader;