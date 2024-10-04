import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

const SoreSelector = () => {
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                Order by: Relevance
            </MenuButton>
            <MenuList>
                <MenuItem>Item 1</MenuItem>
                <MenuItem>Item 2</MenuItem>
                <MenuItem>Item 3</MenuItem>
                <MenuItem>Item 4</MenuItem>
                <MenuItem>Item 5</MenuItem>
                <MenuItem>Item 6</MenuItem>
            </MenuList>
        </Menu>
    );
};

export default SoreSelector;
