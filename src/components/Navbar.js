import React from 'react';
import {Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Seacrh } from './Search';


export const NavbarPeliculas = () => {

    return (
        <div>
            <Navbar style={{background:"#176c7f"}}>
            <Container>
                <Navbar.Text >
                    <img src="https://1000marcas.net/wp-content/uploads/2019/12/logo-StarWars.png" alt="Imagen pelicula" width="100"  />
                    <label style={{color:"white", fontSize:"20px", marginLeft:"150px"}}>
                        <svg width="22" height="22" fill="currentColor" class="bi bi-film" viewBox="0 0 16 16">
                            <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z"/>
                        </svg>
                        . Peliculas
                    </label>
                </Navbar.Text>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-start">
                    <Navbar.Text style={{color:"white", fontSize:"20px", marginLeft:"150px", display: "flex" }}>
                            <svg width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                            <Seacrh/>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    )
};
