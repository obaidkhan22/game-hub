import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  const color = score > 75 ? "green" : score > 60 ? "yello" : "";
  return (
    <Badge colorScheme={color} fontSize="14px" paddingX={2} borderRadius="7px">
      {score}
    </Badge>
  );
};

export default CriticScore;