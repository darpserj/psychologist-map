import { Checkbox, CheckboxGroup, FormControl, FormLabel, HStack, Radio, RadioGroup, VStack } from "@chakra-ui/react";

export default function AgeGroup() {
  return (
    <FormControl as="fieldset">
      <FormLabel as="legend" fontSize="xs" mb={0}>
        Grupa de varsta
      </FormLabel>
      <CheckboxGroup>
        <HStack wrap={"wrap"}>
          <Checkbox variant="fullSizeFilled" mb={2}>
            Tineri (24-30)
          </Checkbox>
          <Checkbox variant="fullSizeFilled" mb={2}>
            Mijlocii (30-45)
          </Checkbox>
          <Checkbox variant="fullSizeFilled" mb={2}>
            In varsta (45+)
          </Checkbox>
        </HStack>
      </CheckboxGroup>
    </FormControl>
  );
}
