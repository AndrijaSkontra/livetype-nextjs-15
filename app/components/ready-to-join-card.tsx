import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Props = {};

export default function ReadyToJoinCard({}: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Ready to join a game?</CardTitle>
        <CardDescription>Click Connect to start typing</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center">
        <Button>Connect</Button>
      </CardContent>
    </Card>
  );
}
