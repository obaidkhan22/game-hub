import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImages from "./../service/img-url";
const GenresList = () => {
  const { data } = useGenres();
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={1}>
          <HStack>
            <Image
              boxSize="40px"
              borderRadius={8}
              src={getCroppedImages(genre.image_background)}
            />
            <Text fontSize="18px">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;
