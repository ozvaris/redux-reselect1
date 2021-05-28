import React, { Component } from "react";
import { Container, FlexBox, FlexItem, Title, Card } from "./components/common";
import Album from "./components/Album";
import Post from "./components/Post";

const App = () => (
  <Container>
    <Title>redux-reselect demo</Title>
    <div
      style={{
        textAlign: "left",
        padding: "50px"
      }}
    >
      <p>
        In React, if a component's state or props change, then that component
        and any of it's child components are re-rendered by default. In Redux,
        any changes to the store's state triggers a re-render of the entire
        store. This means that there is a good chance that any component that is
        mapped to redux state will re-render any time <b>any</b> state in the
        Redux store changes...along with any of it's child components.
        react-redux does what it can to mitigate unnecessary re-renders, but has
        it's limitations.
      </p>
      <p>
        Reselect is a library provided by the React team that uses memoized
        selectors to avoid unnecessary re-renders, which can make your app much
        more performant.
      </p>

      <p>
        This example includes two seperate components, <code>Album</code>
        &nbsp;and <code>Post</code>.
      </p>
      <p>
        Each component is mapped to a corresponding action creator that
        retrieves a single random item from the JSONPlaceholder API each time
        the <code>Fetch Data</code> button is pressed. The data is stored in a
        seperate reducer for each component and neither component shares any
        Redux state.
      </p>
      <p>
        In each <code>mapStateToProps</code> function, the data is mapped to the
        corresponding component both with Reselect and without Reselect. There
        is a re-render counter for both. This counter represents the number of
        times that each component would be re-rendered due to <b>any</b> changes
        to the state in the Redux store.
      </p>
      <p>
        When you fetch the data for either component, then you should notice
        that the re-render count will update for both components even though the
        Redux state in only one component changed. This is the default behavior
        we described above. And, although react-redux does a shallow comparison,
        we are losing reference each time we fetch the data because the state is
        replaced with a new object. So, we can't use the optimizations provided
        by a library written for Redux because Redux makes us keep our state
        pure :/
      </p>
      <p>
        You should also notice that the Reselect re-render count does not
        increase for a component if it's mapped Redux state did not change. A
        Reselect selector is only ever updated if it's state actually changes.
        While React is really good at updating the DOM only as needed,
        unnecessary re-renders and selector computations can still affect your
        app's performance. Reselect is only a minor overhead for a more
        performant and scalable app.
      </p>

      <p>
        <a href="https://github.com/reactjs/reselect" target="_blank">
          Visit Reselect's GitHub page
        </a>
      </p>
      <p>
        <a href="https://www.youtube.com/watch?v=6Xwo5mVxDqI" target="_blank">
          A great video explaining Reselect by Frankie Bagnardi
        </a>
      </p>
      <p>
        <a
          href="https://www.youtube.com/watch?v=XCQ0ZSr-a2o&t=892s"
          target="_blank"
        >
          Another great video explaining Reselect by Stephen Grider
        </a>
      </p>
    </div>

    <FlexBox>
      <FlexItem>
        <Card>
          <h1>Album</h1>
          <Album />
        </Card>
      </FlexItem>

      <FlexItem>
        <Card>
          <h1>Post</h1>
          <Post />
        </Card>
      </FlexItem>
    </FlexBox>
  </Container>
);

export default App;
