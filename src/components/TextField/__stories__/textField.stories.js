import React from "react";
import { Story } from "@storybook/addon-docs/blocks";
import InputField from "../InputField";
import {
  ComponentStateDescription,
  FlexLayout,
  Divider
} from "../../storybook-helpers";
import { text, boolean, number, select } from "@storybook/addon-knobs";
import StoryWrapper from "../../../StoryBookComponents/StoryWrapper/StoryWrapper";
import TextFieldStoryBookLine from "./TextFieldStoryBookLine";

export const Sandbox = () => {
  return (
    <div style={{ width: "35%", margin: "0 auto" }}>
      <InputField
        autoFocus={boolean("Autofocus", true)}
        placeholder={text("Placeholder", "default placeholder")}
        debounceRate={number("Debounce Rate (see console log)", 0)}
        onChange={value => console.log(value)}
        value={text("Initial Value", "")}
        iconName={text("Primary Icon Name", "fa-circle")}
        secondaryIconName={text("Secondary Icon Name", "")}
        validation={select(
          "Validation State",
          {
            None: null,
            Error: { status: "error", text: "error" },
            Success: { status: "success", text: "success" },
            Assist: { status: "", text: "assist text" }
          },
          { status: "", text: "assist text" }
        )}
        id="Knobs"
        disabled={boolean("Disabled", false)}
        size={select("Size", { Small: "s", Medium: "md", Large: "l" }, "md")}
        clearOnIconClick={boolean("clear data in icon click", true)}
        labelIconName={text("FieldLabel Icon Name", "fa-envelope")}
        title={text("Text filed label", "FieldLabel")}
        showCharCount={boolean("show hide char count", true)}
      />
    </div>
  );
};
export const Sizes = () => {
  return (
    <StoryWrapper>
      <TextFieldStoryBookLine title="Small - 32px">
        <InputField id="_1" placeholder="Placeholder text" />
      </TextFieldStoryBookLine>
      <TextFieldStoryBookLine title="Medium - 40px">
        <InputField id="_2" placeholder="Placeholder text" size="md" />
      </TextFieldStoryBookLine>
      <TextFieldStoryBookLine title="Large - 48px">
        <InputField id="_3" placeholder="Placeholder text" size="l" />
      </TextFieldStoryBookLine>
    </StoryWrapper>
  );
};

export const States = () => {
  return (
    <StoryWrapper>
      <FlexLayout>
        <ComponentStateDescription title="Disabled" />
        <div className="width-35">
          <InputField
            id="_5"
            disabled
            placeholder="Placeholder text"
            size="md"
          />
        </div>
      </FlexLayout>
      <FlexLayout>
        <ComponentStateDescription title="With Icon" />
        <div className="width-35">
          <InputField
            id="_4"
            iconName="fa-star"
            placeholder="Placeholder text"
            size="md"
            value="initial value"
          />
        </div>
      </FlexLayout>
      <FlexLayout>
        <ComponentStateDescription title="Active/Focus" />
        <div className="width-35">
          <InputField
            id="_6"
            autoFocus
            placeholder="Placeholder text"
            size="md"
          />
        </div>
      </FlexLayout>
      <FlexLayout>
        <ComponentStateDescription title="All Good" />
        <div style={{ width: "35%", marginRight: "5%" }}>
          <InputField
            id="_7"
            iconName="fa-check"
            validation={{ status: "success" }}
            placeholder="Placeholder text"
            size="md"
          />
        </div>
        <div className="width-35">
          <InputField
            showCharCount
            id="_7"
            iconName="fa-check"
            validation={{ status: "success", text: "good job!" }}
            placeholder="Placeholder text"
            size="md"
          />
        </div>
      </FlexLayout>
      <FlexLayout>
        <ComponentStateDescription title="Error" />
        <div style={{ width: "35%", marginRight: "5%" }}>
          <InputField
            id="_8"
            iconName="fa-exclamation-circle"
            validation={{ status: "error" }}
            placeholder="Placeholder text"
            size="md"
          />
        </div>
        <div className="width-35">
          <InputField
            id="_8"
            showCharCount
            iconName="fa-exclamation-circle"
            validation={{ status: "error", text: "try again" }}
            placeholder="Placeholder text"
            size="md"
          />
        </div>
      </FlexLayout>
      <FlexLayout>
        <ComponentStateDescription title="With FieldLabel" />
        <div className="width-35">
          <InputField
            id="_9"
            title="Title"
            placeholder="Placeholder text"
            size="md"
          />
        </div>
      </FlexLayout>
      <FlexLayout>
        <ComponentStateDescription title="With FieldLabel and Icon" />
        <div style={{ width: "35%", marginRight: "5%" }}>
          <InputField
            id="_10"
            title="Title"
            labelIconName="fa-envelope"
            placeholder="Placeholder text"
            size="md"
          />
        </div>
        <div className="width-35">
          <InputField
            id="_10"
            title="Title"
            labelIconName="fa-envelope"
            placeholder="Placeholder text"
            size="md"
            validation={{ text: "Assist text" }}
          />
        </div>
      </FlexLayout>
    </StoryWrapper>
  );
};

export default {
  title: "Components/Text Field",
  component: InputField
};
