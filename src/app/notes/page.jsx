"use client";
import CardNotes from "@/components/my-component/CardNotes";
import { Loader } from "lucide-react";
import React, { useEffect, useState } from "react";
import jwt from "jsonwebtoken";

const AllNotesPage = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  const payload = jwt.decode(token)

  console.log(payload)

  const userId = payload.userId

  const fetchNotes = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/notes`);
      const data = await response.json();
      setNotes(data.data.notes);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);


  return (
    <div className="container max-w-screen-lg mx-auto p-4">
      <h1 className="mt-6 text-4xl font-bold text-center text-blue-500 mb-10">
        All Notes
      </h1>

      {loading ? (
        <div className="mt-20 flex flex-col justify-center items-center gap-4 text-center text-2xl text-gray-500">
          <Loader size={24} className="animate-spin text-blue-700" />
          <p>Mengambil catatan...</p>{" "}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
          {notes.map((note) => {
            return <CardNotes key={note.id_notes} note={note} isOwner={userId === note.id_user} />;
          })}
        </div>
      )}

      {/* {loading ? (
        <div className="mt-20 flex flex-col justify-center items-center gap-4 text-center text-2xl text-gray-500">
        <Loader size={24} className="animate-spin text-blue-700" />
        <p>Mengambil catatan...</p>{" "}
      </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
          {notes.map((note) => (
            <CardNotes key={note.id_notes} note={note}/>
          ))}
        </div>
      )} */}
    </div>
  );
};

export default AllNotesPage;
