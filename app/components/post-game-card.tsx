import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Props = {};

export default function PostGameCard({}: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Congratulations!</CardTitle>
        <CardDescription>Your destroyed it champ</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Player</TableHead>
              <TableHead>Place</TableHead>
              <TableHead>Fastest word</TableHead>
              <TableHead>Race WPM</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Shkoki</TableCell>
              <TableCell>1.</TableCell>
              <TableCell>Sunshine</TableCell>
              <TableCell>88</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter className="flex justify-center space-x-4">
        <Button variant={"outline"}>New Lobby</Button>
        <Button>Race Again</Button>
      </CardFooter>
    </Card>
  );
}
