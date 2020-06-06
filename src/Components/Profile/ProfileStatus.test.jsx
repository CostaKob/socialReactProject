import React from 'react';
import { create } from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

describe('ProfileStatus Component', () => {
    test('status from the props should be in the state', () => {
        const component = create(<ProfileStatus status="test state" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("test state");
    });
    test('after creation <span> should be displayed with correct status', () => {
        const component = create(<ProfileStatus status="test state" />);
        const root = component.root;
        let span = root.findByType("span");
        expect(span).not.toBeNull();
    });
    test('after creation <span> shouldnt be displayed', () => {
        const component = create(<ProfileStatus status="test state" />);
        const root = component.root;
        expect(() => {
            let input = root.findByType("input");
        }).toThrow();
    });
    test('after creation <span> should contain correct status', () => {
        const component = create(<ProfileStatus status="test state" />);
        const root = component.root;
        let span = root.findByType("span");
        expect(span.children[0]).toBe("test state");
    });
    test('input should be displayed in editMode instead of span', () => {
        const component = create(<ProfileStatus status="test state" />);
        const root = component.root;
        let span = root.findByType("span");
        span.props.onDoubleClick();
        let input = root.findByType("input");
        expect(input.props.value).toBe("test state");
    });
    // test('callbach should be called', () => {
    //     const mockCallback = jest.fn();
    //     const component = create(<ProfileStatusWithHooks status="test state" updateStatus={ mockCallback }/>);
    //     const instance = component.getInstance();
    //     instance.deactivateEditMode();
    //     expect(mockCallback.mock.calls.length).toBe(1);
    // });

});
