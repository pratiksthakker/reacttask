import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const ItemContainer = styled.div`
    width: 200px;
    height: 200px;
    border: 1px solid #d3d3d3;
    border-radius: 5px;
    margin: 25px;
    background-color: #ffffff;
`;

const ItemInfo = styled.div`
    height: 160px;
    width: 200px;
    text-align: center;
    padding: 50px 0;
    box-sizing: border-box;
`;

const UpdateQuantity = styled.div`
    height: 40px;
    width: 200px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`;

const Paragraph = styled.p`
    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
`;
const ItemName = styled(Paragraph)`
    font-size: 25px;
`;

const ItemPrice = styled(Paragraph)`
    font-size: 15px;
    font-style: italic;
`;

const NumberOfUnits = styled(Paragraph)`
    font-weight: 500;
`;

const AddButton = styled.button`
    border: 1px solid #d3d3d3;
    &:hover {
        cursor: pointer;
    }
`;

const MinusButton = styled.button`
    border: 1px solid #d3d3d3;
    &:hover {
        cursor: pointer;
    }
`;

const ShoppingItem = (shoppingItemProps) => {
    const { item, onAddClick, onRemoveClick } = shoppingItemProps;
    return <ItemContainer>
        <ItemInfo>
            <ItemName>{item.name}</ItemName>
            <ItemPrice>$ {item.price}</ItemPrice>
        </ItemInfo>
        <UpdateQuantity>
            <AddButton><FontAwesomeIcon icon={faPlus} onClick={() => { onAddClick(item.name) }} /></AddButton>
            <NumberOfUnits>{item.quantity}</NumberOfUnits>
            <MinusButton><FontAwesomeIcon icon={faMinus} onClick={() => { onRemoveClick(item.name) }} /></MinusButton>
        </UpdateQuantity>
    </ItemContainer>;
};

export default ShoppingItem;