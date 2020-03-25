
import React from 'react';
import ReactDOM from 'react-dom'
import Ads from './../index'
import "@testing-library/jest-dom"; 
import renderer from 'react-test-renderer'

it('render without crashing', ()=>{
    const div = document.createElement('div');
    ReactDOM.render(<Ads></Ads>, div)
})


it('matches snapshots', ()=>{
    const tree = renderer.create(<Ads/>).toJSON()
    expect(tree).toMatchSnapshot();
})