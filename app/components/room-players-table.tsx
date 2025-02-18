import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Props = {};

export default function RoomPlayersTable({}: Props) {
  return (
    <div>
      <Table>
        <TableCaption>
          Make sure your fingers are warm before the game.
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Player</TableHead>
            <TableHead>Ping</TableHead>
            <TableHead>Badge</TableHead>
            <TableHead>Average WPM</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Shkoki</TableCell>
            <TableCell>33ms</TableCell>
            <TableCell>
              <Badge>Noob Stomper</Badge>
            </TableCell>
            <TableCell className="font-semibold">71</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
