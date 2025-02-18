import RoomPlayersTable from "@/app/components/room-players-table";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Props = {};

export default function LobbyCard({}: Props) {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Room ID: #345j34</CardTitle>
          <CardDescription>Waiting for more players...</CardDescription>
        </CardHeader>
        <CardContent className="space-y-12">
          <RoomPlayersTable />
          <div className="flex w-full justify-end">
            <Button variant={"destructive"}>Disconnect</Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
