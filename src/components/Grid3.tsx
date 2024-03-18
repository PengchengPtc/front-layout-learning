/*
 * @Author: your name
 * @Date: 2021-07-29 16:44:44
 * @LastEditTime: 2021-07-29 17:01:01
 * @LastEditors: Please set LastEditors
 * @Description: 隐式网格
 *  */


import { FC } from "react";
import styled from "styled-components";

export const Grid: FC = () => {
  return (
    <GridContainer>
      <GridItem>1</GridItem>
      <GridItem>2</GridItem>
      <GridItem>3</GridItem>
      {/* 4，5占的是隐式网格 */}
      <GridItem>4</GridItem>
      <GridItem>5</GridItem>
    </GridContainer>
  );
};

const GridContainer = styled.div`
  display: grid;
  height: 300px;
  width: 300px;
  background-color: skyblue;
  // 100px 3列
  /* grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px; */
  /* 默认：row就是行产生隐式网格 */
  /* grid-auto-flow: row; */
  /* 可以调节产生隐式网格的高度 */
  /* grid-auto-rows: 100px; */
  /* column就是列产生隐式网格 */
  grid-template-columns: 100px;
  grid-template-rows: 100px 100px 100px;
  grid-auto-flow: column;
  grid-auto-columns: 100px;
`;
const GridItem = styled.div`
  background-color: pink;
  border: 1px solid black;
`;
