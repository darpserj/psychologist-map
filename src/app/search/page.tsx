import SearchFilters from "@/components/SearchFilter/";
import SearchResults from "@/components/SearchResults";
import { Container, Grid, GridItem } from "@chakra-ui/react";

export default function Search() {
  return (
    <Container maxW={{ base: "sm", lg: "6xl" }} p={4} centerContent>
      <Grid gridTemplateColumns={{ lg: "repeat(5, 1fr)" }} w="100%" gap={4}>
        <GridItem colSpan={{ lg: 1 }}>
          <SearchFilters />
        </GridItem>
        <GridItem colSpan={{ lg: 4 }}>
          <SearchResults />
        </GridItem>
      </Grid>
    </Container>
  );
}
