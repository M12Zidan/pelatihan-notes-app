"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const NotesPage = () => {
  const [data, setData] = useState("");
  const [input, setInput] = useState("");

  const handleClick = (data) => {
    setData(data)
  }

  return (
    <div>
      <h1 className="text-2xl">Notes Page</h1>

      <p className="text-2xl mt-2">{`Isi State: ${data}`}</p>

      <Card className="mt-10">
        <CardHeader>
          <CardTitle className="text-2xl">Menampilkan State</CardTitle>
          <CardDescription className="text-lg">
            Inputkan Data di bawah ini untuk menampilkannya kedalam State
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Label>Masukan Data yang di input</Label>
          <Input onChange={(e) => setInput(e.target.value)}></Input>
        </CardContent>
        
        <CardFooter className="flex gap-4">
          <Button onClick={() => handleClick(input)} className="text-2xl mt-2">
            Masukan Data
          </Button>

          <Button onClick={() => setData("")} className="text-2xl ml-2 mt-2">
            Clear Data
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default NotesPage;
