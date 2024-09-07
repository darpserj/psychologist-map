import { FormControl, FormLabel, Select } from "@chakra-ui/react";

export default function DisorderType() {
  return (
    <FormControl>
      <FormLabel htmlFor="" fontSize={"xs"} mb={0}>
        Tip tulburare
      </FormLabel>
      <Select border={"none"} bg={"primary.200"} _hover={{ bg: "primary.500" }}>
        <option value="Anxietate">Anxietate</option>
        <option value="Depresie">Depresie</option>
        <option value="Tulburare de personalitate">Tulburare de personalitate</option>
        <option value="Tulburare de somn">Tulburare de somn</option>
      </Select>
    </FormControl>
  );
}
