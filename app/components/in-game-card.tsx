import MainText from "@/app/components/main-text";
import { Card, CardContent } from "@/components/ui/card";

type Props = {};

export default function InGameCard({}: Props) {
  return (
    <Card>
      <CardContent className="flex justify-center">
        <MainText />
      </CardContent>
    </Card>
  );
}
