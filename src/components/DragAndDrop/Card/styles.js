import styled, { css } from 'styled-components';

export const Container = styled.div`
    position: relative;
    background: #fff;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 15px;
    box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
    border-top: 20px solid  rgba(179, 179, 179, 0.4);
    cursor: grab;
    
    header{
        position: absolute;
        top: -1.8rem;
        left: 15px; 
    }

    p{
        font-weight: 500;
        font-size: 1.3rem;
        line-height: 1.8rem;
    }

    img{
        width: 24px;
        height: 24px;
        border-radius: 50%;
        margin-top: 1px;
    }

    ${props => props.isDragging && css`
        border: 2px dashed rgba(0,0,0,0.2);
        padding-top: 31px;
        border-radius: 0;
        background: transparent;
        box-shadow: none;
        cursor: grabbing;

        p, img, header{
            opacity: 0;
        }
    
    `}

`;

export const Label = styled.span`
    width: 20px;
    height: 10px;
    border-radius: 2px;
    display: inline-block;
    background: ${props => props.color};
    margin: 0.2rem;


`;