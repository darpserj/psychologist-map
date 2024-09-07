import { FormControl, FormLabel, Select } from "@chakra-ui/react";

export default function Language() {
  return (
    <FormControl>
      <FormLabel htmlFor="" fontSize={"xs"} mb={0}>
        Limba
      </FormLabel>
      <Select border={"none"} bg={"primary.200"} _hover={{ bg: "primary.500" }}>
        <option value="">Romana</option>
        <option value="">Engleza</option>
        <option value="crestin">Maghiara</option>
      </Select>
    </FormControl>
  );
}
