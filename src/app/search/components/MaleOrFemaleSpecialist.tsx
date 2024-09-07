"use client";

import { Radio, RadioGroup, Stack, FormControl, FormLabel } from "@chakra-ui/react";
import { useState } from "react";
import { BiFemale, BiMale } from "react-icons/bi";

export default function MaleOrFemaleSpecialist() {
  const [value, setValue] = useState<string | undefined>(undefined);

  return (
    <FormControl as="fieldset">
      <FormLabel as="legend" fontSize={"xs"} mb={0}>
        Sex
      </FormLabel>
      <RadioGroup name="form-name" onChange={setValue} value={value} display={"flex"} gap={4} flexWrap={"wrap"}>
        <Radio isChecked value="male" variant={"filledRadio"} flexShrink={1}>
          <BiMale aria-disabled />
          <span className="text-xs">Barbati</span>
        </Radio>
        <Radio value="female" variant={"filledRadio"} flexShrink={1}>
          <BiFemale aria-disabled />
          <span className="text-xs">Femei</span>
        </Radio>
        <Radio value="both" variant={"filledRadio"} flexShrink={1}>
          <span className="text-xs">Ambele</span>
        </Radio>
      </RadioGroup>
    </FormControl>
  );
}
