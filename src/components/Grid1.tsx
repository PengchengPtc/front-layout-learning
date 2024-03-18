/*
 * @Author: your name
 * @Date: 2021-07-29 16:44:44
 * @LastEditTime: 2021-07-29 17:01:01
 * @LastEditors: Please set LastEditors
 * @Description: 表格合并
 *  */

import { FC } from "react";
import styled from "styled-components";

export const Grid1: FC = () => {
  return (
    <GridContainer>
      <GridItem>1</GridItem>
      <GridItem>2</GridItem>
      <GridItem>3</GridItem>
      {/* <GridItem>4</GridItem>
      <GridItem>5</GridItem>
      <GridItem>6</GridItem> */}
      {/* <GridItem>7</GridItem>
      <GridItem>8</GridItem>
      <GridItem>9</GridItem> */}
    </GridContainer>
  );
};

const GridContainer = styled.div`
  display: grid;
  height: 300px;
  width: 300px;
  background-color: skyblue;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  // 这里只是定义没有使用
  grid-template-areas: "a1 a1 a2" "a1 a1 a2" "a3 a3 a3";
  /* grid-row-gap: 10px;
  grid-column-gap: 10px; */
  /* row-gap: 10px;
  column-gap: 10px; */
  /* grid-gap: 10px 30px; // 这个是上面两个的简写 */
  gap: 10px 30px;
`;
const GridItem = styled.div`
  background-color: pink;
  border: 1px solid black;
  /* box-sizing: border-box; */
  &:nth-child(1) {
    grid-area: a1; // 占四个
  }
  &:nth-child(2) {
    grid-area: a2; // 占一个
  }
  &:nth-child(3) {
    grid-area: a3; // 占一个
  }
`;
