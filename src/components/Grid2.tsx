/*
 * @Author: your name
 * @Date: 2021-07-29 16:44:44
 * @LastEditTime: 2021-07-29 17:01:01
 * @LastEditors: Please set LastEditors
 * @Description: 设置子元素位置
 *  */

import { FC } from "react";
import styled from "styled-components";

export const Grid2: FC = () => {
  return (
    <GridContainer>
      <GridItem>1</GridItem>
      <GridItem>2</GridItem>
      <GridItem>3</GridItem>
      <GridItem>4</GridItem>
      <GridItem>5</GridItem>
      <GridItem>6</GridItem>
      <GridItem>7</GridItem>
      <GridItem>8</GridItem>
      <GridItem>9</GridItem>
    </GridContainer>
  );
};

const GridContainer = styled.div`
  display: grid;
  height: 500px;
  width: 500px;
  background-color: skyblue;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
  /* justify-items: center;
  align-items: center; */
  place-items: end start;
  /* justify-content: space-evenly;
  align-content: end; */
  place-content: end space-evenly;
`;
const GridItem = styled.div`
  background-color: pink;
  border: 1px solid black;
  width: 50px;
  height: 50px;
`;
