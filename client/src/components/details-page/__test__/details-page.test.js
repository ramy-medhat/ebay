
import React from 'react';
import ReactDOM from 'react-dom'
import Details from './../index'
import "@testing-library/jest-dom"; 
import renderer from 'react-test-renderer'

it('render without crashing', ()=>{
    const div = document.createElement('div');
    ReactDOM.render(<Details></Details>, div)
})


it('matches snapshots', ()=>{
    const tree = renderer.create(<Details/>).toJSON()
    expect(tree).toMatchSnapshot();
})