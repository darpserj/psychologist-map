import { FormControl, FormLabel, Select } from "@chakra-ui/react";

export default function TherapyType() {
  return (
    <FormControl>
      <FormLabel htmlFor="" fontSize={"xs"} mb={0}>
        Tip Terapie / Serviciu
      </FormLabel>
      <Select border={"none"} bg={"primary.200"} _hover={{ bg: "primary.500" }}>
        <option value="Cognitiv-Comportamentala">Cognitiv-Comportamentala</option>
        <option value="Psihodinamica">Psihodinamica</option>
        <option value="Sistemica">Sistemica</option>
        <option value="Analiza Tranzactionala">Analiza Tranzactionala</option>
        <option value="Gestalt">Gestalt</option>
        <option value="Hipnoza">Hipnoza</option>
        <option value="Terapie de cuplu">Terapie de cuplu</option>
        <option value="Terapie de familie">Terapie de familie</option>
        <option value="Terapie de grup">Terapie de grup</option>
        <option value="Terapie de joc">Terapie de joc</option>
        <option value="Terapie de limbaj">Terapie de limbaj</option>
        <option value="Terapie de poveste">Terapie de poveste</option>
        <option value="Terapie de relaxare">Terapie de relaxare</option>
      </Select>
    </FormControl>
  );
}
