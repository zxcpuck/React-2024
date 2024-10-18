import React from 'react';
import MenuToUsers from "../../MenuLinks/MenuToUsers";
import MenuToMain from "../../MenuLinks/MenuToMain";
import MenuToPosts from "../../MenuLinks/MenuToPosts";
import MenuToComments from "../../MenuLinks/MenuToComments";

const Menu = () => {
    return (
        <div>
            <ul>
                <li>
                    <MenuToMain/>
                </li>
                <li>
                    <MenuToUsers/>
                </li>
                <li>
                    <MenuToPosts/>
                </li>
                <li>
                    <MenuToComments/>
                </li>
            </ul>
        </div>
    );
};

export default Menu;