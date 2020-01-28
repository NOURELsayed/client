import React from 'react'
import { Container } from 'react-bootstrap';
import NavBar from "../components/Navbar";
import AboutTeamWork from "../components/AboutTeamWork"
export default function About() {
    return (
        <Container style={{
            paddingTop: "6rem",
            minHeight:"85vh"
        }}>
            <NavBar />
            <AboutTeamWork/>
            </Container>
    )
}
