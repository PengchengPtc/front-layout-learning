/*
 * @Author: your name
 * @Date: 2021-07-29 16:44:44
 * @LastEditTime: 2021-07-29 17:01:01
 * @LastEditors: Please set LastEditors
 * @Description: 自适应列/行
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
      <GridItem>6</GridItem>
      <GridItem>7</GridItem>
      <GridItem>8</GridItem>
    </GridContainer>
  );
};

// 实现自适应列
const GridContainer = styled.div`
  display: inline-grid;
  height: 300px;
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
  grid-auto-flow: column dense; /* dense 紧密的，那下面的 grid-row-start 就失效了 */
  // 产生隐式网格的宽度
  grid-auto-columns: 100px;
`;
const GridItem = styled.div`
  background-color: pink;
  border: 1px solid black;
  // 意思是从第一列第二行开始排列
  /* & 代表的是当前选择的元素，所以 &:nth-of-type(1) 选择的是每个父元素中第一个当前类型的元素。 */
  &:nth-of-type(1) {
    grid-row-start: 2;
  }
`;
