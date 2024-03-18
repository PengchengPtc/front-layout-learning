/*
 * @Author: your name
 * @Date: 2021-07-29 16:44:44
 * @LastEditTime: 2021-07-29 17:01:01
 * @LastEditors: Please set LastEditors
 * @Description: 基于线的元素位置
 *  */

import { FC } from "react";
import styled from "styled-components";

export const Grid: FC = () => {
  return (
    <GridContainer>
      <GridItem>1</GridItem>
      <GridItem>2</GridItem>
    </GridContainer>
  );
};

// 实现自适应列
const GridContainer = styled.div`
  display: inline-grid;
  width: 300px;
  height: 300px;
  background-color: skyblue;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
`;
const GridItem = styled.div`
  &:nth-child(1) {
    background-color: pink;
    border: 1px solid black;
    grid-column-start:  2;
    grid-column-end: span 2; // span向后占两列
    /* grid-column-end: 3; */
    /* 默认值式:auto */
    /* grid-row-start: 2;
    grid-row-end: 4; */
  }
  &:nth-child(2) {
    background-color: pink;
    border: 1px solid black;}
`;
