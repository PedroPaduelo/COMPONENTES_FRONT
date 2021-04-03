import styled, {css} from 'styled-components';

export const Container = styled.div`

    padding: 0 15px;
    height: 100%;
    flex: 0 0 28rem;

    opacity: ${props => props.done === 1 ? 0.6 : 1};


    & + div{
        border-left: 1px solid rgba(0, 0, 0, 0.05)
    }

    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 3rem;

        h2{
            font-weight: 700;
            font-size: 16px;
            padding: 0 10px;
        }

        button{
            width: 30px;
            height: 30px;
            border-radius: 10px;
            background: #3b5bfd;
            border: 0;
            cursor: pointer;
        }
    }

    ul {
        margin-top: 2rem;
    }
`;


export const ModalCss =css`

    top                   : '50%';
    left                  : '50%';
    right                 : 'auto';
    bottom                : 'auto';
    margin-right          : '-50%';
    transform             : 'translate(-50%, -50%)';
    width                 : '100rem'

`;

