import React from "react";
import ActionButton from "../containers/ActionButton";
import Information from "../containers/Information";
import Input from "../containers/Input";

const App = () => (
  <div>
    <Information />
    <table>
      <tr>
        <td colSpan="2">
          <Input />
        </td>
      </tr>
      <tr>
        <td>
          <ActionButton buttonText="+" buttonType="Increment" />
        </td>
        <td>
          <ActionButton buttonText="-" buttonType="Decrease" />
        </td>
      </tr>
    </table>
  </div>
);

export default App;
