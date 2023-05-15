import styled  from "styled-components"
import { device } from "../utils/device"


export const CardListStyle =  styled.div`
  width: 85vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto;
  justify-content: center;
  align-items: center;
  grid-gap: 10px;

  @media ${device.tablet}{
    grid-template-columns: auto auto auto;
  }

`
