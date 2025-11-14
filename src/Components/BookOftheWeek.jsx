import React from "react";
import { Pencil, Trash2, User, Mail, Star } from "lucide-react";
export default function BookOftheWeek() {
  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold text-center">Book of the Week</h1>
      </div>
      <div className="w-11/12 mx-auto py-8">
        <div className="bg-white shadow-md border border-green-200 rounded-xl overflow-hidden flex flex-col md:flex-row">
          {/* Image Section */}
          <div className=" p-4 flex justify-center items-center md:w-1/3">
            <img
              className="w-48 md:w-56 rounded-lg shadow-sm border "
              src="https://m.media-amazon.com/images/I/610qaD5PskL.jpg"
              alt="moby-dick"
            />
          </div>

          {/* Content Section */}
          <div className="card-body p-6 md:w-2/3 space-y-4">
            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-bold text-green-700">
              Moby-Dick
            </h2>

            {/* Book Info */}
            <div className="space-y-3 text-gray-700">
              <p className="flex items-center gap-2">
                <User size={18} className="text-green-600" />
                <span className="font-medium">Author:</span> Herman Melville
              </p>

              <p className="flex items-center gap-2">
                <Mail size={18} className="text-green-600" />
                <span className="font-medium">Uploaded By:</span>{" "}
                herman@melville.com
              </p>

              <p className="flex items-center gap-2">
                <Star size={18} className="text-green-600" />
                <span className="font-medium">Rating:</span> 5
              </p>
            </div>

            {/* Summary */}
            <p className="text-gray-600 leading-relaxed">
              The novel is a detailed narrative of a vengeful sea captain's
              obsessive quest to hunt down a giant white sperm whale that bit
              off his leg. The captain's relentless pursuit, despite the
              warnings and concerns of his crew, leads them on a dangerous
              journey across the seas. The story is a complex exploration of
              good and evil, obsession, and the nature of reality, filled with
              rich descriptions of whaling and the sea.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
