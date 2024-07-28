import { render , fireEvent } from "@testing-library/react";
import { Checkbox } from "./Checkbox";


test("Selecting the checkbox should change value of checked to True",() => {
    const { getByLabelText } = render(<Checkbox/>);
    const checkbox = getByLabelText(/not checked/i);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(true);
});