"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchHackathonById } from "@/lib/firebaseUtils";

const HackathonDetails = () => {
  const { id } = useParams(); // ✅ clean and correct in App Router
  const [hackathon, setHackathon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const getHackathon = async () => {
        const data = await fetchHackathonById(id);
        setHackathon(data);
        setLoading(false);
      };
      getHackathon();
    }
  }, [id]);

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (!hackathon) return <div className="text-center mt-10">Hackathon not found.</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-4">{hackathon.title}</h1>
      <p className="text-lg mb-4">{hackathon.description}</p>
      <p className="text-gray-600 mb-2">
        Prize: <span className="font-semibold">{hackathon.prize}</span>
      </p>
      <p className="text-gray-600">
        Dates: <span className="font-semibold">{hackathon.startDate}</span> to{" "}
        <span className="font-semibold">{hackathon.endDate}</span>
      </p>
    </div>
  );
};

export default HackathonDetails;
