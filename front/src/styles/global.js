import styled from 'styled-components'
import { Breakpoint } from './variables'

export const Wrapper = styled.div`
    padding: 0 60px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    min-height: 100%;

    @media screen and (max-width: ${Breakpoint.s}) {
        padding: 0 13px;
    }
`;

export const Navigation = styled.div`
    margin-bottom: 43px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
