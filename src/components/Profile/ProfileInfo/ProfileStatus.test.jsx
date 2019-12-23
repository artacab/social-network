import React from "react"
import {create} from "react-test-renderer"
import ProfileStatus from "./ProfileStatus";

describe("asas", () => {
    test("asgwegewg", () => {
        const component = create (<ProfileStatus status="bald guy"/>)
        const instance = component.getInstance();
        expect(instance.state.status).toBe("bald guy");
    });
    test("span", () => {
        const component = create (<ProfileStatus status="bald guy"/>)
        const root = component.root;
        let span = root.findByType("span")
        expect(span).not.toBeNull();
    });
    test("span2", () => {
        const component = create (<ProfileStatus status="bald guy"/>)
        const root = component.root;
        let span = root.findByType("span")
        expect(span.children[0]).toBe("bald guy");
    });
    test("input editMode", () => {
        const component = create (<ProfileStatus status="bald guy"/>)
        const root = component.root;
        let span = root.findByType("span")
        span.props.onDoubleClick();
        let input = root.findByType("input")
        expect(input.props.value).toBe("bald guy");
    });
});