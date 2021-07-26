import ReactShallowRenderer from 'react-test-renderer/shallow'
import React from "react";
import NavHeader from "../../components/NavHeader";
test('component navHeader', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<NavHeader />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
});