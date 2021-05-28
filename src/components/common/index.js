import styled from "styled-components";
import React from "react";

export const Button = styled.button`
  height: 45px;
  width: 150px;
  border: 2px solid #222;
  border-radius: 10px;
  font-size: 25px;
  color: #222;
  margin: 15px;
  cursor: pointer;
  outline: none;

  :hover {
    background-color: #222;
    color: lightgray;
  }
`;

export const Card = styled.div`
  border: 1px solid lightgray;
  border-radius: 10px;
  margin: 10px;
  padding: 5px;
  box-shadow: 1px 1px 11px -1px rgba(140, 140, 140, 1);
  min-height: 350px;
  background-color: ${props => props.bg || "white"};
  color: ${props => props.color || "#222"};
  padding: 10px;
  overflow: auto;
`;

export const Container = styled.div`
  text-align: center;
  width: 100%;
  max-width: 100vw;
  margin-bottom: 48px;
`;

export const FlexBox = styled.div`
  display: flex;
`;

export const FlexItem = styled.div`
  flex: 1;
`;

export const Counter = styled.span`
  color: firebrick;
`;

export const Title = styled.div`
  color: firebrick;
  width: 100%;
  text-align: center;
  margin: 0px;
  padding: 10px;
  font-size: 50px;
`;

export class List extends React.Component {
  render() {
    const { fetch, data, count, reselectCount } = this.props;
    return (
      <div>
        <h3>
          <Counter>{count} </Counter>re-renders
        </h3>
        <h3>
          <Counter>{reselectCount} </Counter>Reselect re-renders
        </h3>
        <Button onClick={fetch}>Fetch Data</Button>
        {renderList(data)}
      </div>
    );
  }
}

const renderList = data => (
  <React.Fragment>
    <p style={{ color: "firebrick" }}>{data && data.title}</p>
  </React.Fragment>
);
