import Card from "@/components/Card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 justify-center items-center border-2">
      <div className="flex flex-col items-center gap-4 mt-20">
        <h1 className="text-center text-6xl font-bold text-blue-600">
          Welcome to NotesApp
        </h1>
        <p className="text-slate-800 text-center text-lg italic">
          A simple and powerful note-taking app for your everyday thoughts.
        </p>
        <Button
          variant="outline"
          className="border-blue-800 text-blue-800 hover:text-blue-800 hover:bg-blue-50"
        >
          Buat Catatan Baru
        </Button>
      </div>
      <div>
        <h1 className="font-bold text-xl mb-4">Fitur</h1>
        <div className="flex gap-4">
          <Card
            title="Create Notes"
            content="Blablabla"
          />
          <Card
            title={"View Notes"}
            content={
              "Browse all your notes and find them easily whenever you need."
            }
          />
          <Card
            title={"Edit Notes"}
            content={
              "Update and modify your notes whenever needed with just a few clicks."
            }
          />
        </div>
      </div>
    </div>
  );
}
