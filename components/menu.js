import React, { useState } from 'react';

export default function menu() {

      return (
            <div className="menuPrincipal">
                  <div className="menuFixed">
                        <img id="logo" src="/static/logo/logo.svg" />
                        <img id="menu" src="/static/menu/menu.svg" />
                  </div>
                  <div className="menuColor">
                        <nav className="menuA">
                              <ul>
                                    <li>Menu</li>
                                    <li>Projetos</li>
                                    <li>Serviços</li>
                                    <li>Investimentos</li>
                                    <li>A Artcode</li>
                              </ul>
                        </nav>
                        <nav className="menuB">
                              <ul>
                                    <li>Contato</li>
                                    <li>Email</li>
                                    <li>Clique para no enviar um e-mail</li>
                                    <li>Telefone</li>
                                    <li>Sede</li>
                                    <li>Endereço</li>
                                    <li>Legal</li>
                                    <li>Termos de Privacidade</li>
                              </ul>
                        </nav>
                  </div>

            </div>
      )
}