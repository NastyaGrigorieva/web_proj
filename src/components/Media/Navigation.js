import React from 'react';
import styled from 'styled-components';
import {GenresSelect} from "../GenresSelect";
import {UserInfo} from "../User/User";
import {ToggleThem} from "../ToggleThem";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 0 15px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: rgba(41, 73, 101, 0.83);
    position: fixed;
    transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 220px;
    border-bottom-left-radius: 44px;
    width: 230px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
      padding-top: 15px;
    }
  }
`;
const Div = styled.div`
  @media (max-width: 768px) {
    padding-top: 4vh;
  }
`;

export const RightNav = ({ open }) => {
    return (
        <Ul open={open}>
            <Div><div> </div></Div>
            {/*<li><SearchPanel/></li>*/}
            <li><GenresSelect/></li>
            <li><UserInfo/></li>
            <li><ToggleThem/></li>
        </Ul>
    )
}