import { FormControl, FormLabel, Select } from "@chakra-ui/react";

export default function Location() {
  return (
    <FormControl>
      <FormLabel htmlFor="" fontSize={"xs"} mb={0}>
        Locatie
      </FormLabel>
      <Select border={"none"} bg={"primary.200"} _hover={{ bg: "primary.500" }}>
        <option value="">Online</option>
        <option value="Bucuresti">Bucuresti</option>
        <option value="Cluj">Cluj</option>
      </Select>
    </FormControl>
  );
}
